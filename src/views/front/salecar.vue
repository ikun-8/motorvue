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
    <div id="back">
        <van-image width="100%" height="280" :src="require('../../assets/icons/kk.png')"/>
        <van-cell-group inset id="main">
            <div>
            <p style="justify-content: center;display: flex;">{{title}}</p>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field
                    v-model="phone"
                    name="phone"
                    label="手机号"
                    placeholder="请输入11位手机号"
                    :rules="[{ pattern, message: '请填正确手机号' }]"
                    />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button block type="primary" native-type="submit">
                    {{buttext}}
                    </van-button>
                </div>
                <van-highlight :keywords="keywords" :source-string="text" style="font-size: 13px;color:lightgray;margin-left: 12px;" />
            </van-form>
            </div>
        </van-cell-group>
        <div style="height: 160px;"></div>
        <div style="width: 100%;">
            <p style="justify-content: center;display: flex;font-weight: bold">我们的优势</p>
            <van-grid :column-num="3">
                <van-grid-item icon="list-switch" text="多渠道" />
                <van-grid-item icon="newspaper-o" text="上门检测" />
                <van-grid-item icon="underway-o" text="快速成交" />
            </van-grid>
        </div>
        <div style="width: 100%;">
            <p style="justify-content: center;display: flex; font-weight: bold">常见问题</p>
            <van-collapse v-model="activeNames">
                <van-collapse-item title="房车坤卖车平台有什么优势？" name="1">
                    房车坤充分发挥大平台优势，聚集全国优质二手房车企业，让您的爱车发布后第一时间触达买家，实现车辆快速成交
                </van-collapse-item>
                <van-collapse-item title="为什么我在房车坤提交线索有商家联系我？" name="2">
                    您在提交卖车信息时房车坤会优选二手房车服务商，最多不超过三家，保障快速成交的同时，避免对你产生打扰。
                </van-collapse-item>
                <van-collapse-item title="是否需要收取个人费用？" name="3">
                    不收费，全程零费用。
                </van-collapse-item>
                <van-collapse-item title="发布信息后大概多长时间能卖出车辆？" name="3">
                    平均1-4周左右，具体视车况而定。发布信息后，卖车的流程是什么样的？您提交卖车申请后，房车坤卖车平台推荐的服务商会在2小
                    时内给您致电，核实完您的车辆信息后预约线下评估时间。在约定好的评估时间，专业评估师会上门当场验车并给出估价。在您同意的情况下，车辆会进一步发布到其平台线上。待买家看中后，会再次预约线下看车，完毕后直接交易。
                </van-collapse-item>
            </van-collapse>
        </div>
        <div style="height: 80px;"></div>

    </div>
    
    
    
</template>
<script setup>
import {onMounted, ref} from 'vue'
const onClickLeft=()=>history.back()
const text='本服务由ikun平台提供估值及收车服务，点击按钮即视为同意《个人信息保护声明》'
const keywords = '《个人信息保护声明》';
const title=ref()
const buttext=ref()
const phone=ref()
const pattern=/^1[0-9]\d{9}$/
const activeNames = ref(['1']);
onMounted(()=>{
    title.value=history.state.type==0?'免费预约，高价卖车':'精准估计，无忧卖车'
    buttext.value=history.state.type==0?'免费高价卖车':'免费上门估价'
})




</script>
<style scoped>
#main{
    position: absolute;
    top: 250px;
}
#back{
    background-color: #f7f8fc;
    height: 100vh;
}


</style>