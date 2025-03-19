<template>
    <RouterView/>
    <van-tabbar v-model="active" route v-if="!$route.meta.hideTabBar">
          <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
          <van-tabbar-item icon="exchange" to="/home/sale">二手</van-tabbar-item>
          <van-tabbar-item icon="search" to="/home/search">选车</van-tabbar-item>
          <van-tabbar-item icon="award-o" to="/home/active">活动</van-tabbar-item>
          <van-tabbar-item icon="contact-o" to="/home/my" badge="5">我的</van-tabbar-item>
      </van-tabbar>
</template>
    
<script setup>
import api from "@/api";
import {onMounted, ref} from "vue"

</script>
    
<style scoped>
</style>
