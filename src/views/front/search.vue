<template>
  <div class="header">
    <van-sticky>
      <van-nav-bar title="房车大全" left-arrow 
          @click-left="onClickLeft"
          @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
          </van-nav-bar>
    </van-sticky>
  </div>
  <van-divider />
  <van-grid :column-num="5" :border="false">
    <van-grid-item :icon="require('../../assets/icons/jb.png')" text="排行榜" />
    <van-grid-item :icon="require('../../assets/icons/xcb.png')" text="新车榜" />
    <van-grid-item :icon="require('../../assets/icons/xfc.png')" text="选房车" />
    <van-grid-item :icon="require('../../assets/icons/zes.png')" text="找二手" />
    <van-grid-item :icon="require('../../assets/icons/wfc.png')" text="玩房车" />
  </van-grid>

  <van-grid :column-num="5">
  <van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" />
  </van-grid>

  <div class="price">
    <van-row :gutter="[10, 10]">
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">20-30万</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">30-40万</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">40-50万</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">自行C型</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">自行B型</van-col>

    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">依维柯</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">大  通</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">评分高</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">性价比</van-col>
    <van-col span="1"></van-col>
    <van-col span="4" style="background-color: #f7f8fc;font-size: 12px;height: 30px;line-height: 30px;text-align: center;">更多条件</van-col>
  </van-row>
  </div>
  <van-grid :column-num="5">
  <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
  </van-grid>

  


  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-index-bar :indexlist>
      <div v-for="value in indexlist">
        <van-index-anchor :index=value></van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </div>
    </van-index-bar>    

  </van-pull-refresh>

</template>
<script setup>
  import {ref,reactive, onMounted} from "vue"
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    const onClickLeft = () => history.back();
    const indexlist=['A','B',"C",'D','E','F','G','H','I','J','K','L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };
</script>

<style scoped>
  .header{
    height: 30px;
    width: 100%;
    
  }
  #title{
    position: relative;
    width: 100%;
  }
  #add{
    right: 5px;
    top: 12px;
    z-index: 1;
    position: absolute;
  }
  .price{
    width: 95%;
    margin-left: 8px;
  }

</style>