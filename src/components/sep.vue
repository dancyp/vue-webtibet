<template>
  <el-container>
      <el-header>
           
                <span>{{manage_type}}管理</span>
                <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
                <span>{{user}} <router-link :to="'/cho/'+url_lang">返回</router-link></span>
           
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
                <el-button @click="editItem(scope.row)" type="text" size="small">确认修改</el-button>
                <el-button @click="deleteItem(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
            
          </el-table>
          <el-button type="text" icon="el-icon-circle-plus" @click='addNewItem'>添加规则</el-button>
      </el-main>
  </el-container>
</template>

<script>
import axios from '../http.js'
export default {
  name:'',
  data () {
    return {
      manage_type: '分隔符',
      dic_lang: '藏语',
      url_lang:"",
      user: 'admin',
      tableData: [],
      addedNewOne: false
    }
  }, 
   created: function () {
    // `this` 指向 vm 实例
    this.$data.url_lang=this.$route.params.language;
    if(this.$data.url_lang==="tibet"){
        this.$data.dic_lang="藏语";
      }else if(this.$data.url_lang==="urdu"){
        this.$data.dic_lang="乌尔都语";
      }else{
        this.$data.dic_lang="未选择语言";
      }

    var a = this.tableData;
    if(this.$route.params.view==="separator"){
      this.$data.manage_type="分隔符";
      axios.get('http://139.224.15.56:3000/add/'+this.url_lang+'/sep/show')
        .then(function (response) {
            console.log(response);
            for(var i = 0;i<response.data.result.length;i++){
              a.push({type:response.data.result[i].arg,content:response.data.result[i].content,edit:false});
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }else if(this.$route.params.view==="num"){
      this.$data.manage_type="数字";
      axios.get('http://139.224.15.56:3000/add/'+this.url_lang+'/num/show')
        .then(function (response) {
            console.log(response);
            for(var i = 0;i<response.data.result.length;i++){
              a.push({type:response.data.result[i].arg,content:response.data.result[i].content,edit:false});
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }else{
      this.$data.manage_type="人名";
      axios.get('http://139.224.15.56:3000/add/'+this.url_lang+'/name/show')
        .then(function (response) {
            console.log(response);
            for(var i = 0;i<response.data.result.length;i++){
              a.push({type:response.data.result[i].arg,content:response.data.result[i].content,edit:false});
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
  },
  methods: {
    addNewItem: function(){
      if(this.tableData[this.tableData.length-1].type!=='原符号'){
        this.tableData.push({type:'原符号',content:'翻译符号',edit:true})
        for(var i=0;i<this.tableData.length-2;i++){
          this.tableData[i].edit=false;
        }
        this.addedNewOne = true;
      }else
        alert('还存在未修改的新增内容')
    },
    handleClick(row) {
        console.log(row);
      },
    deleteItem: function(row){
     const i = this.tableData.indexOf(row);
     console.log(row);
     const j = this.tableData.indexOf(row);
      var baseurl = "http://139.224.15.56:3000/add/"+this.url_lang;
      if(this.$data.manage_type==="分隔符"){
        baseurl = baseurl+"/sep";
      }else if(this.$data.manage_type==="数字"){
        baseurl = baseurl+"/num";
      }else{
        baseurl = baseurl+"/name";
      }
      axios.post(baseurl+"/delete",{arg:row.type})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
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
      for(var i=0;i<this.tableData.length;i++){
        if(i!==this.tableData.indexOf(row)){
          this.tableData[i].edit=false;
        }
      }
    },
    editItem: function(row){
      console.log("edit");
      console.log(row);
      console.log(row.type);
      console.log(row.content);
      const j = this.tableData.indexOf(row);
      var baseurl = "http://139.224.15.56:3000/add/"+this.url_lang;
      if(this.$data.manage_type==="分隔符"){
        baseurl = baseurl+"/sep";
      }else if(this.$data.manage_type==="数字"){
        baseurl = baseurl+"/num";
      }else{
        baseurl = baseurl+"/name";
      }
      if(j===this.tableData.length-1&&this.addedNewOne===true){
        this.addedNewOne = false;
        axios.post(baseurl+"/create",{arg:row.type,content:row.content})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      }else{
        axios.post(baseurl+"/update",{arg:row.type,content:row.content})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      }
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
        font-size: 26px;
    }
    
</style>

