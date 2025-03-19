<template>
    <van-sticky>
        <van-nav-bar title="房车坤" left-arrow 
        @click-left="onClickLeft"
        @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
        </van-nav-bar>
    </van-sticky>
    <div id="back">
        <div style="height: 170px;background-color: lightblue;width: 100%;"></div>
        <div id="head">
            <div style="flex-direction: row;display: flex;">
                <van-image round width="3rem" height="3rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                <div style="margin-left: 10px;">
                    <p style="margin-bottom: 0px;">{{name}}</p>
                    <van-tag color="#808080" round type="primary">uid:{{uid}}</van-tag>
                </div>
            </div>
        </div>
        <div id="head2">
            <van-cell-group inset>
                <van-cell title="我的交易" />
            </van-cell-group>
            <div class="container">
                <p style="color:#19afeb;">{{sign}}</p>
                <p style="margin-top: -10px;">我发布的</p>
            </div>
            <div class="container">
                <p style="color:#19afeb;">{{sign}}</p>
                <p style="margin-top: -10px;">我卖出的</p>
            </div>
            <div class="container">
                <p style="color:#19afeb;">{{sign}}</p>
                <p style="margin-top: -10px;">我买到的</p>
            </div>
            <div class="container">
                <p style="color:#19afeb;">{{sign}}</p>
                <p style="margin-top: -10px;">我收藏的</p>
            </div>
        </div>
        <div style="height: 110px;"></div>
        
        <van-cell-group inset>
            <van-cell-group>
                <van-cell title="常用工具" />
            </van-cell-group>
            <van-grid :column-num="4" :border="false">
                <van-grid-item icon="location-o" text="收货地址" />
                <van-grid-item icon="phone-o" text="手机绑定" />
                <van-grid-item icon="paid" text="我的钱包" />
                <van-grid-item icon="underway-o" text="提醒设置" />
            </van-grid>
        </van-cell-group>
            

    </div>
    
    
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const name=ref('ikunikun')
const uid=ref(2.5)
const sign=ref(2)
const onClickLeft=()=>history.back()
  
  

</script>
<style scoped>
#head{
    top:95px;
    position: absolute;
    left: 10px;
}
.container{
    display: table-cell;
    vertical-align: middle;
    text-align: center; /* 水平居中 */
    height: 80px; /* 父元素需要有高度 */
    
    width: 120px;
}
#head2{
    margin-left: 11px;
    background-color: white;
    /* border: 1px solid #000; */
    border-radius: 10px;
    width: 93%;
    position: absolute;
    top: 170px;
    /* background-color: #19afeb; */

}
#back{
    background-color: #f7f8fc;
    /* background-color: aqua; */
    height:100vh;
}
.fot{
    left: 10px;
    border-radius: 10px;
    width: 93%;
}
</style>
  
  