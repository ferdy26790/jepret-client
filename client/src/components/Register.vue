<template>
  <div style="width: 60%;" class="">

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Name</label>
      <input v-model="name" type="text" class="form-control" placeholder="Default input" id="inputDefault">
    </div>

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Default input" id="inputDefault">
    </div>

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Default input" id="inputDefault">
    </div>

    <div class="form-group">
      <label for="exampleTextarea">About</label>
      <textarea v-model="about" class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>

    <button v-on:click="regis" type="button" class="btn btn-primary">Register</button>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      about: this.about
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    regis () {
      let payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        about: this.about
      }
      this.register(payload)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
