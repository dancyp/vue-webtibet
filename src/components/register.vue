<template lang="html">
  <div id='reg'>
    <img src="../assets/logo.png">
    <div class='container'>
      <p><span>用户:</span><input type="text"></p>
      <p><span>密码:</span><input type="password"></p>
      <p><span>再次输入：<input type="password"></span></p>
      <div>
        <input type="submit" value="登录">
        <div>
          <router-link to="/">返回</router-link>
        </div>
      </div>   
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reg',
    data () {
      return {
        msg: 'dsdsd'
      }
    }
}
</script>
<style>
	
</style>