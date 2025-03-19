<template>


  <div class="common-layout">
    <el-container>
      <el-header>
        <div>
                <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
          router="true"
        >
          <el-menu-item index="0">
            <img
              style="width: 100px"
              src="../../assets/icons/book.png"
              alt="Element logo"
            />
          </el-menu-item>
          <el-menu-item index="1">ikun系统</el-menu-item>
          <el-sub-menu index="2">
            <template #title>ikun</template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="2-2">修改密码</el-menu-item>
            <el-menu-item @click="exit">退出登录</el-menu-item>
          </el-sub-menu>
        </el-menu>
        </div>
      </el-header>
      <el-container>
        <el-aside width="230px">
          <div>
            <el-col>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        router="true"
        @open="handleOpen"
        @close="handleClose"
      >

        <el-sub-menu index="1">
          <template #title>
            <el-icon><House /></el-icon>
            <span>用户详情</span>
          </template>
          <el-menu-item index="/gaver/user">用户信息</el-menu-item>
          <el-menu-item index="/gaver/address">地址信息</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><House /></el-icon>
            <span>商品详情</span>
          </template>
          <el-menu-item index="/gaver/product">商品信息</el-menu-item>
          <el-menu-item index="/gaver/card">卡片信息</el-menu-item>
        </el-sub-menu>


        <el-menu-item index="/gaver/orders">
          <el-icon><House /></el-icon>
          <span>订单管理</span>
        </el-menu-item>

        <el-menu-item index="/gaver/msg">
          <el-icon><UserFilled /></el-icon>
          <span>信息管理</span>
        </el-menu-item>
        
      </el-menu>
    </el-col>
          </div>
        </el-aside>
        <el-main>
          <div>
            <RouterView/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import { Router, useRouter } from 'vue-router';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleClose=ref()
const handleOpen=ref()
const activeIndex=ref()
const handleSelect=ref()
const router=useRouter()
const exit=()=>{
    localStorage.removeItem("userInfo")
    router.push("/login")

}




    
</script>
<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
