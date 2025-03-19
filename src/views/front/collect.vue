<template>
    <van-sticky>
        <van-nav-bar title="我的收藏" left-arrow 
        @click-left="onClickLeft"
        @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
        </van-nav-bar>
    </van-sticky>
    <van-tabs v-model:active="active" sticky>
        <van-tab title="商品">
            <div v-for="value in 9">
                <van-swipe-cell>
                    <van-card
                        price="2.00"
                        desc="描述信息"
                        title="商品标题"
                        class="goods-card"
                        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    />
                    <template #right>
                        <van-button square text="删除" type="danger" class="delete-button" />
                    </template>
                </van-swipe-cell>
            </div>
        </van-tab>
        <van-tab title="文章">
            <div v-for="value in 9">
              <div style="margin-left: 5px;">
                <p>title</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
              </div>
            </div>
        </van-tab>
        <van-tab title="活动">
            <div>
              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
              </div>
            </div>
        </van-tab>
    </van-tabs>
    


</template>
<script setup>
import {onMounted, ref} from 'vue'
const onClickLeft=()=>history.back()
const watch=ref(5678)
const talk=ref(56)
const time=ref('2024-09-15')
const active=ref()
onMounted(()=>{
    active.value=history.state.active

})

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