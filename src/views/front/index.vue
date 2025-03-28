<template>
      <van-sticky>
        <van-nav-bar title="房车坤" left-arrow 
          @click-left="onClickLeft"
          @click-right="onClickRight">
            <template #right>
                <van-icon name="add-o" size="18"/>
            </template>
            <template #left>
              <van-icon name="search" size="18" />
            </template>
          </van-nav-bar>
      </van-sticky>
    <van-divider />
    <div id="main">
        <van-tabs v-model:active="active" sticky>
          <van-tab title="关注">
            <div style="margin-left: 5px;" v-for="i in mes">
              <div v-if="i.type=='1'">
                <p>{{i.title}}</p>
              <van-row justify="space-around">
                <van-col span="8">
                  <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                </van-col>
                <van-col span="8">
                  <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                </van-col>
                <van-col span="8">
                  <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                </van-col>
              </van-row>
              <div style="display: flex;">
                <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                </div>
              </div>
              <van-divider />
              </div>
            </div>
          </van-tab>
          <van-tab title="首页">
            <div>
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>

              <van-grid :column-num="5" :border="false" style="margin-bottom: 20px;margin-top: 10px;">
                  <van-grid-item :icon="require('../../assets/icons/cbj.png')" text="查报价" to="sale" />
                  <van-grid-item :icon="require('../../assets/icons/zes2.png')" text="找二手" to="sale" />
                  <van-grid-item :icon="require('../../assets/icons/jb.png')" text="排行榜" to="rank" />
                  <van-grid-item :icon="require('../../assets/icons/kzh.png')" text="看展会" />
                  <van-grid-item :icon="require('../../assets/icons/wfc2.png')" text="玩房车" to="active" />
              </van-grid>
              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='2'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                  </div>
                </div>
                <van-divider />
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="评测">
            <div>
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>

              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='3'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.lenth}}</p>
                  </div>
                </div>
                <van-divider />
                </div>                
              </div>
            </div>
          </van-tab>
          <van-tab title="口碑">
            <div>
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>

              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='4'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                  </div>
                </div>
                <van-divider />
                </div>
              </div>
            </div>
            
          </van-tab>
          <van-tab title="经验">
            <div>
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>

              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='5'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                  </div>
                </div>
                <van-divider />
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="问答">
            <div>
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>

              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='6'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                  </div>
                </div>
                <van-divider />
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="新闻">
            <div>
              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='7'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                  </div>
                </div>
                <van-divider />
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="旅行">
            <div>
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>

              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='8'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                  </div>
                </div>
                <van-divider />
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="改装">
            <div>
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
                <template #indicator="{ active, total }">
                <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>

              <div style="margin-left: 5px;" v-for="i in mes">
                <div v-if="i.type=='9'">
                  <p>{{i.title}}</p>
                <van-row justify="space-around">
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                  <van-col span="8">
                    <van-image width="110" height="110" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  </van-col>
                </van-row>
                <div style="display: flex;">
                  <van-image round width="20" height="20" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                  <van-tag type="success" style="height: 20px;width: 25px;margin-left: 10px;">标签</van-tag>
                  <div style="flex-direction: row;display: flex;margin-top: -11px;margin-left: 20px;">
                    <p style="margin-right: 75px;font-size: 11px;">{{i.time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 5px;font-size: 14px;">{{i.watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;" @click="showMes(i.id)">{{i.mesbodyList.length}}</p>
                  </div>
                </div>
                <van-divider />
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <van-popup
        v-model:show="open"
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
        
  
    </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import api from '../../api/index'

const total=ref()
const open=ref()
const mesbody=ref([])
const loading = ref(false);
const finished = ref(false);
const sms=ref()
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
const mes=ref([])
const init=()=>{
    user.value=JSON.parse(localStorage.getItem("userInfo"))
    api.postReq("/mes-service/mes/show",{}).then(res=>{
      let result = res.data
      total.value = result.data.total

      console.log(total.value)
      mes.value=result.data.mes
        // console.log(mes.value)
    })   
}
const date = new Date();
const showMes=(index)=>{
  open.value=true
  mesbody.value=mes.value[index-1].mesbodyList
  discuss.value.mid=index
  discuss.value.uid=user.value.id
  // const currentTime=
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  discuss.value.time=`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  // discuss.value.time=currentDate
  // .toLocaleDateString()
  // console.log(mes.value[index-1].mesbodyList)

}
const onLoad = () => {
    setTimeout(() => {
      loading.value = false;
      finished.value = true;
    }, 1000);
};
const send = () => {
  // .toLocaleDateString()
  discuss.value.content=sms.value
  console.log(discuss.value)
  api.postReq("/mes-service/mes/addBody",discuss.value).then(res=>{
    console.log(res.data.msg)
    open.value=false
    init()
    sms.value=''

    })   
    
};
onMounted(()=>{
  init()
})
</script>
<style>
.van-tabs__nav {
  margin-left: -10px !important; 
}
#main{
  margin-top: -35px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}


</style>
    