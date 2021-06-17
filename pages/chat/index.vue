<template>
  <div>
    <b-container>
      <h1>チャットルームへようこそ！</h1>
      <h2>チャットトピックを入力してください。</h2>
      <b-form-textarea
        v-model="username"
        placeholder="please enter your username"
        required
      >
      </b-form-textarea
      ><br />
      <b-form-textarea
        id="textarea"
        v-model="topic"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        required
      ></b-form-textarea>
      <b-button variant="danger" @click="enterRoom">部屋に入る</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: "",
      username: ""
    };
  },
  methods: {
    enterRoom: function() {
      this.$store.commit("setUserName", this.username);
      this.$router.push(`/chat/${this.topic}`);
    }
  }
};
</script>
