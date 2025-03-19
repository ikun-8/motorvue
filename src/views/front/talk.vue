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
    <van-tabs v-model:active="active" sticky>
        <van-tab title="打招呼">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
        <van-tab title="好友">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
        <van-tab title="留言">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
        <van-tab title="评论">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
        <van-tab title="分享">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
    </van-tabs>
</template>
<script setup>
const onClickLeft = () => history.back();

</script>
<style scoped>


</style>