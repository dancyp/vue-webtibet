<template>
  <el-container id="wholeWindow">
    <el-header>
        <span>语料管理</span>
        <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
        <span>{{user}} <router-link :to="'/cho/'+url_lang">返回</router-link></span>
    </el-header>
    <el-container id="Window" >
      <el-aside width="15%">
        <el-table
            :data="IniList"
            height="450"
            border
            id="IniIdx"
            highlight-current-row
            @cell-click="cellIniClick">
              <el-table-column
                prop="Ini"
                label="语料类别">
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
            height="450"
            border
            highlight-current-row
            @cell-click="cellWClick">
              <el-table-column
                prop="key"
                label="语料列表">
              </el-table-column>
          </el-table>
        </el-aside>
        <el-main>
          <div id="uploaderarea">
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
            <br>
            <br>
            <br>
          </div>
          <div id="head">
            <input type="text" size="large" placeholder="搜索语料" v-model="searchWord">
            <el-button type="primary" icon="el-icon-search"size="mini" @click="searchButton">搜索</el-button>
          </div>
          <div>
              <br>
              <el-button type="primary"size="mini" v-if="this.flag">下载<i class="el-icon-download el-icon--right"></i></el-button>
          </div>
          <br>
          <div id="twofile" v-if="this.flag">
              <div>
                <textarea name="" id="" cols="40" rows="20" readonly>{{word[0]}}</textarea>
              </div>
              <div>
                <textarea name="" id="" cols="40" rows="20" readonly>{{word[1]}}</textarea>
              </div>      
          </div>

        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import axios from 'axios'
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
        FileSort:"",
        key:"",
        IniList:[{
          Ini:"A"
        }],
        ListTable:[],
        options: {
          // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
          //target: 'http://192.168.0.110:3000/fileupload?lang=tibet&sort='+this.FileSort+'&key='+this.key,
          target: 'http://139.224.15.56:3000/fileupload?lang=tibet&sort='+'教育'+'&key='+'atf',
          testChunks: false
        },
        attrs: {
          accept: 'image/*'
        }
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
      var baseurl = "http://139.224.15.56:3000/file/sorts";
      var a = this.IniList;
      this.IniList.splice(0,this.IniList.length);
      axios.get(baseurl)
        .then(function (response) {
            console.log(response.data.config_sort);
            for(var i = 0;i<response.data.config_sort.length;i++){
              a.push({Ini:response.data.config_sort[i]});
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
      cellIniClick(row,cell){
        this.flag = false;
//curl -X GET "http://139.224.15.56:3000/file/filelist?lang=tibet&sort=%E6%95%99%E8%82%B2" -H "accept: application/json"
        var baseurl = "http://139.224.15.56:3000/file/filelist?lang="+this.url_lang+"&sort="+row.Ini;
        var a = this.ListTable;
        this.ListTable.splice(0,this.ListTable.length);
        this.word.splice(0,this.word.length);
        this.$data.showlist=true;
        axios.get(baseurl)
        .then(function (response) {
            console.log(response);
            console.log(response.data);
            for(var i = 0;i<response.data.length;i++){
              a.push(response.data[i]);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      cellWClick(row,cell){
//curl -X GET "http://139.224.15.56:3000/file/filecontents?lang=tibet&key=111" -H "accept: application/json"
        var baseurl = "http://139.224.15.56:3000/file/filecontents?lang="+this.url_lang+"&key="+row.key;
        this.flag = true;
        console.log(baseurl);
        this.word.splice(0,this.word.length);
        var array = this.word;
        axios.get(baseurl)
         .then(function (response) {
            array.push(response.data.chfile);
            array.push(response.data.trfile);
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log(this.word);
      },
      searchButton(){
        var baseurl = "http://139.224.15.56:3000/file/filecontents?lang="+this.url_lang+"&key=";
        baseurl = baseurl + this.$data.searchWord.replace(/\//g, "%2F").replace(/\?/g, "%3F");
        this.word.splice(0,this.word.length);
        var array = this.word;
        axios.get(baseurl)
         .then(function (response) {
            array.push(response.data.chfile);
            array.push(response.data.trfile);
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
#twofile{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
