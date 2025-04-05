<template>
    <van-sticky>
        <van-nav-bar
        left-arrow
        title="房车坤"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        style="background-color: rgb(0,0,0,0);"
        />
    </van-sticky>
    <van-address-list
    v-model="chosenAddressId"
    :list="list"
    :disabled-list="disabledList"
    :show-add-button="false"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    />
    <van-popup v-model:show="showArea" destroy-on-close position="bottom">
        <van-field v-model="name" label="姓名" placeholder="请输入姓名" />
        <van-field v-model="tel" label="联系方式" placeholder="请输入电话号码" />
        <van-area
            :area-list="areaList"
            :model-value="pickerValue"
            @confirm="onConfirm"
            @cancel="showArea = false"
        />
    </van-popup>
    <van-submit-bar :price="pri" button-text="提交订单" suffix-label="万" @submit="onSubmit">
        <van-image width="40" height="40" :src="require('../../assets/icons/shop2.png')"/>
    </van-submit-bar>

</template>
<script setup>
import { ref,onMounted } from 'vue';
import { showToast } from 'vant';
import { areaList } from '@vant/area-data';
import api from '../../api/index'
import { ElMessage } from 'element-plus';

const chosenAddressId = ref('1');
const name = ref();
const tel = ref();
const idx = ref();
const pri = ref();
const date = new Date();
const sale=ref({
    time:null,
    goodsid:null,
    buyer:null,
    status:null,
    seller:null,
    def1:null,
    def2:null,
    def3:null,
    def4:null

})
const list = ref([
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '江西省/上饶市/鄱阳县',
    isDefault: true,
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    address: '浙江省/杭州市/拱墅区',
  },
]);

const onAdd = () => showToast('立即下单');
const onEdit = (item, index) => {
    showArea.value = true;
    idx.value=index
};  
const onClickLeft = () =>history.back();
const showArea = ref(false);
const pickerValue = ref([]);
const onConfirm = ({ selectedValues, selectedOptions }) => {
    pickerValue.value = selectedValues.length
    ? selectedValues[selectedValues.length - 1]
    : '';
    showArea.value = false;
    list.value[idx.value].address = selectedOptions.map((item) => item.text).join('/');
    list.value[idx.value].name = name.value
    list.value[idx.value].tel = tel.value
}
const onSubmit=()=>{
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    sale.value.time=`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(sale.value)
    api.postReq("/sale-service/sale/add",sale.value).then(res=>{
      let result = res.data
      console.log(result)
      if(result.code=='200')
        ElMessage.success('下单成功');
      else
        ElMessage.error('下单失败')
    })

}
onMounted(()=>{
    sale.value.buyer=JSON.parse(localStorage.getItem("userInfo")).id
    sale.value.seller=JSON.parse(history.state.goods).id
    sale.value.def1=JSON.parse(history.state.goods).price*10000
    sale.value.status='1'
    // console.log(JSON.parse(history.state.goods))
    sale.value.goodsid=JSON.parse(history.state.goods).id
    pri.value=JSON.parse(history.state.goods).price*100
    console.log(pri.value)
})



</script>