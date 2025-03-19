<template>
    <van-sticky>
        <van-nav-bar title="个人中心" left-arrow  @click-left="onClickLeft">
            <template #right>
                <van-icon name="add-o" size="18" />
            </template>
        </van-nav-bar>
    </van-sticky>
    <div id="back">
        <div style="width: 100%;background-color: white;"v-for="value in 9">
            <p style="width: 100%;height: 0px;"></p>
            <div style="flex-direction: row;display: flex;margin-left: 10px;">
            <div>
                <van-image
                round
                width="50"
                height="50"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
            </div>
            <div style="flex-direction: column;display: flex;margin-left: 10px;">
                <div>
                    <van-text-ellipsis
                    rows="3"
                    :content="text"
                    expand-text="展开"
                    collapse-text="收起"
                    />
                </div>
                
                <div style="flex-direction: row;display: flex;">
                    <div style="flex-direction: column;display: flex;">
                        <p style="margin-top: 20px;">房车坤</p>
                        <p style="margin-top: -10px;">2024-12-31</p>
                    </div>
                    <div style="margin-left: 60%;margin-top: 40px;">
                        <van-image
                        round
                        width="25"
                        height="25"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
                    </div>

                </div>

            </div>

        </div>  
        </div>  
    </div>
</template>

<script setup>
import 'vant/lib/index.css'
import { ref } from 'vue'
import { showToast } from 'vant'
const text =
      '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。';

const onClickLeft = () => history.back()
const onClickRight = () => showToast('按钮')


</script>

<style scoped>
#back{
    background-color: rgba(94, 68, 68, 0.089);
    width: 100%;
    height: 100%;
}
</style>