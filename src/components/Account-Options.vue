<template>
  <div>
    <button @click="navigate('current')">Current</button>
    <button @click="navigate('savings')">Savings</button>
    <button @click="onLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),

    navigate(accountType) {
      console.log("navigate", this.$route.path);
      const path = `/account/${accountType}`;
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    onLogout() {
      this.logout();
    }
  }
};
</script>

<style></style>
