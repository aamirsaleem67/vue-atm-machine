<template>
  <div
    class="field"
    :class="{
      error: v.$error,
      valid: !v.$invalid,
      required: v.$params.required
    }"
  >
    <label>{{ label }}</label>
    <slot></slot>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: ["label", "v"],
  computed: {
    message() {
      if (this.v.$error) {
        for (let key in this.$options.messages) {
          if (this.v[key] === false) {
            return this.$options.messages[key](this.v);
          }
        }
      }
      return null;
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  messages: {
    //Add more messages here when you need, the key should be the same as the name of the validator
    required: () => "This field is required",
    maxLength: v => `Enter ${v.$params.maxLength.max} characters valid pin`,
    minLength: v => `Enter ${v.$params.minLength.min} characters valid pin`,
    cardFormat: () => "Card format is invalid",
    greaterThanZero: () => "Should be greater than zero",
    maxValue: v => `Limit is ${v.$params.maxValue.max}`
  }
};
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 10px;
  &.required label::after {
    content: "*";
    color: red;
  }
  &.valid {
    input {
      border-color: green;
    }
    label::after {
      color: green;
    }
  }
  &.error {
    color: red;
    input {
      border-color: red;
    }
  }
  .note {
    font-size: 12px;
  }
}
</style>
