<template>
    <div>
        <img src="../assets/logo.png">
        <div>
            <p>语言选择</p>
        </div>
        <div class=container>
            <el-select v-model="value" placeholder="请选择词典">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>   
        <div>
            <br>
            <input type="submit" value="确认">
        </div>
    </div>
</template>
<script>
export default {
  name:'',
  data () {
      return {
        msg: 'dsdsd',
          options: [{
            value: '选项1',
            label: '藏语'
          }, {
            value: '选项2',
            label: '乌尔都语'
          }, {
            value: '选项3',
            label: '其他'
          }],
          value: ''
      }
    }
}
</script>
<style>

</style>
