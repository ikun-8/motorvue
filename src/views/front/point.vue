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
    <van-tab title="我的">
        <div class="head">
            <p style="font-size: 20px;margin-left: 5px;padding-top: 10px;margin-bottom: -20px;">积分:</p>
            <p style="font-size: 36px;margin-bottom: 10px;margin-left: 10px;">{{point}}</p>
            <p style="font-size: 15px;color: gray;margin-left: 5px;">总积分=发帖数+精华帖数X5+威望X2</p>
        </div>
        <div>
            <van-cell>
                <template #title>
                    <span class="custom-title">车币</span>
                    {{k}}
                </template>
            </van-cell>
            <van-cell>
                <template #title>
                    <span class="custom-title">威望：</span>
                    {{s}}
                </template>
            </van-cell>
            <van-cell>
                <template #title>
                    <span class="custom-title">金币：</span>
                    {{g}}
                </template>
            </van-cell>
        </div>
    </van-tab>
    <van-tab title="记录">
        <div class="back">
            <van-cell v-for="value in 15" title="单元格" value="内容" size="large" label="描述信息" />

        </div>
    </van-tab>
  </van-tabs>
</template>
<script setup>
const k=1
const s=2
const g=3
const point=3
const onClickLeft=()=>history.back()


</script>
<style scoped>
.head{
    background-color: gold;
    height: 150px;
    width: 100%;
    margin-top: -10px;
}
.back{
    margin-top: -10px;
}

</style>