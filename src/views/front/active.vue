<template>
    <div class="header">
        <van-sticky>
          <van-nav-bar title="房车坤" left-arrow 
          @click-left="onClickLeft"
          @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
          </van-nav-bar>
            <van-search
            :onchange="search()"
            v-model="content"
            shape="round"
            background="#ffcc32"
            placeholder="搜索感兴趣的活动"/>
        </van-sticky>
    </div>
    <div>
      <van-swipe :autoplay="3000" lazy-render style="margin-top: 100px;">
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" style="width: 100%;height: 150px;" />
        </van-swipe-item>
      </van-swipe>

    </div>
    <van-nav-bar class="divide" title="精选活动"/>
    <div class="main">
      <van-grid :column-num="2" :border="false">
        <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <van-nav-bar class="divide" title="热门推荐"/>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-card
          v-for="(item, index) in total"
          :key="index"
          :desc="mes[index].time+'开始'"
          :title="mes[index].title"
          @click="todetails(mes[index])"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        >
        <template #tags>
          <van-tag plain type="success" v-if="mes[index].def1=='O'">活动进行中</van-tag>
          <van-tag plain type="warning" v-if="mes[index].def1=='C'">活动已结束</van-tag>
        </template>
        </van-card>
        </van-pull-refresh>
    </div>
    
  
</template>
<script setup>
    import {ref, onMounted} from "vue"
    import api from '../../api/index'
    import router from "@/router";
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    const onClickLeft = () => history.back();
    const mes=ref()
    const content=ref()

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
    
    const total=ref()
    const init=()=>{
      api.postReq("/mes-service/mes/show?type=9").then(res=>{
      let result = res.data
      total.value = result.data.total
      // console.log(result)
      // console.log(res.data.total)
      mes.value=result.data.mes
      })

    }
    const search=()=>{
      api.postReq("/mes-service/mes/search?content="+content.value,{}).then(res=>{
      let result = res.data
      total.value = result.data.total
    console.log(result)
    // console.log(res.data.total)
      mes.value=result.data.mes
      // init()
    })

    }
    onMounted(()=>{
      init()

    })
    
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
    .divide{
      background-color: #f8f8f8;
      font-size: 16px;
    }
  
</style>