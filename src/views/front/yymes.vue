<template>
    <van-sticky>
        <van-nav-bar title="个人中心" left-arrow  @click-left="onClickLeft">
            <template #right>
                <van-icon name="add-o" size="18" />
            </template>
        </van-nav-bar>
    </van-sticky>
    <van-empty description="暂时没有消息哦" />
    
</template>

<script setup>
import 'vant/lib/index.css'
import { ref } from 'vue'
import { showToast } from 'vant'

const onClickLeft = () => history.back()
const onClickRight = () => showToast('按钮')


</script>

<style scoped>

</style>