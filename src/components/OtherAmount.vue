<template>
  <div>
    <form @submit.prevent="submit">
      <v-field label="Pin" :v="$v.pin">
        <input type="number" v-model="amount" @blur="$v.amount.$touch()" />
      </v-field>
      <button type="submit" :class="{ invalid: $v.$invalid }">Enter</button>
    </form>
  </div>
</template>

<script>
import VField from "./V-field.vue";
import { required, maxValue } from "vuelidate/lib/validators";
const greaterThanZero = value => value > 0;
export default {
  components: {
    VField
  },
  data() {
    return {
      amount: 0
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      //   if (!this.$v.$error) {
      //   }
    }
  },
  validations: {
    amount: {
      required,
      greaterThanZero,
      maxValue: maxValue(20000)
    }
  }
};
</script>

<style>
button.invalid {
  opacity: 0.5;
}
</style>
