<template>
  <el-container id="wholeWindow">
    <el-header>
        <span>词典</span>
        <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
        <span>{{user}} <router-link :to="'/cho/'+url_lang">返回</router-link></span>
    </el-header>
    <el-container id="Window" >
      <el-aside width="15%">
        <el-table
            :data="IniList"
            height="750"
            border
            id="IniIdx"
            highlight-current-row
            @cell-click="cellIniClick">
              <el-table-column
                prop="Ini"
                label="首字母">
              </el-table-column>
          </el-table>
      </el-aside>
      <el-container>
        <el-aside 
        id="wordList"
        width="24%"
        v-bind:class='{dodisplay:showlist,dontdisplay:(!showlist)}'>
          <el-table
            :data="ListTable"
            height="750"
            border
            highlight-current-row
            @cell-click="cellWClick">
              <el-table-column
                prop="english"
                label="单词列表">
              </el-table-column>
          </el-table>
        </el-aside>
        <el-main>
          <div id="head">
            <input type="text" size="large" placeholder="要查询的单词" v-model="searchWord">
            <el-button type="primary" icon="el-icon-search"size="mini" @click="searchButton">搜索</el-button>
          </div>
          <div >
            <div >{{word[0]}}</div>
            <div >{{word[1]}}</div>
           <div>
                <template>
                  <el-input v-model="word[2]" v-if="this.flag" 
                  @blur="loseFocus()" @keyup.enter.native="editItem()"> </el-input>
                  <span style="margin-left: 10px" v-else @click="textClick">{{ word[2] }}</span>
                </template>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import axios from '../http.js'
  export default {
    data() {
      return {
        activeIndex: '1',
        wordListDisp: "none",
        dic_lang:"藏语",
        url_lang:'tibet',
        user:'admin',
        searchWord:'',
        showlist: false,
        flag: false,
        word:[],
        IniList:[{
          Ini:"A"
        },{
          Ini:"B"
        },{
          Ini:"C"
        },{
          Ini:"D"
        },{
          Ini:"E"
        },{
          Ini:"F"
        },{
          Ini:"G"
        },{
          Ini:"H"
        },{
          Ini:"I"
        },{
          Ini:"J"
        },{
          Ini:"K"
        },{
          Ini:"L"
        },{
          Ini:"M"
        },{
          Ini:"N"
        },{
          Ini:"O"
        },{
          Ini:"P"
        },{
          Ini:"Q"
        },{
          Ini:"R"
        },{
          Ini:"S"
        },{
          Ini:"T"
        },{
          Ini:"U"
        },{
          Ini:"V"
        },{
          Ini:"W"
        },{
          Ini:"X"
        },{
          Ini:"Y"
        },{
          Ini:"Z"
        }],
        ListTable:[]
      };
    },
    created:function(){
      this.$data.url_lang=this.$route.params.language;
      if(this.$data.url_lang==="tibet"){
        this.$data.dic_lang="藏语";
      }else if(this.$data.url_lang==="urdu"){
        this.$data.dic_lang="乌尔都语";
      }else{
        this.$data.dic_lang="未选择语言";
      }
    },
    methods: {
      textClick(){
        this.flag=true;
      },
      loseFocus(){
        this.flag=false;
      },
      editItem(){
        var baseurl = "http://139.224.15.56:3000/dic/"+this.url_lang+"/word/update";
         axios.post(baseurl,{eng:this.word[0],chinese:this.word[1],zang:this.word[2]})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.flag=false;
      },
      cellIniClick(row,cell){
        var baseurl = "http://139.224.15.56:3000/dic/"+this.url_lang+"/words?initial=";
        var a = this.ListTable;
        this.ListTable.splice(0,this.ListTable.length);
        this.word.splice(0,this.word.length);
        this.$data.showlist=true;
        baseurl = baseurl + row.Ini.toLowerCase();
        axios.get(baseurl)
        .then(function (response) {
            console.log(response);
            console.log(response.data.result);
            for(var i = 0;i<response.data.result.length;i++){
              a.push(response.data.result[i]);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      cellWClick(row,cell){
        var baseurl = "http://139.224.15.56:3000/dic/"+this.url_lang+"/word/";
        baseurl = baseurl + row.english.replace(/\//g, "%2F").replace(/\?/g, "%3F");
        
        console.log(baseurl);
        this.word.splice(0,this.word.length);
        var array = this.word;
         axios.get(baseurl)
         .then(function (response) {
            array.push(response.data.result.english);
            array.push(response.data.result.chinese);
            array.push(response.data.result.zang);
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log(this.word);
      },
      searchButton(){
        var baseurl = "http://139.224.15.56:3000/dic/"+this.url_lang+"/word/";
        baseurl = baseurl + this.$data.searchWord.replace(/\//g, "%2F").replace(/\?/g, "%3F");;
        this.word.splice(0,this.word.length);
        var array = this.word;
        axios.get(baseurl)
         .then(function (response) {
            array.push(response.data.result.english);
            array.push(response.data.result.chinese);
            array.push(response.data.result.zang);
        })
        .catch(function (error) {
            console.log(error);
        }); 
      }
    
    }
  }
</script>
<style>

#wordindex{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
#Window{
  display: flex;
  flex-direction: row;
}
#searchButton{
  height: 15px;
  text-align: center;
}
#wholeWindow{
  display: flex;
  flex-direction: column;
}
.el-header{
        display: flex;
        background-color: #409EFF;
        justify-content: space-between;
    }
.dontdisplay{
  display:none;
  }
.dodisplay{
  display:block;
}
.el-header{
  font-size:26px;
}
</style>
