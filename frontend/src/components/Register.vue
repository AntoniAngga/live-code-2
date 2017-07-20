<template lang="html">
  <div class="Register">
    <div class="container">
      <div class="row">
          <h3 class="col-sm-offset-3 col-sm-6">Signup</h3>
      </div
      <div class="row">
          <div class="col-sm-offset-1 col-sm-2">
          </div>
          <div class="col-sm-6">
            <div class="row">
                <div class="col-xs-12 col-md-12">
                    <input type="text" name="Full Name" v-model="register.name" class="form-control input-lg" placeholder="Full name"  />
                </div>
            </div>
            <input type="text" name="Username" value="" class="form-control input-lg" v-model="register.username" placeholder="Username"  />
            <input type="password" name="password" value="" class="form-control input-lg" v-model="register.password" placeholder="Password"  />
            <br/>
            <br>
            <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit" @click="doSignup">Create my account</button>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data () {
    return {
      register: {
        username: null,
        password: null,
        name: null
      }
    }
  },
  methods: {
    doSignup(){
      let self=this;
      console.log(this.user);
      this.axios.post('http://localhost:3000/users',{
        username: self.register.username,
        password: self.register.password,
        name: self.register.name
      })
      .then((response) =>{
        if (response.data.hasOwnProperty('error')) {
          console.log(response.data.error);
        }else {
          console.log(response.data);
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
