<template>
  <div>
    <h1>{{ $route.params.topic }}</h1>
    <b-jumbotron class="backtron">
      <div v-for="m in messages" :key="m.id">
        <div v-if="m.username == username">
          <p class="right">{{ m.username }}: {{ m.message }}</p>
        </div>
        <div v-else>
          <p class="left">{{ m.username }}: {{ m.message }}</p>
        </div>
      </div>
    </b-jumbotron>
    <b-form-group id="fieldset-1" label="コメントを入力">
      <b-form-input id="input-1" v-model="message"></b-form-input>
      <b-button variant="primary" @click="sendMessage">送信</b-button>
    </b-form-group>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      message: "",
      messages: [],
      username: this.$store.state.username
    };
  },
  mounted() {
    this.getMessages();
  },
  methods: {
    sendMessage: function() {
      this.$nuxt.$emit("sendMessage", {
        message: this.message,
        topic: this.$route.params.topic
      });
      this.message = "";
    },
    getMessages: function() {
      const db_ref = firebase.database().ref(this.$route.params.topic);
      db_ref.on("value", snapshot => {
        const data = snapshot.val();
        let messages = [];
        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            message: data[key].message
          });
        });
        this.messages = messages;
      });
    }
  }
};
</script>
<style scoped>
.left {
  text-align: left !important;
}
.right {
  text-align: right !important;
}
.backtron {
  background-color: #33a1fd;
}
</style>
