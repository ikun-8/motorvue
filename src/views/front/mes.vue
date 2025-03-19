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
    <van-cell center title="我的消息" :icon="require('../../assets/icons/mes2.png')" is-link to="mymes" />
    <van-cell center title="我的粉丝" :icon="require('../../assets/icons/fans.png')" is-link to="myfans" />
    <van-cell center title="坛友互动" :icon="require('../../assets/icons/hd.png')" is-link to="talk"/>
    <van-cell center title="系统提醒" :icon="require('../../assets/icons/xt.png')" is-link to="xtmes"/>
    <van-cell center title="应用提醒" :icon="require('../../assets/icons/yy.png')" is-link to="yymes"/>
</template>
<script setup>
const onClickLeft = () => history.back();


</script>
<style scoped>



</style>