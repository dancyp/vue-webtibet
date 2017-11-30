<template>
  <el-container id="wholeWindow">
    <el-head width="100%">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          id="wordindex"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">A</el-menu-item>
          <el-menu-item index="2">B</el-menu-item>
          <el-menu-item index="3">C</el-menu-item>
          <el-menu-item index="4">D</el-menu-item>
          <el-menu-item index="5">E</el-menu-item>
          <el-menu-item index="6">F</el-menu-item>
          <el-menu-item index="7">G</el-menu-item>
          <el-menu-item index="8">H</el-menu-item>
          <el-menu-item index="9">I</el-menu-item>
          <el-menu-item index="10">J</el-menu-item>
          <el-menu-item index="11">K</el-menu-item>
          <el-menu-item index="12">L</el-menu-item>
          <el-menu-item index="13">M</el-menu-item>
          <el-menu-item index="14">N</el-menu-item>
          <el-menu-item index="15">O</el-menu-item>
          <el-menu-item index="16">P</el-menu-item>
          <el-menu-item index="17">Q</el-menu-item>
          <el-menu-item index="18">R</el-menu-item>
          <el-menu-item index="19">S</el-menu-item>
          <el-menu-item index="20">T</el-menu-item>
          <el-menu-item index="21">U</el-menu-item>
          <el-menu-item index="22">V</el-menu-item>
          <el-menu-item index="23">W</el-menu-item>
          <el-menu-item index="24">X</el-menu-item>
          <el-menu-item index="25">Y</el-menu-item>
          <el-menu-item index="26">Z</el-menu-item>
        </el-menu>
    </el-head>
    <el-container>
      <el-aside id="wordList">
        <el-table
          :data="ListTable"
          height="750"
          border
          highlight-current-row
          @cell-click="cellClick">
            <el-table-column
              prop="english">
            </el-table-column>
        </el-table>
      </el-aside>
      <el-header 
      id="search">

      </el-header>
    </el-container>
  </el-container>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        wordListDisp: "none",
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
#wholeWindow{
  display: flex;
  flex-direction: column;
}
</style>
