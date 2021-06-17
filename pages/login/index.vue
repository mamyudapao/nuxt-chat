<template>
  <div>
    <h1>ログイン！！！</h1>
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
        <b-button @click="login" variant="primary">Submit</b-button>
        <b-button @click="testLogin1" variant="primary"
          >テストユーザー1</b-button
        >
        <b-button @click="testLogin2" variant="primary"
          >テストユーザー2</b-button
        >
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      testEmail1: "test@example.com",
      testPassword1: "password123",
      testEmail2: "test2@example.com",
      testPassword2: "password123"
    };
  },
  methods: {
    login: function() {
      this.$nuxt.$emit("login", {
        email: this.email,
        password: this.password
      });
    },
    testLogin1: function() {
      this.$nuxt.$emit("login", {
        email: this.testEmail1,
        password: this.testPassword1
      });
    },
    testLogin2: function() {
      this.$nuxt.$emit("login", {
        email: this.testEmail2,
        password: this.testPassword2
      });
    }
  }
};
</script>
