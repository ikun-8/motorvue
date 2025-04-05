<template>
    <div class="logo">
      <img style="height: 70px;width: 70px;" src="../assets/icons/logo.png">
      <h3>欢迎登录房车坤</h3>
    </div>
    <br>
    <br>
    <div class="inp">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="user.name"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="user.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="flex-direction: row;display: flex;">
          <van-field
          v-model="user.captcha"
          clearable
          label="验证码"
          placeholder="请输入验证码"
          >
          </van-field>
          <img src="http://localhost:9090/user-service/user/getCode" class="pull-right" id="captcha" style="cursor: pointer;" onclick="this.src=this.src+'?d='+Math.random();" title="点击刷新" alt="captcha">

        </div>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <div style="flex-direction: row;display: flex;">
        <p style="font-size: 14px;color: gray;margin-left: 15px;"@click="toreg">账号注册</p>
        <p style="font-size: 14px;color: gray;margin-left: 55%;">忘记密码</p>
      </div>
    </div>
  
</template>
  
<script setup>
import {ref} from "vue"
import api from '../api/index'
import router from "@/router";

const user=ref({
  name:'',
  password:'',
  captcha:''
})
const onSubmit = () => {
    api.postReq("/user-service/user/login",user.value).then(res=>{
      console.log(res.data)
      if(res.data.code==200){
        ElMessage.success(res.data.msg);
        localStorage.setItem("userInfo",JSON.stringify(res.data.data))
        console.log(res.data.data)
        // if(res.data.data.identity==1){
        //   router.push("/gaver")
        // }
        // else{
        //   router.push("/home/demo1")
        // }
        router.push("/home")
      }
      else
        ElMessage.error(res.data.msg);
    })
};
const toreg=()=>{
  router.push("/reg")
}
</script>

<style scoped>
.logo{
  left: 30%;
  top:10%;
  position: fixed;
  text-align: center;
}
.pic{
 top: 75%;
 left: 30%;

 width: 100%;
 display: flex;
 position: fixed;
 

}
.inp{
  top: 30%;
  left: 5%;
  position: fixed;
}
</style>

  
