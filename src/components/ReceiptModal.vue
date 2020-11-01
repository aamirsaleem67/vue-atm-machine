<template>
  <div style="padding: 20px">
    <p>Amount withdraw: {{ this.amount }}</p>
    <p>Remaining Balance: {{ this.remainingBalance }}</p>
    <p>Date: {{ new Date() }}</p>
    <pre> You will be logged out in {{ seconds }} seconds... </pre>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["amount", "remainingBalance"],
  methods: {
    ...mapActions(["logout"])
  },
  data() {
    return {
      seconds: 5,
      interval: null
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.seconds = this.seconds - 1;
    }, 1000);
  },
  watch: {
    seconds(val) {
      if (val === 0) {
        this.$modal.hide("receiptModal");
        this.logout();
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
