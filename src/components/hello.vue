<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h2>{{ msg }}</h2>
    <h1>多语言专家系统</h1>
    <ul>
      <li><span><router-link to="/login">登录</router-link></span></li>
      <li><span><router-link to="/register">注册</router-link></span></li>
    </ul>
    <div class='tiaoshi'>
      以下链接用于页面调试
      <br>
      <ul>
        <li><span><router-link to="/cho">查询选择</router-link></span></li>
        <li><span><router-link to="/header">头部</router-link></span></li>
        <li><span><router-link to="/list">列表</router-link></span></li>
        <li><span><router-link to="/dict">词典</router-link></span></li>
        <li><span><router-link to="/sep">分隔符</router-link></span></li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎使用'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
span {
  background: black;
  width: 140px;
}

</style>
