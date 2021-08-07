<template>
  <div class="about" >
    <div v-for="item in article" :key="item.id">
    <table>
    <tr>题目：{{item.title}}</tr>
    <tr>摘要：{{item.summary}}</tr>
    <tr>内容：{{item.content}}</tr>
    <tr>
      <span class="right">类型：{{item.kind}}</span>
      <span class="right">来源：{{item.tags}}</span>
      <span class="right">评论状态：{{item.commentState}}</span>
      <span class="right">状态：{{item.state}}</span>
      <span @mouseover="show(item.id)" @mouseleave="unshow(item.id)">{{item.time}}</span>
      <span :style="{display:isShow[item.id]?'inline-flex':'none'}">具体时间：{{item.spec}}</span>
    </tr>
    </table>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'

export default {
 data(){
   return{
    article:[],
    isShow:[],
    list:[]
   }
 },
 methods:{
   async onSearch(){
     this.list=await api.test();
     this.article=this.list.data.data.tablelist
   },
   show(i){
     this.isShow.splice(i,1,true)
   },
   unshow(i){
     this.isShow.splice(i,1,false)
   }
 },
 created(){
   this.onSearch()
 }
}
</script>

<style scoped>
table{
  color:#333;
  margin: 10px;
  padding: 10px;
  border: 2px solid rgb(187, 183, 183);
  border-radius: 10px;
}

tr{ 
  text-align:left;
}
span {
  padding-right: 10px;
}
.right{
  margin-right: 10px;
  border-right: 1px solid rgb(187, 183, 183);
}

</style>