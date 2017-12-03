<template lang="html">
  <div id='log'>
    <img src="../assets/diclogo.png" height="256" width="256">
    <br><br><br>
    <div class='container'>
      <form action="http://139.224.15.56:3000/usr/login" enctype="x-www-form-urlencoded" method="post">
        用户: <input type="text" name="name" />
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