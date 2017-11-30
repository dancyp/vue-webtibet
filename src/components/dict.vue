<template>
  <el-container id="wholeWindow">
    <el-header>
      <div class = 'title'>
        <span>词典</span>
        <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
        <span>{{user}} <span>返回</span></span>
      </div>
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
                prop="Ini">
              </el-table-column>
          </el-table>
      </el-aside>
      <el-container>
        <el-aside 
        id="wordList"
        width="24%"
        class="dontdisplay">
          <el-table
            :data="ListTable"
            height="750"
            border
            highlight-current-row
            @cell-click="cellWordClick"
            id="listtable">
              <el-table-column
                prop="english">
              </el-table-column>
          </el-table>
        </el-aside>
        <el-main>
          <div id="head">
            <input type="text" size="large" placeholder="要查询的单词">
            <el-button type="primary" icon="el-icon-search"size="mini">搜索</el-button>
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
        $("#wordList").removeClass("dontdisplay");
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
        background-color: #409EFF;
        align-items: center;
    }
.dontdisplay{
  display:none;
  }
</style>
