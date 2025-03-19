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
    
    <div class="head">
        <p style="font-size: 16px;font-weight: bold;">房车热度排行</p>
    </div>

    <div>
        <!-- <van-radio-group v-model="checked" direction="horizontal" style="height: 50px;">
            <van-radio name="1" label-position="center">
                <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" style="width: 45px;height:35px;" />
                </template>
            </van-radio>
            <van-radio name="2">
                <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" style="width: 45px;height:35px;" />
                </template>
            </van-radio>
            <van-radio name="3">
                <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" style="width: 45px;height:35px;" />
                </template>
            </van-radio>
            <van-radio name="4">
                <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" style="width: 45px;height:35px;" />
                </template>
            </van-radio>
            <van-radio name="5">
                <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" style="width: 45px;height:35px;" />
                </template>
            </van-radio>
        </van-radio-group> -->
        <div class="btn-group">
            <van-button square type="primary"
                style="width: 50px;height: 30px;"
                v-for="(option, index) in options" 
                :key="index" 
                class="btn" 
                :class="{ selected: selectedIndex === index }"
                @click="selectIndex(index)"><p style="font-size: 9px;color: black;">{{ option }}</p>
            </van-button>
            <!-- <button 
                v-for="(option, index) in options" 
                :key="index" 
                class="btn" 
                :class="{ selected: selectedIndex === index }"
                @click="selectIndex(index)"
            >
                <p style="font-size: 10px;">{{ option }}</p>
            </button> -->
        </div>
    </div>
    <br>

    <div>
        <van-cell-group>
            <van-cell v-for="value in 50" title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
    </div>
    
</template>
<script setup>
import {ref} from 'vue'
const onClickLeft = () => history.back();
const checked = ref('1');
const activeIcon=require('../../assets/icons/select.png')
const inactiveIcon=require('../../assets/icons/normal.png')
let selectedIndex=ref(-1) // 记录当前选中的按钮索引，初始为 -1 表示未选中
const options=['品牌', '依维柯', '大通', '全顺','皮卡','轻卡'] // 按钮组的选项
            
           
const selectIndex=(index)=> {
    // 更新选中的按钮索引
    selectedIndex.value = index;
}
            


</script>
<style scoped>
.head{
    background-color: gold;
    height: 120px;
    width: 100%;
    text-align: center;
    padding-top: 30px;
}
.img-icon {
    height: 20px;
}
.btn-group {
    display: flex;
    gap:8px;
    margin: 10px;
}
.btn {
    padding: 0px 0px;
    border: none;
    border-radius: 3px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
}
.btn.selected {
    background-color: gold;
    /* color: white; */
    /* color: black; */
}

</style>