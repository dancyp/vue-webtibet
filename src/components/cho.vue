<template>
  <el-container>
    <el-header>
      <div class = 'title'>欢迎使用多语言专家系统-{{dic_lang}}</div>
    </el-header>
    <el-main>
      <div id='chosbox'>
        <span><router-link to="/sep"><h3>字典管理</h3></head></router-link></span>
        <span><router-link to="/sep"><h3>分隔符管理</h3></router-link></span>
        <span><router-link to="/sep"><h3>数字管理</h3></router-link></span>
        <span><router-link to="/sep"><h3>人名管理</h3></router-link></span>
      </div>
    </el-main>
  </el-container>  
     
</template>

<script>
  export default {
  name: '',
  data () {
    return {
      dic_lang: '藏语'
    }
  }
}
</script>

<style>
  .title{
    display: flex;
    justify-content:flex-start;
  }
  .el-header{
    background-color: #409EFF;
  }
  .el-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  #chosbox{
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content:space-between;
  }
</style>