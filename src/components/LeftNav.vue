<template>
  <div>
    <div @click="parentClick()" id='menu' :style="{color:parentColor ? '#303133':'#a55eea'}">
      <i :class="nav.icon"></i>
      <span >{{nav.title}}</span>
      <i :class="[navDrop ? nav.down : nav.up]" id='down'></i>
    </div>
    <div v-for="(item,id) in nav.subMenu" :key="id" 
         :style="{display:isShow ?'none':'block'}" 
         id='submenu'>
      <i :class="item.icon"></i>
      <span >{{item.title}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name:'LeftNav',
  props:{
    nav:{type:Object}
    },
  data(){
    return{
      isShow:true,
      parentColor:true,
      navDrop:true,
      }
    },
  methods:{
    parentClick(){
      this.isShow=!this.isShow;
      this.navDrop=!this.navDrop;
      this.parentColor=!this.parentColor;
    }
  }
}
</script>

<style scoped>
span{
  margin-left: 20px;
}
#menu{
  width: 100%;
  height: 50px;
  margin-left: 15px;
  text-align: left;
}
#submenu{
  width: 100%;
  height: 50px;
  margin-left: 35px;
  text-align: left;
  color:#303133;
}
#down{
  float:right;
  margin-right: 30px;
}

</style>