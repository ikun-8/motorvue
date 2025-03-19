//将axios对象进行封装 提高安全性

//1导入axios
import axios from 'axios'
// import { handleError } from 'vue';


//2创建错误对象映射
//参数1 状态 参数2 信息

const errorHandler=(status:Number,info:String)=>{
    switch(status){
        case 400:console.log("客户端参数异常");break;
        case 403:console.log("用户未授权");break;
        case 500:console.log("服务器内部异常");break;
        case 404:console.log("找不到对象");break;
        default:console.log(info)

    }

}
//3通过axios创建请求实例
const instance=axios.create({
    // 控制超时时间 单位毫秒
    timeout:5000
})
// 通过请求实例配置请求拦截器(成功函数，失败函数)
instance.interceptors.request.use(
    (config)=>{
        //每次发送请求都会进入这个拦截器
        //所有携带jwt
        // const token=localStorage.getItem("token")
        // config.headers.名称=数据
        // config.headers.token=token;
        if(config.method==="post"){

        }else if(config.method==="get"){

        }
        return config;
    },
    (error)=>{

        return Promise.reject(error)


    }
)
// 通过请求实例配置响应拦截器(响应成功函数，响应失败函数)
instance.interceptors.response.use(
    response=>{
    //根据状态码是否是200 返回正确或失败信息
        return response.status==200?Promise.resolve(response):Promise.reject(response)

    },
    error=>{
        //定义响应变量 常量不能改
        const {response}=error;
        //调用上面的错误映射
        errorHandler(response.status,response.info)

    }
)

// 导出请求实例
export default instance;