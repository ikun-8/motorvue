import axios from '../util/request'
import base  from './base'


const api={
    // 如果使用ts就相当于java 定义函数 需要添加类型
    // （参数1：类型，参数2：类型）
    // 参数后添加问号表示可选参数
    postReq(url:String,data?:Object){
        return axios.post(base.baseUrl+url,data)

    },
    getReq(url:String,data:Object){
        return axios.get(base.baseUrl+url,data)

    }

}
export default api;