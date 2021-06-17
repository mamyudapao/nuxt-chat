<template>
  <div>
    <h1>ようこそ!Nuxt-Fire-Chatへ！</h1>
    <hr />
    <h2>サインインかログインしてください</h2>
    <b-container>
      <nuxt-link to="/signup" class="link">サインイン！</nuxt-link>
      <nuxt-link to="/login" class="link">ログイン！</nuxt-link>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.link {
  margin: 15px;
  font-size: 1.5rem;
}
</style>
