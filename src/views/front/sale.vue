<template>
    <div class="header">
        <van-sticky>
            <van-nav-bar title="二车房车" left-arrow 
          @click-left="onClickLeft"
          @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
          </van-nav-bar>

        </van-sticky>
         
    </div>
    <van-grid :column-num="4" style="margin-bottom: 20px;margin-top: 10px;">
        <van-grid-item :icon="require('../../assets/icons/car.png')" text="房车大全" to="search"/>
        <van-grid-item :icon="require('../../assets/icons/mc.png')" text="高价卖车" @click="tosalecar(0)"/>
        <van-grid-item :icon="require('../../assets/icons/gj.png')" text="免费估价" @click="tosalecar(1)"/>
        <van-grid-item :icon="require('../../assets/icons/jy.png')" text="发布二手" @click="poup"/>
    </van-grid>
    
    <div class="block">
        <p style="margin-right: 5px;margin-left:10px;width: 80px;font-size: 12px;">价格:</p> 
        <div class="container">
        <p class="data" v-for="value in price">{{ value }}</p>
        </div>
    </div>
    <div class="block">
        <p style="margin-right: 5px;margin-left:10px;width: 80px;font-size: 12px;">类型:</p> 
        <div class="container">
        <p class="data" v-for="value in type">{{ value }}</p>
        </div>
    </div>
    <div class="block">
        <p style="margin-right: 5px;margin-left:10px;width: 80px;font-size: 12px;">底盘:</p> 
        <div class="container">
        <p class="data" v-for="value in chassis">{{ value }}</p>
        </div>
    </div>
    <div class="block">
        <p style="margin-right: 5px;margin-left:10px;width: 80px;font-size: 12px;">车龄:</p> 
        <div class="container">
        <p class="data" v-for="value in age">{{ value }}</p>
        </div>
    </div>
    

    
    <van-card
    v-for="(item, index) in total"
    :key="index"
    :price="(goods[index].price/10000).toFixed(2).concat('万')"
    desc="描述信息"
    :title="goods[index].brand"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    />
    <van-popup
    v-model:show="showBottom"
    position="bottom"
    :style="{ height: '30%' }">
    <van-cell is-link size="large" to="release">
        <template #title>
            <van-image
            width="50"
            height="50"
            :src="require('../../assets/icons/zx.png')"
            />
            <span class="custom-title" style="">车主自售</span>
            <van-tag type="primary">收费</van-tag>
        </template>
    </van-cell>
    <van-cell is-link size="large" to="salecar">
        <template #title>
            <van-image
            width="50"
            height="50"
            :src="require('../../assets/icons/jy2.png')"
            />
            <span class="custom-title">平台交易</span>
            <van-tag type="primary">免费</van-tag>
        </template>
    </van-cell>

    </van-popup>

    
</template>
<script setup>
import 'vant/lib/index.css'
import { useRouter } from "vue-router";
import { ref,onMounted } from "vue";
import api from '../../api/index'
const router = useRouter();
const onClickLeft = () => history.back();
const showBottom=ref(false)
const goods=ref([])
const total=ref()
const price=ref(['不限','低于10万','10-20万','20-30万','30-40万','40-50万','70-100万','高于100万'])
const type=ref(['不限','自行A型','自行B型','自行C型','拖挂A型','拖挂B型','拖挂C型','拖挂D型','露营车','商务车'])
const chassis=ref(['不限','自行A型','自行B型','自行C型','拖挂A型','拖挂B型','拖挂C型','拖挂D型','露营车','商务车'])
const age=ref(['不限','1年以内','3年以内','5年以内','5年以上'])
const tosalecar = (index) => {
    router.push({
    path:"salecar",
    state:{type: index}
    })
}
const poup=()=>{
    showBottom.value=true
}
// const goods=ref({
    
// })
const init = ()=>{
    api.postReq("/show").then(res=>{
    let result = res.data
    total.value = result.data.total
    // console.log(result)
    // console.log(res.data.total)
    goods.value=result.data.goods
    })
}
onMounted(()=>{
    init()
})

// const init=()=>{
//     console.log(showM.value)
//     api.postReq("/fat/sMsg",showM.value).then(res=>{
//         msg.value=res.data.data
//         // console.log(res.data.data)

//     })

// }
</script>
<style>

.container{
    overflow-x: auto;
    white-space: nowrap;
    left: 10px;
    /* position: absolute; */
     /* 隐藏滚动条 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 和 Edge */
}
.data{
    display: inline-block;
    width: 60px;
    height: 30px;
    background-color: #f7f8fc;
    margin-left: 5px;
    text-align: center;
    /* align-items: center; */
    line-height: 30px;
    font-size: 11px;
    
}
.block{
    margin-top: -18px!important;
    flex-direction: row;
    display: flex;
    /* justify-content: center;
    justify-items: center; */
    /* margin: 0px; */
}
.custom-title {
    line-height: 50px;
    font-size: 20px;
    align-items: center;
}



</style>