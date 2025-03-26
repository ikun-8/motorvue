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
    <van-grid :column-num="4":border="false" style="margin-bottom: 0px;margin-top: -5px;">
        <van-grid-item :icon="require('../../assets/icons/car.png')" text="房车大全" to="search"/>
        <van-grid-item :icon="require('../../assets/icons/mc.png')" text="高价卖车" @click="tosalecar(0)"/>
        <van-grid-item :icon="require('../../assets/icons/gj.png')" text="免费估价" @click="tosalecar(1)"/>
        <van-grid-item :icon="require('../../assets/icons/jy.png')" text="发布二手" @click="poup"/>
    </van-grid>
    <div class="filter-container">
      <!-- 价格筛选 -->
      <div class="filter-group">
        <div class="filter-label">价格：</div>
        <div class="filter-slider">
          <div
            v-for="(item, index) in price"
            :key="index"
            class="filter-item"
            :class="{ 'active': item.active }"
            @click="toggleActive('price', index)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
  
      <!-- 类型筛选 -->
      <div class="filter-group">
        <div class="filter-label">类型：</div>
        <div class="filter-slider">
          <div
            v-for="(item, index) in types"
            :key="index"
            class="filter-item"
            :class="{ 'active': item.active }"
            @click="toggleActive('type', index)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
  
      <!-- 底盘筛选 -->
      <div class="filter-group">
        <div class="filter-label">底盘：</div>
        <div class="filter-slider">
          <div
            v-for="(item, index) in chassis"
            :key="index"
            class="filter-item"
            :class="{ 'active': item.active }"
            @click="toggleActive('chassis', index)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
  
      <!-- 车龄筛选 -->
      <div class="filter-group">
        <div class="filter-label">车龄：</div>
        <div class="filter-slider">
          <div
            v-for="(item, index) in age"
            :key="index"
            class="filter-item"
            :class="{ 'active': item.active }"
            @click="toggleActive('age', index)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-container">
      <div class="scroll-content">
        <van-card
        v-for="(item, index) in total"
        :key="index"
        :price="(goods[index].price/10000).toFixed(2).concat('万')"
        :desc="parseInt(goods[index].gap)/100+'万公里/'+goods[index].licensetime+'/'+goods[index].location"
        :origin-price="(goods[index].oldprice/10000).toFixed(2).concat('万')"
        :title="goods[index].brand"
        @click="todetails(goods[index])"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        >
        <template #tags v-if="goods[index].def1=='Y'">
          <van-tag color="#d8c628">官方直营</van-tag>
        </template>
        </van-card>
      </div>
    </div>
    
    
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
const total=ref()
const goods=ref([])
const price = ref([
      { text: '不限', active: false,para:null },
      { text: '低于10万', active: false,para:'0~100000' },
      { text: '10-20万', active: false,para:'100000~200000' },
      { text: '20-30万', active: false,para:'200000~300000' },
      { text: '30-40万', active: false,para:'300000~400000' },
      { text: '40-50万', active: false,para:'400000~500000' },
      { text: '70-100万', active: false,para:'700000~1000000' },
      { text: '高于100万', active: false,para:'1000000~9999999' }
]);
const types = ref([
      { text: '不限', active: false,para:null },
      { text: '自行A型', active: false,para:'A' },
      { text: '自行B型', active: false,para:'B' },
      { text: '自行C型', active: false,para:'C' },
      { text: '拖挂A型', active: false,para:'TA' },
      { text: '拖挂B型', active: false,para:'TB' },
      { text: '拖挂C型', active: false,para:'TC' },
      { text: '拖挂D型', active: false,para:'TD' },
      { text: '露营车', active: false,para:'LY' },
      { text: '商务车', active: false,para:'SW' }
]);
const chassis = ref([
      { text: '不限', active: false,para:null },
      { text: '依维柯', active: false,para:'依维柯' },
      { text: '大众', active: false,para:'大众' },
      { text: '福特', active: false,para:'福特' },
      { text: '道奇', active: false,para:'道奇' },
      { text: '悍马', active: false,para:'悍马' },
      { text: '奔驰', active: false,para:'奔驰' },
      { text: '吉普', active: false,para:'吉普' },
      { text: '丰田', active: false,para:'丰田' },
      { text: '五菱', active: false,para:'五菱' },
      { text: '雷诺', active: false,para:'雷诺' },
      { text: '马自达', active: false,para:'马自达' },
      { text: '雪佛兰', active: false,para:'雪佛兰' },
      { text: '铃木', active: false,para:'铃木' },
      { text: '菲亚特', active: false,para:'菲亚特' },
      { text: '路虎', active: false,para:'路虎' }
]);
const age = ref([
      { text: '不限', active: false,para:null },
      { text: '1年以内', active: false,para:'1' },
      { text: '3年以内', active: false,para:'3' },
      { text: '5年以内', active: false,para:'5' },
      { text: '10年以内', active: false,para:'10' }
]);

const stock=ref({
  price:'',
  chassis:'',
  type:'',
  usetime:''
})
  
const toggleActive = (type, index) => {
let options;
    switch (type) {
    case 'price':
        options = price.value;
        stock.value.price=price.value[index].para;
        break;
    case 'type':
        options = types.value;
        stock.value.type=types.value[index].para;
        break;
    case 'chassis':
        options = chassis.value;
        stock.value.chassis=chassis.value[index].para;
        break;
    case 'age':
        options = age.value;
        stock.value.usetime=age.value[index].para;
        break;
    default:
        return;
    }
options.forEach(item => {
  item.active = false;
});
  
options[index].active = true;
// console.log(stock.value)
api.postReq("/goods-service/goods/search",stock.value).then(res=>{
    let result = res.data
    total.value = result.data.total
    // console.log(result)
    // console.log(res.data.total)
    goods.value=result.data.goods
    })

}
const tosalecar = (index) => {
    router.push({
    path:"salecar",
    state:{type: index}
    })
}
const poup=()=>{
    showBottom.value=true
}
const init = ()=>{
    api.postReq("/goods-service/goods/show").then(res=>{
    let result = res.data
    total.value = result.data.total
    // console.log(result)
    // console.log(res.data.total)
    goods.value=result.data.goods
    })
}
const todetails=(item)=>{
  router.push({
    path:"details",
    state:{goods: JSON.stringify(item)}
    })


}
onMounted(()=>{
    init()
})
</script>
<style scoped>
.filter-container {
  width: 100%;
  padding: 8px;
  background-color: #f7f8fc;
  margin-top: -15px;
}

.filter-group {
  display: flex;
  align-items: center;
  margin-bottom: 1px;
}

.filter-label {
  font-size: 12px;
  color: #333;
  margin-right: 10px;
  white-space: nowrap;
}

.filter-slider {
  flex: 1;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */
}

.filter-slider::-webkit-scrollbar {
  display: none; /* Chrome、Safari、Opera */
}
  
.filter-slider {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
}

.filter-item {
  padding: 6px 12px;
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.filter-item.active {
  background-color: #42b983;
  color: white;
  /* color: #d8c628; */
}
.scroll-container {
  width: 100%;
  flex: 1;
  overflow: auto;
}
.scroll-content {
  width: 100%; /* 内容宽度超出容器宽度 */
  height: 400px; /* 内容高度超出容器高度 */
}
</style>

