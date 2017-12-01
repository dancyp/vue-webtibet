<template>
  <el-container>
      <el-header>
           
                <span>{{manage_type}}管理</span>
                <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
                <span>{{user}} <router-link to="/cho">返回</router-link></span>
           
      </el-header>
      <el-main>
          <el-table
            :data="tableData"
            height="750"
            border
            stripe
            highlight-current-row
            @cell-click="cellClick"
            style="width: 68%"
            >
            <el-table-column
              prop="type"
              v-bind:label="manage_type"
              type="input"
              width="180">
             <!-- <template scope="scope" >
                <el-input v-if="scope.row.disp1" size="small" v-model="scope.row.name" placeholder="请输入名字" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                <span v-else>{{scope.row.type}}</span>
              </template>-->
             <!-- <template scope="scope">
                <el-input v-model="scope.row.type" v-if="scope.row.disp1"
                @blur="loseFcous(scope.$index, scope.row)" > </el-input>
                <span style="margin-left: 10px" v-else>{{ scope.row.type }}</span>
              </template>-->
              <template scope="scope">
               <el-input v-model="scope.row.type" v-if="scope.row.edit"
                @blur="loseFcous(scope.$index, scope.row)" @keyup.enter.native="editItem(scope.row)"> </el-input>
               <span style="margin-left: 10px" v-else>{{ scope.row.type }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="content"
              label="内容"
              >
                <template scope="scope">
                  <el-input v-model="scope.row.content" v-if="scope.row.edit"
                  @blur="loseFcous(scope.$index, scope.row)" @keyup.enter.native="editItem(scope.row)"> </el-input>
                  <span style="margin-left: 10px" v-else>{{ scope.row.content }}</span>
                </template>
                
            </el-table-column>
            
            <el-table-column
              fixed="right"
              label="操作"
              width="180">
              <template slot-scope="scope">
                <el-button @click="editItem(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="deleteItem(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
            
          </el-table>
          <el-button type="text" icon="el-icon-circle-plus" @click='addNewItem'>添加规则</el-button>
      </el-main>
  </el-container>
</template>

<script>
export default {
  name:'',
  data () {
    return {
      manage_type: '分隔符',
      dic_lang: '藏语',
      user: 'admin',
      tableData: [{
            type: '2016-05-02',
            content: '1',
            edit:false
          }, {
            type: '2016-05-04',
            content: '2',
            edit:false

          }, {
            type: '2016-05-01',
            content: '3',
            edit:false

          }, {
            type: '2016-05-03',
            content: '4',
            edit:false
          }, {
            type: '2016-05-03',
            content: '5',
            edit:false
          }, {
            type: '2016-05-03',
            content: '6',
            edit:false
          }, {
            type: '2016-05-03',
            content: '7',
            edit:false
          }, {
            type: '2016-05-03',
            content: '8',
            edit:false
          }, {
            type: '2016-05-03',
            content: '9',
            edit:false
          }, {
            type: '2016-05-03',
            content: '10',
            edit:false
          }]
    }
  }, 
   created: function () {
    // `this` 指向 vm 实例
    console.log('created!')
    console.log(this.$route.params.view);
    if(this.$route.params.view==="separator"){
      this.$data.manage_type="分隔符";
    }else if(this.$route.params.view==="num"){
      this.$data.manage_type="数字";
    }else{
      this.$data.manage_type="人名"
    }
  },
  methods: {
    addNewItem: function(){
      if(this.tableData[this.tableData.length-1].type!=='原符号'){
        this.tableData.push({type:'原符号',content:'翻译符号',edit:false})
      }else
        alert('还存在未修改的新增内容')
    },
    handleClick(row) {
        console.log(row);
      },
    deleteItem: function(row){
     const i = this.tableData.indexOf(row);
     console.log(row);
     this.tableData.splice(i,1);
    },
    //onCellClick(row, column, cell, event) {
    //    console.log(cell);
    //  },
    loseFcous(index, row,cell) {
      row.edit=false;
      console.log("losefocus")
      },
    cellClick(row, column,cell) {
      if(column.fixed!=='right')
        row.edit=true;
      console.log("cell")
      console.log(cell)

      console.log("column")
      console.log(column)
    },
    editItem: function(row){
      console.log(row)
      console.log("edit")
      row.edit=false;
    }
  }
}
</script>

<style>
    .el-header{
        display: flex;
        background-color: #409EFF;
        justify-content: space-between;
    }
    
</style>

