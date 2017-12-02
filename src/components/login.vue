<template lang="html">
  <div id='log'>
    <img src="../assets/logo.png">
    <div class='container'>
      <form action="" method="post">
        用户: <input type="text" name="account" />
        <br>  
        密码: <input type="password" name="password" />
        <br>
        <input type="submit" value="Submit" />
      </form> 
    </div>
  </div>
</template>
<script>
  export default {
    name: 'log',
    data () {
      return {
        msg: 'dsdsd',
      }
    }
}
</script>
<style>
	
</style>