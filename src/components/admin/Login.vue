<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="6" class="back rounded">
        <b-row>
          <b-col>
            <b-form-group
              id="fieldset1"
              description="Let us know your name."
              label="Enter your name"
              label-for="input1"
              :invalid-feedback="invalidFeedback"
              :valid-feedback="validFeedback"
              :state="state">
              <b-form-input id="input1" :state="state" v-model.trim="name"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="fieldset1"
              description="Let us know your name."
              label="Enter your password"
              label-for="input1"
              :invalid-feedback="invalidFeedback"
              :valid-feedback="validFeedback"
              :state="state">
              <b-form-input id="input1" :state="state" v-model.trim="name"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Crypto Info'
    }
  }
}
</script>

<style scoped>
.back {
  background: #000;
}
</style>
