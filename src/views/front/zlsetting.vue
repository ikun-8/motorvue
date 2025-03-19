<template>
    <van-sticky>
        <van-nav-bar title="个人中心" left-arrow  @click-left="onClickLeft">
            <template #right>
                <van-icon name="add-o" size="18" />
            </template>
        </van-nav-bar>
    </van-sticky>
    <div id="back">
        <br>
        <van-cell title="修改头像" is-link />
        <van-cell title="资料修改" is-link value="已完成0%" to="center"/>
        <van-cell title="手机绑定" is-link />
        <van-cell title="修改名称" is-link />
        <van-cell title="修改密码" is-link />
        <van-cell title="账户注销" is-link />
    </div>
    
</template>

<script setup>
import 'vant/lib/index.css'
import { ref } from 'vue'
import { showToast } from 'vant'

const onClickLeft = () => history.back()
const onClickRight = () => showToast('按钮')


</script>

<style scoped>
#back{
    background-color: rgba(212, 185, 185, 0.247);
    height: 100%;
}

</style>