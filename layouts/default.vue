<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "DotGothic16", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-family: "DotGothic16", sans-serif;
  text-align: center;
  background-color: #fdca40;
}
</style>
<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {};
  },
  created() {
    this.setListener();
  },
  methods: {
    setListener: function() {
      this.$nuxt.$on("signup", this.signup);
      this.$nuxt.$on("login", this.login);
      this.$nuxt.$on("getMessages", this.getMessages);
      this.$nuxt.$on("sendMessage", this.sendMessage);
      this.$nuxt.$on("setUserName", this.setUserName);
    },
    signup: function(event) {
      console.log(event);
      firebase
        .auth()
        .createUserWithEmailAndPassword(event.email, event.password)
        .then(() => {
          this.$router.push("/chat");
        })
        .catch(error => {
          console.log(error);
        });
    },
    login: function(event) {
      firebase
        .auth()
        .signInWithEmailAndPassword(event.email, event.password)
        .then(() => {
          this.$router.push("/chat");
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMessages: function(event) {
      const db_ref = firebase.database().ref(event.topic);
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
    },
    sendMessage: function(event) {
      const db_ref = firebase.database().ref(event.topic);
      const message = {
        username: this.$store.state.username,
        message: event.message
      };
      db_ref.push(message);
    },
    setUserName: function(event) {
      this.username = event.username;
    }
  }
};
</script>
