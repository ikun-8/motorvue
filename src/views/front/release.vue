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
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="price" required name="price" label="价格"/>
            <van-field v-model="lprice" name="lprice" label="底价"/>
            <van-field v-model="checkpf" name="lprice" label="类型" is-link @click="showpf=true"/>
            <van-field v-model="checkdp" name="dp" label="底盘" is-link @click="showdp=true"/>
            <van-field required name="radio" label="车龄">
                <template #input>
                    <van-radio-group v-model="age" direction="horizontal">
                    <van-radio name="1">1年以内</van-radio>
                    <van-radio name="2">3年以内</van-radio>
                    <van-radio name="3">5年以内</van-radio>
                    <van-radio name="4">5年以上</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field required v-model="rute" name="rute" label="行驶里程"/>
            <van-field v-model="oldprice" name="oldprice" label="原车价格"/>
            <van-field required v-model="emission" name="emission" label="排放"/>
            <van-field v-model="date" is-link readonly name="date" label="上牌时间" @click="showdate = true"/>
            <van-field v-model="area" is-link readonly name="area" label="地区选择" @click="showArea = true"/>
            <van-field required v-model="type" name="type" label="品牌"/>
            <van-field required v-model="phone" name="phone" label="电话号码"/>
            <van-field required v-model="num" name="num" label="过户次数"/>
            <van-field required v-model="using" name="using" label="使用性质"/>
            <van-field name="uploader" required label="封面照片"><template #input><van-uploader v-model="pic" multiple :max-count="3" /></template></van-field>
            <van-field name="uploader" required label="行驶证"><template #input><van-uploader v-model="pic2" multiple :max-count="1"/></template></van-field>
            <van-field v-model="message" rows="2" autosize label="描述" type="textarea" maxlength="50" placeholder="说点什么吧" show-word-limit/>


        </van-cell-group>
        <div style="margin: 16px;">
            <van-button block type="warning" native-type="submit">
            发表
            </van-button>
        </div>
    </van-form>
    <div style="height: 70px;"></div>

    <van-popup v-model:show="showdate" destroy-on-close position="bottom">
            <van-date-picker
                :model-value="pickerdate"
                @confirm="onConfirm1"
                @cancel="showPicker = false"
            />
    </van-popup>
    <van-popup v-model:show="showArea" destroy-on-close position="bottom">
        <van-area
            :area-list="areaList"
            :model-value="pickerarea"
            @confirm="onConfirm2"
            @cancel="showArea = false"
        />
    </van-popup>
    <van-dialog v-model:show="showpf">
        <van-radio-group v-model="checkpf">
            <van-cell-group inset>
                <van-cell v-for="value in pickerpf" :title="value" clickable @click="checkpf=value"><template #right-icon><van-radio :name=value /></template></van-cell>
            </van-cell-group>
        </van-radio-group>
    </van-dialog>
    <van-dialog v-model:show="showdp">
        <van-radio-group v-model="checkdp">
            <van-cell-group inset>
                <van-cell v-for="value in pickerdp" :title="value" clickable @click="checkdp=value"><template #right-icon><van-radio :name=value /></template></van-cell>
            </van-cell-group>
        </van-radio-group>
    </van-dialog>



</template>
<script setup>
import {ref} from 'vue'
import { areaList } from '@vant/area-data';
const date = ref('');
const area = ref('');
const showpf = ref(false);
const showdp = ref(false);
const showdate = ref(false);
const checkdp = ref();
const checkpf = ref();
const age = ref();
const type = ref();
const using = ref();
const rute = ref();
const emission = ref();
const price = ref();
const lprice = ref();
const oldprice = ref();
const message = ref();
const num = ref();
const phone = ref();
const pickerdate = ref([]);
const pickerpf=ref(["国六","国五","国四","国三"])
const pickerdp=ref(["依维柯","大通","奔驰","福特","长城","东风","黄海","江淮","卡威","五十铃"])
const onConfirm1 = ({ selectedValues }) => {
      date.value = selectedValues.join('/');
      pickerdate.value = selectedValues;
      showdate.value = false;
};
const showArea = ref(false);
const pickerarea = ref([]);
const onConfirm2 = ({ selectedValues, selectedOptions }) => {
      pickerarea.value = selectedValues.length
        ? selectedValues[selectedValues.length - 1]
        : '';
      showArea.value = false;
      area.value = selectedOptions.map((item) => item.text).join('/');
};
const pic = ref([
      { url: 'https://cloud-image', isImage: true },
]);
const pic2 = ref([
      { url: 'https://cloud-image', isImage: true },
]);
const onClickLeft=()=>history.back()


</script>
<style scoped>



</style>