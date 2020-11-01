<template>
  <div>
    <form @submit.prevent="submit">
      <v-field label="Pin" :v="$v.amount">
        <input
          class="amount-field"
          type="number"
          v-model="amount"
          @blur="$v.amount.$touch()"
        />
      </v-field>
      <button type="submit" :class="{ invalid: $v.$invalid }">Enter</button>
    </form>
    <v-dialog />
  </div>
</template>

<script>
import VField from "./V-field.vue";
import { required, maxValue } from "vuelidate/lib/validators";
import ProcessingModal from "./ProcessingModal.vue";
import ReceiptModal from "./ReceiptModal.vue";

const greaterThanZero = value => value > 0;
export default {
  components: {
    VField
  },
  data() {
    return {
      amount: "",
      totalAmount: 50000
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.withDrawFashCash();
      }
    },
    withDrawFashCash() {
      this.$modal.show("dialog", {
        text: `
        <p style="text-align:center;">Are you sure you want to withdraw ${this.amount}?</p>
        <p style="text-align:center;">Your remaining balance would be: ${this.remainingBalance}</p>
        `,
        buttons: [
          {
            title: "No",
            handler: () => {
              this.amount = 0;
              this.$modal.hide("dialog");
            }
          },
          {
            title: "Yes",
            default: true,
            handler: () => {
              this.$modal.hide("dialog");
              this.showProcessingModal();
            }
          }
        ]
      });
    },
    showProcessingModal() {
      this.$modal.show(
        ProcessingModal,
        {},
        {
          width: "400px",
          height: "auto",
          clickToClose: false,
          name: "processingModal"
        }
      );

      setTimeout(() => {
        this.$modal.hide("processingModal");
        this.showReceiptModal();
      }, 2000);
    },
    showReceiptModal() {
      this.$modal.show(
        ReceiptModal,
        {
          amount: this.amount,
          remainingBalance: this.remainingBalance
        },
        {
          width: "400px",
          height: "auto",
          clickToClose: false,
          name: "receiptModal"
        }
      );
    }
  },
  validations: {
    amount: {
      required,
      greaterThanZero,
      maxValue: maxValue(20000)
    }
  },
  computed: {
    remainingBalance() {
      return this.totalAmount - this.amount;
    }
  }
};
</script>

<style lang="scss" scoped>
button.invalid {
  opacity: 0.5;
}
.amount-field {
  border-style: solid;
}
</style>
