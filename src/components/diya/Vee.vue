<template>
  <div class="column is-12">
    <label class="label" for="email">Email</label>
    <p class="control">
      <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
