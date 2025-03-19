<template>
    <van-sticky>
        <van-nav-bar title="个人中心" left-arrow  @click-left="onClickLeft">
            <template #right>
                <van-icon name="add-o" size="18" />
            </template>
        </van-nav-bar>
    </van-sticky>
    <van-steps :active="active">
        <van-step>基础资料</van-step>
        <van-step>车辆信息</van-step>
        <van-step>企业信息</van-step>
    </van-steps>
    <div v-if="active==0">
        <van-field
        v-model="name"
        label="姓名"
        right-icon="user-o"/>
        <van-field
        v-model="sex"
        @click="open(0)"
        label="性别"
        :right-icon="require('../../assets/icons/sex.png')"/>
        <van-field
        v-model="date"
        label="生日"
        @click="open(1)"
        right-icon="notes-o"/>
        <van-field
        readonly
        v-model="number"
        @click="open(2)"
        label="证件号"
        right-icon="user-o"/>
        <van-field
        label="地址"
        right-icon="location-o"
        @click="open(3)"
        v-model="areadata"/>
        <van-field
        v-model="qq"
        label="QQ"
        :right-icon="require('../../assets/icons/qq.png')"/>
        <van-field
        v-model="wx"
        label="微信"
        :right-icon="require('../../assets/icons/wx.png')"/>
    </div>

    <div v-if="active==1">

        <van-cell-group inset>
            <van-field v-model="carnum" required label="车牌号" />
        </van-cell-group>
        <van-divider />
        <van-cell-group inset>
            <van-field label="行驶证上传" disabled required/>
        </van-cell-group>
        <van-uploader v-model="fileList" reupload max-count="1" style="margin-left: 24px;" />

    </div>

    <div v-if="active==2">
        <van-cell-group inset>
            <van-field v-model="tel" type="digit" label="固定电话" style="font-size: 12px;" />
            <van-field v-model="com" label="公司" style="font-size: 12px;" />
            <van-field v-model="num" label="营业执照注册号" required style="font-size: 12px;"  label-width="8em" />
            <van-field label="营业执照图片" disabled required style="font-size: 12px;"  label-width="8em" />
            <van-uploader v-model="fileList2" reupload max-count="1" style="margin-left: 18px;" />
        </van-cell-group>

    </div>



    <!-- 自定义图标 -->
    <van-popup
    v-model:show="show[0]"
    position="bottom"
    :style="{ height: '30%' }"
    >
    <van-radio-group v-model="checked">
        <van-cell-group inset>
            <van-cell title="男" clickable @click="check(1)">
            <template #right-icon>
                <van-radio name="1" />
            </template>
            </van-cell>
            <van-cell title="女" clickable @click="check(2)">
            <template #right-icon>
                <van-radio name="2" />
            </template>
            </van-cell>
        </van-cell-group>
    </van-radio-group>
    </van-popup>
    
    <van-popup
    v-model:show="show[1]"
    :closeable=false
    position="bottom"
    :style="{ height: '30%' }"
    >
        <van-date-picker
        @confirm="pick"
        @cancel="cancel(1)"
        v-model="currentDate"
        title="选择日期" 
        :min-date="minDate"
        :max-date="maxDate"
        />
    </van-popup>
    <van-popup
    v-model:show="show[2]"
    :closeable=false
    position="bottom"
    :style="{ height: '30%' }"
    >
        <van-number-keyboard
        :show="show[2]"
        v-model="n"
        extra-key="X"
         @blur="show[2] = false"
        @input="onInput"
        @delete="onDelete"
        />
    </van-popup>
    
    <van-popup
    v-model:show="show[3]"
    :closeable=false
    position="bottom"
    :style="{ height: '30%' }"
    >
        <van-area :area-list="areaList" @confirm="pick1" @cancel="cancel(3)" />
    </van-popup>




    <br>
    <van-button type="warning" style="margin-left: 25%;" @click="step(-1)">上一步</van-button>
    <van-button v-if="active<2" type="success" style="margin-left: 30px;" @click="step(1)">下一步</van-button>
    <van-button v-if="active==2" type="success" style="margin-left: 30px;width: 75px;" @click="save">  保  存  </van-button>

    
    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { areaList } from '@vant/area-data';


const show = ref([false,false,false,false,false]);
const onClickLeft = () => history.back()
const active = ref(0)
const areadata = ref();
const currentDate=ref([]);
const sex=ref()
const number=ref()
const n=ref()
const qq=ref();
const wx=ref();
const name=ref();
const carnum=ref();
const tel=ref();
const com=ref();
const num=ref();
const date=ref()
const minDate=new Date(1900, 1, 1)
const maxDate=new Date(2025, 5, 1)
const open=(index)=>{
    show.value = show.value.map((_, i) => i === index);
}
const cancel=(index)=>{
    show.value = show.value.map((_, i) => i == index ? false : show.value[i]);
    console.log(show)
}
onMounted(()=>{
    console.log(history.state.active)
})

const pick1=(event)=>{

      // 通过地区编码查找名称
      const provinceCode = event.selectedValues[0];
      const cityCode = event.selectedValues[1];
      const countyCode = event.selectedValues[2];

      const provinceName = areaList.province_list[provinceCode];
      const cityName = areaList.city_list[cityCode];
      const countyName = areaList.county_list[countyCode];

      areadata.value = `${provinceName}-${cityName}-${countyName}`;
      cancel(3)

    //   areadata.value = provinceName.value+'-'+cityName.value+'-'+countyName.value;

}
const pick=()=>{
    date.value=currentDate.value.join(',').replace(/,/g, '-')
    cancel(1)

}
const check=(index)=>{
    sex.value=index==1?'男':'女'
    cancel(0)

}
const step=(index)=>{
    active.value+=index
    if(active.value<0)
    active.value=0;
    if(active.value>2)
    active.value=2;
}
const onInput=()=>{
    number.value=n.value
}
const onDelete = () => {
      if (number.value.length > 0) {
        number.value = number.value.slice(0, -1);
      }
};
const fileList = ref([
      { url: 'https://cloud-image', isImage: true },
]);
const fileList2 = ref([
      { url: 'https://cloud-image', isImage: true },
]);




</script>

<style scoped>


</style>