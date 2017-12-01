<template lang="html">
  <div id='log'>
    <img src="../assets/logo.png">
    <div class='container'>
      <p><span>用户:</span><input type="text"></p>
      <p><span>密码:</span><input type="password"></p>  
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
        msg: 'dsdsd',
          options: [{
            value: '选项1',
            label: '藏语'
          }, {
            value: '选项2',
            label: '乌尔都语'
          }, {
            value: '选项3',
            label: '其他1'
          }, {
            value: '选项4',
            label: '其他2'
          }, {
            value: '选项5',
            label: '其他3'
          }],
          value: ''
      }
    }
}
</script>
<style>
	
</style>