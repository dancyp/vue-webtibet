<template lang="html">
  <div id='log'>
    <img src="../assets/logo.png">
    <div class='container'>
      <p><span>用户:</span><input type="text"></p>
      <p><span>密码:</span><input type="password"></p>

      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          选择语言
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>

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
    name: 'log',
    data () {
      return {
        msg: 'dsdsd'
      }
    }
}

</script>
<style>
	
</style>