<template>
  <div>
    <h1>サインアップ！！</h1>
    <div>
      <b-form>
        <b-form-group label="email">
          <b-form-input
            v-model="email"
            type="email"
            placeholder="please enter your email"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group label="password">
          <b-form-input
            v-model="password"
            type="password"
            placeholder="please enter a password"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-button @click="signup" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup: function() {
      console.log({ email: this.email, password: this.password });
      this.$nuxt.$emit("signup", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
