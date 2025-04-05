<template>
    <van-sticky>
        <van-nav-bar v-if="type==2" title="我卖出的" left-arrow 
        @click-left="onClickLeft"
        @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
        </van-nav-bar>
    </van-sticky>
    <van-sticky>
        <van-nav-bar v-if="type==1" title="我买到的" left-arrow 
        @click-left="onClickLeft"
        @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
        </van-nav-bar>
    </van-sticky>
    <div v-for="(item, index) in total">
        <van-swipe-cell>
            <van-card
            :key="index"
            :desc="sales[index].shopname"
            :title="sales[index].time"
            :price="sales[index].def1"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
            >
            <template #tags>
                <van-tag plain type="primary">买家{{sales[index].buyer}}</van-tag>
                <van-tag plain type="success">卖家{{sales[index].seller}}</van-tag>
            </template>
            </van-card>
            <template #right>
                <van-button square text="删除" type="danger" @click="remove(index)" class="delete-button" />
            </template>

        </van-swipe-cell>
        </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import api from '../../api/index'
const onClickLeft=()=>history.back()
const sales=ref([])
const total=ref()
const type=ref()



const remove=(index)=>{
  api.postReq("/sale-service/sale/delete?id="+sales.value[index].id,{}).then(res=>{
      let result = res.data
      console.log(result)
      // goods.value=result.data.cols
      init()

    }) 


}
onMounted(()=>{
    init()
  
})
const init=()=>{
    type.value=JSON.parse(history.state.type)
    let id=JSON.parse(localStorage.getItem("userInfo")).id
    if(type.value==1){
        api.postReq("/sale-service/sale/searchByb?buyer="+id).then(res=>{
        let result = res.data
        total.value=result.data.total
        sales.value=result.data.sales
        })
    }else{
        api.postReq("/sale-service/sale/searchBys?seller="+id).then(res=>{
        let result = res.data
        total.value=result.data.total
        sales.value=result.data.sales
        }) 

    }  

}

</script>
<style scoped>
.goods-card {
    margin: 0;
    background-color: white;
}

.delete-button {
    height: 100%;
}



</style>