<template>
  <el-container>
      <el-header>
            <div class = 'title'>
                <span>{{manage_type}}</span>
                <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
                <span>{{user}} <span>返回</span></span>
            </div>
      </el-header>
      <el-main>
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
      </el-main>
  </el-container>
</template>

<script>
export default {
  name:'',
  data () {
    return {
      manage_type: '分隔符管理',
      dic_lang: '藏语',
      user: 'admin',
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  }
}
</script>

<style>
   .title{
        display: flex;
        justify-content: space-between;
    }
    .el-header{
        background-color: #409EFF;
        align-items: center;
    }
    .wordlist{
        display: none;
    }
</style>


