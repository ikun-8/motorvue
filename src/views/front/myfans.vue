<template>
    <van-sticky>
        <van-nav-bar title="个人中心" left-arrow 
          @click-left="onClickLeft"
          @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
        </van-nav-bar>
    </van-sticky>
    <van-image
    width="100%"
    height="205"
    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <div id="head">
        <van-image
        style="margin-left: 20px;"
        round
        width="60px"
        height="60px"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <p style="margin-left: 20px;margin-top: 0px;color: white;">{{user.name}}</p>
        <div style="flex-direction: row;display: flex;margin-top: -25px;">
            <p style="padding-left: 20px;color: white;">{{user.def1}}人气</p>
            <p style="padding-left: 20px;color: white;">|</p>
            <p style="padding-left: 20px;color: white;">{{user.concern}}关注</p>
            <p style="padding-left: 20px;color: white;">|</p>
            <p style="padding-left: 20px;color: white;">{{user.fans}}粉丝</p>
        </div>
        <div style="margin-left: 20px;margin-top: -10px;">
            <van-tag type="warning" round>lv1</van-tag>
            <van-tag color="#d3d3d3" style="margin-left: 10px;" round>新手上路</van-tag>
        </div>
    </div>

    <van-tabs v-model:active="num" sticky>
        <van-tab title="资料">
            <div class="back">
                <van-cell value="看看我能做什么" is-link>
                    <template #title>
                        <span class="custom-title">用户组</span>
                        <van-tag type="warning">lv1</van-tag>
                    </template>
                </van-cell>
                <van-cell title="认证信息" is-link />
                <van-cell>
                    <template #title>
                        个人签名
                        <van-icon name="edit" />
                    </template>
                </van-cell>
                <van-cell is-link>
                    <template #title style="flex-direction: row;display: flex;">
                        二维码
                        <van-icon name="qr" />
                    </template>
                </van-cell>
                <br>
                <div>
                    <van-grid :column-num="4" :border="false">
                    <van-grid-item :icon="require('../../assets/icons/mes.png')" text="帖子" />
                    <van-grid-item :icon="require('../../assets/icons/mes2.png')" text="回复" />
                    <van-grid-item :icon="require('../../assets/icons/py.png')" text="好友" />
                    <van-grid-item :icon="require('../../assets/icons/fans.png')" text="粉丝" />
                    <van-grid-item :icon="require('../../assets/icons/book.png')" text="日志" />
                    <van-grid-item :icon="require('../../assets/icons/zp.png')" text="相册" />
                    <van-grid-item :icon="require('../../assets/icons/xq.png')" text="心情" />
                    <van-grid-item :icon="require('../../assets/icons/zj.png')" text="人气" />
                    </van-grid>
                </div>
                <br>
                <div>
                    <van-row :gutter="0">
                        <van-col span="12">
                            <van-cell-group>
                                <van-cell title="积分" value="0" />
                            </van-cell-group>
                        </van-col>
                        <van-col span="12">
                            <van-cell-group>
                                <van-cell title="威望" value="12" />
                            </van-cell-group>
                        </van-col>
                        <van-col span="12">
                            <van-cell-group>
                                <van-cell title="金币" value="内容" />
                            </van-cell-group>
                        </van-col>
                        <van-col span="12">
                            <van-cell-group>
                                <van-cell title="车币" value="内容" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                </div>
                <br>
                <div>
                    <van-cell-group>
                        <van-cell title="用户ID" value="内容" />
                        <van-cell title="在线时间" value="内容" />
                        <van-cell title="注册时间" value="内容" />
                        <van-cell title="最后访问" value="内容" />
                    </van-cell-group>
                </div>
            </div>
        </van-tab>
        <van-tab title="帖子">
            <van-card
            v-for="(item, index) in total"
            :key="index"
            :desc="formatDate(mesBody[index].time)"
            :title="mesBody[index].content"
            />
            <van-empty v-if="total==0" description="暂时没有消息哦" />
        </van-tab>
        <van-tab title="日志">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
        <van-tab title="相册">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
        <van-tab title="留言">
            <van-empty description="暂时没有消息哦" />
        </van-tab>
    </van-tabs>
    <div id="edit" @click="tocenter">
        <van-image
        width="30"
        height="30"
        :src="require('../../assets/icons/edit.png')"
        />
    </div>
</template>
<script setup>
import { onMounted,ref } from 'vue';
import router from '@/router';
import api from '../../api/index'
import { formatter } from 'element-plus';
import { dayjs } from 'element-plus';

const num=ref(0)
const total=ref()
const onClickLeft = () => history.back();
const mesBody=ref({
    mid:'',
    uid:'',
    time:'',
    content:'',
    def1:'',
    def2:'',
    def3:'',
    def4:''
})
const user=ref({
    id:'',
    name:'',
    password:'',
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
onMounted(()=>{
    num.value=history.state.active
    // console.log(num.value)
    init()
})
const tocenter = () => {
    router.push({
    path:"center"
    })
};
const formatDate=(date)=>{
    return dayjs(date).format('YYYY-MM-DD hh:MM:ss')

}
const init=()=>{
    user.value=JSON.parse(localStorage.getItem("userInfo"))
    api.postReq("9091/mes/searchBody?uid="+user.value.id,{}).then(res=>{
    let result = res.data
    total.value = result.data.total
    // console.log(result.data.mesbody)
    // console.log(total.value)
    mesBody.value=result.data.mesBody
    })

}



</script>
<style scoped>
#head{
    position: absolute;
    top: 100px;
}
#edit{
    position: absolute;
    top: 60px;
    left: 85%;
    height: 50px;
    width: 50px;
}
</style>