<template>
      <div id="box">
        <aside>
          <router-link to="/"><input type="button" value="首页" class='one'></router-link>
          <router-link to="/about"><input type="button" value="文章列表" class='two'></router-link>
          <LeftNav :nav='item' v-for="(item,id) in menus" :key="id"></LeftNav>
        </aside>
        <div id="right">
            <header></header>
            <article><router-view/></article>
        </div>
    </div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
import {dataInJs} from '@/navdata/index.js'

export default {
 components: {
    LeftNav
  },
  data(){
    return{
    menus:dataInJs()
    }
  }
}
</script>

<style>
#box {
    position: absolute;
    display: flex;
    width: 100%;
    min-height: 100%;
}

aside {
    width: 220px;
    border: 1px solid black;
    margin-right: 5px;
    text-align: center;
}


input{
  height: 30px;
  width: 100px;
  margin-top: 30px;
}

.two{
  margin-bottom: 70px;
}

#right {
    display: flex;
    width: 100%;
    flex-direction: column;
}

header {
    border: 1px solid black;
    height: 80px;
    margin-bottom: 5px;
}

article {
    border: 1px solid black;
    min-height: 90%;
    text-align: center;
}
</style>
