<template>
  <div id="home-container">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <GameCard msg="Welcome to the 12321"/>
  </div>
</template>

<script>
import GameCard from './components/admin/GameCard.vue'

export default {
  name: 'home-container',
  components: {
    GameCard
  }
}
</script>

<style>
#home-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
