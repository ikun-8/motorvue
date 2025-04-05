<template>
    <div class="vehicle-detail-page">
        <van-sticky>
            <van-nav-bar
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            style="background-color: rgb(0,0,0,0);"
            />
        </van-sticky>
        
  
      <!-- 车辆图片 -->
      <div class="vehicle-image">
        <img :src="vehicleImage"/>
      </div>
  
      <!-- 官方直营标签 -->
      <div class="official-tag" v-if="goods.def1==Y">官方直营</div>
  
      <!-- 价格信息 -->
      <div class="price-info">
        <div class="price">
          <span class="price-value">{{goods.price}}</span>
          <span class="price-unit">万</span>
          <span class="tax-info">新车含税价: {{goods.oldprice}}万</span>
        </div>
        <button class="contact-price-btn" @click="contactSeller">聊聊价格</button>
      </div>
  
      <!-- 车辆标题 -->
      <div class="vehicle-title">
        准新未上牌扬升远方PULS四驱汕德卡三拓展重卡房车
      </div>
      
      <!-- 免费估价 -->
      <div class="valuation" @click="tosalecar(1)">
        <div class="valuation-tag">免费估价</div>
        <div class="valuation-text">
          爱车值多少钱？测一测三秒出结果
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
  
      <!-- 车辆信息 -->
      <div class="vehicle-info">
        <h2>车辆信息</h2>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">行驶里程</div>
            <div class="info-value">{{goods.gap}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">排放</div>
            <div class="info-value">国{{goods.emission}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">上牌时间</div>
            <div class="info-value">{{goods.licensetime}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">过户次数</div>
            <div class="info-value">{{goods.number}}次</div>
          </div>
          <div class="info-item">
            <div class="info-label">使用性质</div>
            <div class="info-value">{{goods.def2}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">车辆所在</div>
            <div class="info-value">{{goods.location}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">品牌</div>
            <div class="info-value">{{goods.brand}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">底盘型号</div>
            <div class="info-value">{{goods.chassis}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">类型</div>
            <div class="info-value">{{goods.type}}</div>
          </div>
        </div>
      </div>

      <h3>详细内容</h3>
      <div>
        <p style="font-size: 14px;">{{goods.describe}}</p>

        <van-image width="100%" height="180px" :src="require('../../assets/icons/talk2.png')"/>
        <van-image width="100%" height="180px" :src="require('../../assets/icons/talk2.png')"/>
        <van-image width="100%" height="180px" :src="require('../../assets/icons/talk2.png')"/>
      </div>
      <div class="bottom-nav">
          <div class="nav-item">
        <van-badge :content="num">
          <van-image
            @click="openChat"
            width="24"
            height="24"
            :src="require('../../assets/icons/talk2.png')"
            />
        </van-badge>
        </div>
        
        <div class="nav-item">
          <van-image
          v-if="isFavorite==false"
            @click="toggleFavorite"
            width="24"
            height="24"
            :src="require('../../assets/icons/sc.png')"
            />
          <van-image
          v-if="isFavorite==true"
            @click="toggleFavorite"
            width="24"
            height="24"
            :src="require('../../assets/icons/sc3.png')"
            />
        </div>
        <div class="nav-item large">
          <button class="contact-btn" @click="contactSeller">
            联系卖家
          </button>
        </div>
        <div class="nav-item large">
          <button class="inquiry-btn" @click="inquirePrice">
            咨询底价
          </button>
        </div>
      </div>
    </div>
    <van-popup
        v-model:show="openm"
        position="bottom"
        :style="{ height: '30%' }"
        >
          <van-list
           v-model:loading="loading"
           :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in mesbody" :title="item.content" :value="item.time"/>
        </van-list>
        <van-cell-group inset>
        <van-field
          v-model="sms"
          center
          clearable
          >
          <template #button>
            <van-button size="small" type="primary" @click="send()">评论</van-button>
          </template>
        </van-field>
        </van-cell-group>
    </van-popup>
</template>
  
<script setup>

import { ref,onMounted } from 'vue';
import { useRouter } from "vue-router";
import api from '../../api/index'
const router = useRouter();
const openm = ref(false);
const sms = ref();
const num = ref(0);
const mesbody = ref([]);
const goods=ref({
    id:null,
    uid:null,
    brand:null,
    oldprice:null,
    price:'',
    pic1:null,
    pic2:null,
    pic3:null,
    describe:null,
    type:'', 
    gap:null,
    emission:null,
    location:null,
    number:null,
    licensetime:null,
    usetime:null,
    chassis:'',
    def1:'',
    def2:null,
    def3:null,
    def4:null

})
const discuss=ref({
  mid:'',
  uid:'',
  time:'',
  content:'',
  def1:'',
  def2:'',
  def3:'',
  def4:''

})
const collect=ref({
    uid:null,
    gid:null,
    sttus:null,
    def1:'',
    def2:null,
    def3:null,
    def4:null

})
const user=ref({
    id:'',
    name:'',
    password:'',
    date:'',
    prestige:'',
    coins:'',
    carcoins:'',
    qq:'',
    wx:'',
    address:'',
    points:'',
    headpic:'',
    fans:'',
    concern:'',
    def1:'',
    def2:'',
    def3:'',
    def4:''
})
const init=()=>{
    let money,oldmoney
    goods.value=JSON.parse(history.state.goods)
    console.log(goods.value.price)
    money=goods.value.price/=10000
    oldmoney=goods.value.oldprice/=10000
    goods.value.price=money.toFixed(2)
    goods.value.oldprice=oldmoney.toFixed(2)
    console.log(goods.value.price)
    user.value=JSON.parse(localStorage.getItem("userInfo"))
    collect.value.uid=JSON.parse(localStorage.getItem("userInfo")).id
    collect.value.gid=goods.value.id
    discuss.value.uid=user.value.id
    discuss.value.mid=goods.value.id
    api.postReq("/user-service/user/queCollect",collect.value).then(res=>{
      let result = res.data
      // console.log(result)
      if(result.code=='200')
      isFavorite.value=true
    }) 
    api.postReq("/mes-service/mes/queBody?mid="+goods.value.id).then(res=>{
      let result = res.data
      num.value=result.data.total
      // console.log(result.data)
      // console.log(result.data.mesBody)
      mesbody.value=result.data.mesBody

    }) 
}
const send = () => {
  // .toLocaleDateString()
  discuss.value.content=sms.value
  console.log(discuss.value)
  api.postReq("/mes-service/mes/addBody",discuss.value).then(res=>{
    console.log(res.data)
    if(res.data.code==200){
      ElMessage.success('发布成功');
      console.log(res.data.msg)
    // open.value=false
      init()
      sms.value=''
      openm.value=false
      }
    
    })   
    
};
onMounted(()=>{
    init()

})
const tosalecar = (index) => {
    router.push({
    path:"salecar",
    state:{type: index}
    })
}
// 是否收藏的状态
const isFavorite = ref(false);
// 切换收藏状态
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  // console.log(collect.value)
  if(isFavorite.value==true){
    api.postReq("/user-service/user/addCollect",collect.value).then(res=>{
      let result = res.data
        console.log(res.data.msg)
    })  

  }else{
    api.postReq("/user-service/user/revCollect",collect.value).then(res=>{
      let result = res.data
        console.log(res.data.msg)
    }) 

  }
  
};
// 返回上一页
const onClickLeft = () =>history.back();
// 打开聊天
const openChat = () => {
  openm.value=true
  
};
// 联系卖家
const contactSeller = () => {
    router.push({
    path:"toOrder",
    state:{goods: JSON.stringify(goods.value)}
    })
  
};
// 咨询底价
const inquirePrice = () => {
  alert('咨询底价功能');
};
// 车辆图片
const vehicleImage = ref('https://img2.bitautoimg.com/autoalbum/files/20230520/659/20230520341451406765934010_3000x2000_w1.JPG'); // 替换为实际图片路径
</script>

<style scoped>
.vehicle-detail-page {
  position: relative;
  padding-bottom: 60px;
  background-color: #f5f5f5;
}

.vehicle-image {
  width: 100%;
  height: 300px;
  background-color: #eee;
}

.vehicle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.official-tag {
  position: absolute;
  top: 305px;
  right: 10px;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
}

.price-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
}

.price {
  font-size: 24px;
  font-weight: bold;
}

.price-value {
  color: #e60012;
}

.price-unit {
  font-size: 16px;
}

.tax-info {
  font-size: 14px;
  color: #999;
  margin-left: 10px;
}

.contact-price-btn {
  background-color: #fff6e6;
  border: 1px solid #ffc023;
  color: #ffc023;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.vehicle-title {
  padding: 0 15px;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: #333;
}

.valuation {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: white;
  margin-bottom: 10px;
}

.valuation-tag {
  background-color: #ffc023;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
}

.valuation-text {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.valuation-text svg {
  margin-left: 5px;
}

.vehicle-info {
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
}

.vehicle-info h2 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
}

.info-value {
  font-size: 16px;
  color: #333;
}

.transaction-process {
  background-color: white;
  padding: 15px;
  margin-bottom: 60px;
}

.transaction-process h2 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: white;
  padding: 10px 0;
  border-top: 1px solid #eee;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.large {
  flex: 2;
}

.contact-btn {
  background-color: #222;
  color: white;
  border: none;
  padding: 10px 0;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
}

.inquiry-btn {
  background-color: #ffc023;
  color: #333;
  border: none;
  padding: 10px 0;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
}




</style>