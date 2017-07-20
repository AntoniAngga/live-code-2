<template lang="html">
  <div class="Login">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
      <div class="container">
        <div class="omb_login">
          <img style = "    margin-left: 500px; height: 150px;" src="https://s.aolcdn.com/os/help-main/content-types/l/article.png">
        	<h2 class="omb_authTitle">Welcome To Artikel</h2>
          <h3 class="omb_authTitle">Login or <router-link to="/register"> Sign up</router-link></h3>
    		<div class="row omb_row-sm-offset-3">
    			<div class="col-xs-12 col-sm-6">	
    					<div class="input-group">
    						<span class="input-group-addon"><i class="fa fa-user"></i></span>
    						<input type="text" class="form-control" name="emai" v-model="user.username" placeholder="Username">
    					</div>		
    					<div class="input-group">
    						<span class="input-group-addon"><i class="fa fa-lock"></i></span>
    						<input  type="password" class="form-control" name="password" v-model="user.password" placeholder="Password">
    					</div>
              <span class="help-block">{{msg}}</span>
    					<button class="btn btn-lg btn-primary btn-block" @click="doLogin">Login</button>
    			</div>
        	</div>
    		</div>	    	
    	</div>
    </div>
</template>

<script>
export default {
  data() {
   return {
     user:{
       username: '',
       password: ''
     },
     msg : null
   }
 },
 methods: {
   doLogin: function(){
     self = this
     this.axios.post('http://localhost:3000/login', {
       username:self.user.username,
       password:self.user.password
     })
     .then((response)=>{
       let token = response.token
       window.localStorage.setItem('token',token)
       self.$store.commit('changeIsLogin',true)
       self.$router.push('/dashboard')
     })
     .catch((err)=>{
       console.log(err);
     })
   }
    }
  }
</script>

<style scoped>
@media (min-width: 768px) {
    .omb_row-sm-offset-3 div:first-child[class*="col-"] {
        margin-left: 25%;
    }
}

.omb_login .omb_authTitle {
  text-align: center;
	line-height: 300%;
  margin-top: -29px;
}
	
.omb_login .omb_socialButtons a {
	color: white; // In yourUse @body-bg 
	opacity:0.9;
}
.omb_login .omb_socialButtons a:hover {
    color: white;
	opacity:1;    	
}

.omb_login .omb_loginOr {
	position: relative;
	font-size: 1.5em;
	color: #aaa;
	margin-top: 1em;
	margin-bottom: 1em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
}
.omb_login .omb_loginOr .omb_hrOr {
	background-color: #cdcdcd;
	height: 1px;
	margin-top: 0px !important;
	margin-bottom: 0px !important;
}
.omb_login .omb_loginOr .omb_spanOr {
	display: block;
	position: absolute;
	left: 50%;
	top: -0.6em;
	margin-left: -1.5em;
	background-color: white;
	width: 3em;
	text-align: center;
}			

.omb_login .omb_loginForm .input-group.i {
	width: 2em;
}
.help-block {
    color: red;
}

	
@media (min-width: 768px) {
    .omb_login .omb_forgotPwd {
        text-align: right;
		margin-top:10px;
 	}		
}
</style>
