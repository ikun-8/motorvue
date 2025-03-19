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
        <div style="height: 170px;background-color: gold;width: 100%;"></div>
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
            <div class="container">
                <p>{{sign}}</p>
                <p style="margin-top: -10px;">报名</p>
            </div>
            <div class="container">
                <p>{{sign}}</p>
                <p style="margin-top: -10px;">收藏</p>
            </div>
            <div class="container">
                <p>{{sign}}</p>
                <p style="margin-top: -10px;">关注</p>
            </div>
        </div>
        <br>
        <br>
        <br>
        <van-cell-group inset>
            <van-grid :column-num="4" :border="false">
                <van-grid-item :icon="require('../../assets/icons/clock.png')" text="待付款" />
                <van-grid-item :icon="require('../../assets/icons/lw.png')" text="待参与" />
                <van-grid-item :icon="require('../../assets/icons/flower.png')" text="已取消" />
                <van-grid-item :icon="require('../../assets/icons/flower2.png')" text="已完成" />
            </van-grid>
        </van-cell-group>
            

        <br>
        <van-cell-group inset>
            <van-grid :column-num="3" :border="false">
                <van-grid-item :icon="require('../../assets/icons/sc2.png')" text="我的收藏" @click="tocllect(2)" />
                <van-grid-item :icon="require('../../assets/icons/shop2.png')" text="我的关注" />
                <van-grid-item :icon="require('../../assets/icons/qb.png')" text="我的钱包" />
            </van-grid>
        </van-cell-group>
        


    </div>
    
    
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from "vue-router";

const name=ref('ikunikun')
const uid=ref(2.5)
const sign=ref(2)
const onClickLeft=()=>history.back();
const router = useRouter();
const tocllect=(index)=>{
    router.push({
    path:"collect",
    state:{active: index}
    })
}
  
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
  
  