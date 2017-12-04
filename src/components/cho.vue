<template>
  <el-container>
      <el-header>
        <span>{{manage_type}}</span>
        <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
        <span>{{user}} <router-link to="/cholang">返回</router-link></span>       
      </el-header>
    <el-main>
      <div id='chosbox'>
        <span><router-link :to="'/dict/'+url_lang"><h3>字典管理</h3></head></router-link></span>
        <span><router-link :to="'/sep/separator/'+url_lang"><h3>分隔符管理</h3></router-link></span>
        <span><router-link :to="'/sep/num/'+url_lang"><h3>数字管理</h3></router-link></span>
        <span><router-link :to="'/sep/name/'+url_lang"><h3>人名管理</h3></router-link></span>
        <span><router-link to="/uploadfile"><h3>文件上传</h3></router-link></span>
      </div>
    </el-main>
  </el-container>  
</template>

<script>
  export default {
  name: '',
  data () {
    return {
      user:"admin",
      manage_type:"选择功能",
      dic_lang: '藏语',
      url_lang: 'tibet'
    }
  },
  created:function(){
    this.$data.url_lang=this.$route.params.language;
    console.log(this.$data.url_lang);
    if(this.$data.url_lang==="tibet"){
      this.$data.dic_lang="藏语";
    }else if(this.$data.url_lang==="urdu"){
      this.$data.dic_lang="乌尔都语";
    }else{
      this.$data.dic_lang="未选择语言";
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