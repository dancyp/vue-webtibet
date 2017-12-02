<template>
    <el-container>
    <el-header>
        <span>文件上传</span>
        <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
        <span>{{user}} <router-link to="/cho">返回</router-link></span>
    </el-header>
    <el-main>
        <uploader :options="options" class="uploader-example">
            <uploader-unsupport></uploader-unsupport>
            <uploader-drop>
            <p>Drop files here to upload or</p>
            <uploader-btn>select files</uploader-btn>
            <!--<uploader-btn :attrs="attrs">select images</uploader-btn>-->
            <uploader-btn :directory="true">select folder</uploader-btn>
            </uploader-drop>
            <uploader-list></uploader-list>
        </uploader>
    </el-main>    
    </el-container>
</template>

<script>
  export default {
    data () {
      return {
        dic_lang:"藏语",
        user:"admin",
        options: {
          // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
          target: '//localhost:3000/upload',
          testChunks: false
        },
        attrs: {
          accept: 'image/*'
        }
      }
    }
  }
</script>

<style>
  .uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
    .el-header{
            display: flex;
            background-color: #409EFF;
            justify-content: space-between;
        }
</style>