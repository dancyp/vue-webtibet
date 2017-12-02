<template>
  <div class="father-div">
    <div class="page-bg">
      <img src="" alt="">
    </div>
    <div class="hello">
      <img src="../assets/diclogo.png" height="384" width="384">
      <h2>{{ msg }}</h2>
      <h1>多语言专家系统</h1>
      <ul>
        
        <li><span><router-link to="/login"><h4>登录</h4></router-link></span></li>
      </ul>
      <div class='tiaoshi'>
        以下链接用于页面调试
        <br>
        <ul>
          <li><span><router-link to="/cho">查询选择</router-link></span></li>
          <li><span><router-link to="/cholang">选择语言</router-link></span></li>
          <li><span><router-link to="/uploadfile">上传文件</router-link></span></li>
        </ul>
      </div>
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
  width: 140px;
}

</style>
