<template>
    <div id="back">
        <van-sticky>
            <van-nav-bar title="房车坤" left-arrow 
            @click-left="onClickLeft"
            @click-right="onClickRight">
                <template #right>
                    <van-icon name="add-o" size="18"/>
                </template>
            </van-nav-bar>
        </van-sticky>
        <div style="background-color: #ffcc32;height: 120px;width: 100%;"></div>
        <div class="first">
        
            <p style="margin-left: 3%;margin-top: 45px; font-size: 20px;">{{user.name}}</p>
            <p style="margin-left: 40%;margin-top: 45px; font-size: 12px;color: #999999;">{{user.concern}}关注</p>
            <p style="margin-left: 5%;margin-top: 45px;color: #f7f8fc;">|</p>
            <p style="margin-left: 5%;margin-top: 45px; font-size: 12px;color: #999999;">{{user.fans}}粉丝</p>

        </div>
        <van-image
            id="himg"
            round
            width="55px"
            height="55px"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
        <!-- <div style="height: 550px;width: 100%;background-color: #f7f8fc;"></div>     -->
         <br>
         <br>
        <div class="block">
            <van-grid :column-num="3" :border="false">
                <van-grid-item :icon="require('../../assets/icons/mes.png')" text="我的贴子" @click="myfans(1)" />
                <van-grid-item :icon="require('../../assets/icons/collect.png')" text="我的收藏" to="collect"/>
                <van-grid-item :icon="require('../../assets/icons/rz.png')" text="我的认证" to="center" />
                <van-grid-item :icon="require('../../assets/icons/mes2.png')" text="我的消息" to="mymes" />
                <van-grid-item :icon="require('../../assets/icons/hd2.png')" text="我的活动" to="myactive" />
                <van-grid-item :icon="require('../../assets/icons/qd.png')" text="我的交易" to="mysale"/>
            </van-grid>
        </div>
        <br>
        <div class="block">
            <van-cell title="消息提醒" icon="volume-o" is-link to="mes" />
            <van-cell title="我的留言" icon="chat-o" is-link @click="myfans(4)" />
            <van-cell title="资料设置" icon="newspaper-o" is-link to="zlsetting" />
        </div>
        <br>
        <div class="block">
            <van-cell title="我的积分" icon="points" is-link to="point" />
            <!-- <van-cell title="我的活动" icon="friends-o" is-link to="index" /> -->
            <van-cell title="我的信息" icon="notes-o" is-link to="mymes" />
            <van-cell title="隐私政策" icon="orders-o" is-link to="index" />
            <van-cell title="关于我们" icon="smile-comment-o" is-link to="index" />
            <van-cell title="联系我们" icon="service-o" is-link to="index" />
            <van-button type="danger" block to="/login">退出登录</van-button>
        </div>
        <div style="height: 60px;"></div>

    </div>
    
</template>   
<script setup>
const onClickLeft = () => history.back();
import { ref,onMounted } from "vue";
import { useRouter } from "vue-router";


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

const router = useRouter();
const myfans = (index) => {
    router.push({
    path:"myfans",
    state:{active: index}
    })
};
const init=()=>{
    user.value=JSON.parse(localStorage.getItem("userInfo"))
    // console.log(user.name)
}
onMounted(()=>{
    init()
})
</script>
<style scoped> 
    .block{
        background-color: #ffffff;
        width: 95%;
        margin-left: 10px;
        border-radius: 10px;
    }
    .first{
        background-color: #ffffff;
        height: 100px;
        width: 95%;
        margin-left: 10px;
        flex-direction: row;
        position: absolute;
        display: flex;
        top: 80px;
        border-radius: 10px;

    }
    #himg{
        position: absolute;
        top:50px;
        left: 20px;
    }
    #back{
        background-color: #f7f8fc;
        height: 100%;
    }


</style> 