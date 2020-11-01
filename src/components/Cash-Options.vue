<template>
  <div>
    <div class="fast-cash">
      <button class="btn btn--primary mx-auto" @click="withDrawFashCash(3000)">
        Rs. 3000
      </button>
      <button class="btn btn--primary mx-auto" @click="withDrawFashCash(5000)">
        Rs. 5000
      </button>
      <button class="btn btn--primary mx-auto" @click="withDrawFashCash(10000)">
        Rs. 10000
      </button>
      <button class="btn btn--primary mx-auto" @click="navigate">
        Other
      </button>
    </div>
    <v-dialog
      @before-opened="dialogEvent('before-open')"
      @before-closed="dialogEvent('before-close')"
      @opened="dialogEvent('opened')"
      @closed="dialogEvent('closed')"
    />
  </div>
</template>

<script>
import ProcessingModal from "./ProcessingModal.vue";
import ReceiptModal from "./ReceiptModal.vue";

export default {
  components: {},
  data() {
    return {
      amount: 0,
      totalAmount: 20000,
      showLoadingModal: false
    };
  },
  methods: {
    withDrawFashCash(amount) {
      this.amount = amount;
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
    },

    dialogEvent(eventName) {
      console.log("Dialog event: " + eventName);
    },
    navigate() {
      this.$router.push({ name: "cashWithdraw" });
    }
  },
  computed: {
    remainingBalance() {
      return this.totalAmount - this.amount;
    }
  }
};
</script>

<style lang="scss">
.btn {
  padding: 8px 16px;
  border-radius: 5px;
  &--primary {
    background-color: green;
    color: #fff;
  }
  &--secondary {
    background-color: #dddd;
    color: #000;
  }
}

// reset
button {
  background: none;
  border: none;
  outline: inherit;
  cursor: pointer;
}
.mr-5 {
  margin-right: 5px;
}

.example-modal-content {
  //  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 13px;
  line-height: 1.5;
  overflow: auto;
}
</style>
