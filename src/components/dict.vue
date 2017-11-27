<template>
  <el-container>
     <el-header>
         <div class = 'title'>
             <span>{{manage_type}}</span>
             <span>欢迎使用多语言专家系统-{{dic_lang}}</span>
             <span>{{user}} <span>返回</span></span>
         </div>
     </el-header>
    <el-aside>
        <div class = "diclist">
            <div class="list-group">
                <button type="button" class="list-group-item">A</button>
                <button type="button" class="list-group-item">B</button>
                <button type="button" class="list-group-item">C</button>
                <button type="button" class="list-group-item">D</button>
                <button type="button" class="list-group-item">E</button>
                <button type="button" class="list-group-item">F</button>
                <button type="button" class="list-group-item">G</button>
                <button type="button" class="list-group-item">H</button>
                <button type="button" class="list-group-item">I</button>
                <button type="button" class="list-group-item">J</button>
                <button type="button" class="list-group-item">K</button>
                <button type="button" class="list-group-item">L</button>
                <button type="button" class="list-group-item">M</button>
                <button type="button" class="list-group-item">N</button>
                <button type="button" class="list-group-item">O</button>
                <button type="button" class="list-group-item">P</button>
                <button type="button" class="list-group-item">Q</button>
                <button type="button" class="list-group-item">R</button>
                <button type="button" class="list-group-item">S</button>
                <button type="button" class="list-group-item">T</button>
                <button type="button" class="list-group-item">U</button>
                <button type="button" class="list-group-item">V</button>
                <button type="button" class="list-group-item">W</button>
                <button type="button" class="list-group-item">X</button>
                <button type="button" class="list-group-item">Y</button>
                <button type="button" class="list-group-item">Z</button>
            </div>
	    </div>
        <div class = "wordlist">
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </el-aside>
    <el-main>

    </el-main>
  </el-container>   
</template>
<script>
export default {
  name:'',
  data () {
    return {
        manage_type: '字典管理',
        dic_lang: '藏语',
        user: 'admin'
    }
  }
}
</script>
<style>
    .title{
        display: flex;
        justify-content: space-between;
    }
    .el-header{
        background-color: #409EFF;
        align-items: center;
    }
    .wordlist{
        display: none;
    }
    
</style>


