<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref,reactive} from 'vue'
const message =ref({})
const obj=reactive({})
const list2=reactive([])
const list =reactive([{id:11,name:"知道" ,sex:0},{id:11,name:"沈源龙" ,sex:1},{id:12,name:"不知道" ,sex:0}])
function serach(per){
    list2.length=0
    for(let i=0;i<list.length;i++){
       let booleanId =  true;
       let booleanName =  true;
       let booleaSex =  true;

       if(per.id =='' || per.id == undefined){
         booleanId =  true;
       }else if(per.id == list[i].id){
         booleanId = true;
       }else{
         booleanId = false;
       }


       if(per.name =='' || per.name == undefined){
         booleanName =  true;
       }else if(per.name == list[i].name){
         booleanName = true;
       }else{
         booleanName = false;
       }

       
       if(per.sex =='' || per.sex == undefined){
         booleaSex =  true;
       }else if(per.sex == list[i].sex){
         booleaSex = true;
       }else{
         booleaSex = false;
       }

        if(booleanId && booleanName && booleaSex){
            list2.push(list[i])
        }

     }
}
</script>

<template>
       <table id="app">
        <tr>
          <td><input v-model="message.id" placeholder="请输入id" /></td>
          <td> <input v-model="message.name"  placeholder="请输入姓名" /></td>
          <td> <input type="text" v-model="message.sex" placeholder="请输入性别"></td>
          <td> <button @click="serach(message)">查询</button></td>
        </tr>
        <tr v-for="(item) in list2" :key="item"  >
          <td> {{item.id}}</td>
          <td> {{item.name}}</td>
          <td>{{item.sex ==1 ? '男' : '女'}}</td>
          <td><button>删除</button></td>
          <td><button>修改</button></td>
        </tr>
      </table>
      <nav><RouterLink to="/">home</RouterLink>
      <RouterLink to="/add">add</RouterLink></nav>
  <RouterView />
</template>

<style>

</style>
