<template>
<div>
    <img src="../assets/diclogo.png" height="256" width="256">
<div class="login-box" id="app" >
 <el-row>
	<el-col :span="8">
		<el-input id="name"  v-model="name" placeholder="请输入帐号">
			<template slot="prepend">帐号</template>
		</el-input> 
	</el-col>
 </el-row>
 <el-row>
	<el-col :span="8">
		<el-input id="password" v-model="password" type="password" placeholder="请输入密码">
			<template slot="prepend">密码</template>
		</el-input>
	</el-col>
 </el-row>
 <el-row>
	<el-col :span="8">
		<el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
	</el-col>
 </el-row>
</div> 
</div>
</template>
<script>
import axios from "axios"
export default {
  name: 'log',
    data () {
      return {
        name:'',
        password:''
      }
    },
    methods:{
        check(){
        var baseurl = "http://139.224.15.56:3000/user/login"
        axios.post(baseurl,{name:this.$data.name,password:this.$data.password})
        .then(function (response) {
            console.log(response);
            if(response.data.msg==="success"){
                window.location.href='http://localhost:8080/#/cholang';
            }else{
                alert("账号或密码错误！");
            }
        })
        .catch(function (error) {
            console.log(error);
            alert("账号或密码错误！");
        });
        }
    }
}
</script>
<style>
.el-row {
    margin-bottom: 20px;
  }
	.login-box {
		margin-top:20%;
		margin-left:40%;
	}
</style>
</style>

