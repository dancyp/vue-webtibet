<template>
  <el-container>
    <el-header>
  
                <span>{{manage_type}}</span>
                <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
                <span>{{user}} <router-link to="/cholang">返回</router-link></span>
            
      </el-header>
    <el-main>
      <div id='chosbox'>
        <span><router-link to="/dict"><h3>字典管理</h3></head></router-link></span>
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
      manage_type:"选择功能",
      dic_lang: '藏语'
    }
  }
}
</script>

<style>
 
    .el-header{
      display: flex;
      background-color: #409EFF;
       justify-content:space-between;
    }
  .el-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #chosbox{
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content:space-between;
  }
</style>