<template>
  <div id="home-admin">
    <router-link tag="li" to="/foo">
      <a>/foo</a>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'home-admin',
  components: {
    //GameCard
  }
}
</script>

<style>
#home-admin {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
