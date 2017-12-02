<template>
  <el-container id="wholeWindow">
    <el-header>
        <span>词典</span>
        <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
        <span>{{user}} <router-link to="/cho">返回</router-link></span>
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
            <input type="text" size="large" placeholder="要查询的单词">
            <el-button type="primary" icon="el-icon-search"size="mini">搜索</el-button>
          </div>
          <div >
            <div>a</div>
            <div>第一个字母</div>
            <div>藏语</div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        wordListDisp: "none",
        dic_lang:"藏语",
        user:'admin',
        showlist: false,
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
        ListTable:[{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        },{
          english:"a",
          chinese:"啊"
        }]
      };
    },
    methods: {
      cellIniClick(row,cell){
        console.log(row);
        //var a = document.querySelector("#wordList");
        //a.className="dodisplay";
        this.$data.showlist=true;
        
        console.log("celliniclick");
      },
      cellWClick(row,cell){
        console.log(row);
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
</style>
