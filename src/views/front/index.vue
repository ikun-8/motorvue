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
            <div style="margin-left: 5px;" v-for="value in 9">
              <p>title</p>
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
                  <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                  <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                  <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                  <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                  <p style="font-size: 14px;">{{talk}}</p>
                </div>
              </div>
              <van-divider />
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
              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
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

              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
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

              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
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

              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
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

              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
              </div>
            </div>
          </van-tab>
          <van-tab title="新闻">
            <div>
              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
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

              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
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

              <div style="margin-left: 5px;" v-for="value in 9">
                <p>title</p>
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
                    <p style="margin-right: 100px;font-size: 14px;">{{time}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/watch.png')"/>
                    <p style="margin-right: 10px;font-size: 14px;">{{watch}}</p>
                    <van-image style="margin-top: 15px;" width="15px" height="15px" :src="require('../../assets/icons/talk.png')"/>
                    <p style="font-size: 14px;">{{talk}}</p>
                  </div>
                </div>
                <van-divider />
              </div>
            </div>
          </van-tab>
        </van-tabs>
        
  
    </div>
</template>
<script setup>
import {ref} from 'vue'
const watch=ref(5678)
const talk=ref(56)
const time=ref('2024-09-15')
const active=ref(0)

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
    