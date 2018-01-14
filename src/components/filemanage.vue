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
          <div id="uploaderarea" v-if="this.showlist">
            <uploader :options="options" class="uploader-example" v-on:file-added="fileAdded" v-on:auto-start="false" >
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
          
          <div>
              <br>
              <el-button type="primary"size="mini" v-if="this.flag" @click="downLoad">下载<i class="el-icon-download el-icon--right"></i></el-button>
          </div>
          <br>
          <div id="twofile" v-if="this.flag">
              <div>
                <a :href="'http://139.224.15.56:3000/file/downloadfile?lang='+this.url_lang+'&key='+this.downKey+'&doc='+'chinese'" download="this.downKey">点击此处下载</a>
                <textarea name="" id="" cols="40" rows="20" readonly>{{word[0]}}</textarea>
              </div>
              <div>
                <a :href="'http://139.224.15.56:3000/file/downloadfile?lang='+this.url_lang+'&key='+this.downKey+'&doc='+'this.url_lang'" :download="this.downKey+'-'+this.url_lang">点击此处下载</a>
                <textarea name="" id="" cols="40" rows="20" readonly>{{word[1]}}</textarea>
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
        fileInfo:"",
        FileSort:"",
        key:"",
        downKey:'',
        IniList:[{
          Ini:"A"
        }],
        ListTable:[],
        options: {
          // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
          //target: 'http://192.168.0.110:3000/fileupload?lang=tibet&sort='+this.FileSort+'&key='+this.key,
          target: 'http://139.224.15.56:3000/fileupload?lang=tibet&sort='+this.FileSort,
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
            for(var i = 0;i<response.data.config_sort.length;i++){
              a.push({Ini:response.data.config_sort[i]});
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
      downLoad(){
//"'http://139.224.15.56:3000/file/downloadfile?lang='+this.url_lang+'&key='+this.downKey+'&doc='+'chinese'"
        var baseurl = "http://139.224.15.56:3000/file/downloadfile?lang="+this.url_lang+"&key="+this.downKey+'&doc=';
        window.open(baseurl+'chinese');
        window.open(baseurl+this.url_lang);
        
      },

     fileAdded(file){
       //this.options.target = "";
       this.fileInfo=file;
       console.log(this.fileInfo);
       console.log(this.fileInfo.name);
       var json = this.fileInfo.name.split(".")
       json = json[0].split('-');
       json = json[0];
      console.log(json);
      this.key = json;
      console.log(this.FileSort);
      //this.options.target = 'http://139.224.15.56:3000/fileupload?lang=tibet&sort='+this.FileSort+'&key='+this.key;
      console.log("this.options");
      console.log(this.options);
     },
      cellIniClick(row,cell){
        this.flag = false;
        this.options.target = 'http://139.224.15.56:3000/fileupload?lang=tibet&sort='+row.Ini;
        console.log("this.options");
        console.log(this.options);
//curl -X GET "http://139.224.15.56:3000/file/filelist?lang=tibet&sort=%E6%95%99%E8%82%B2" -H "accept: application/json"
        var baseurl = "http://139.224.15.56:3000/file/filelist?lang="+this.url_lang+"&sort="+row.Ini;
        this.FileSort = row.Ini;
        var a = this.ListTable;
        this.ListTable.splice(0,this.ListTable.length);
        this.word.splice(0,this.word.length);
        this.$data.showlist=true;
        axios.get(baseurl)
        .then(function (response) {
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
        this.downKey = row.key;
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
#twofile div{
  display: flex;
  flex-direction: column;
  justify-content: center ;
}
</style>
