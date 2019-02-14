<template>
  <b-container>
    <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
    </b-row>
    <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
    </b-row>
    <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
      <p>For more information visit website</p>
      <b-btn variant="primary" href="#">More Info</b-btn>
    </b-jumbotron>
    <div class="projects-container">
      <h1>{{ msg }}</h1>
      <h1>Projects</h1>
      <b-button>I am a Button</b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      msg: 'Welcome to Crypto Info'
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
