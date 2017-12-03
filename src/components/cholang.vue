<template>
    <div>
        <img src="../assets/diclogo.png" height="256" width="256">
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
            <span><router-link to="/cho">确定</router-link></span>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name:'',
  data () {
      return {
        msg: 'dsdsd',
        dic_lang:"",
        lang_key:"tibet",
          options: [],
          value: ''
      }
    },
    created: function () {
    // `this` 指向 vm 实例
    var a = this.$data.options;

    axios.get('http://139.224.15.56:3000/dic/languages')
        .then(function (response) {
            console.log(response);
            for(var i = 0;i<response.data.lang_config.chinese.length;i++){
                a.push({value:response.data.lang_config.english[i],label:response.data.lang_config.chinese[i]});
                console.log(a);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
  },
}
</script>
<style>

</style>
