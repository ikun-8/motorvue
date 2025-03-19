<template>
    <van-sticky>
        <van-nav-bar title="个人中心" left-arrow 
          @click-left="onClickLeft"
          @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
        </van-nav-bar>
    </van-sticky>
    <van-tabs v-model:active="active">
        <van-tab title="私人消息">内容 1</van-tab>
        <van-tab title="公共消息">内容 2</van-tab>
    </van-tabs>
</template>
<script setup>
const onClickLeft = () => history.back();


</script>
<style scoped>



</style>