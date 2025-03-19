import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { PullRefresh } from 'vant';
import { Uploader } from 'vant';
import { Image as VanImage } from 'vant';
import { Sticky } from 'vant';
import { Area } from 'vant';


const eClock=(fn:any,delay:any)=>{
    let timer:any
    return (...args:any)=>{
        if(timer)
            clearTimeout(timer)
        timer=setTimeout(()=>{
            fn(...args)
        },delay)
    }

}
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
constructor(callback:any) {
callback = eClock(callback, 200);
super(callback);
}
}


const app = createApp(App)
//通app组件遍历所有图标 遍历一个注册一个
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app
.use(router)
.use(ElementPlus)
// .use(PullRefresh)
.use(Uploader)
.use(Sticky)
.use(Area)
// .use(VanImage)
.mount('#app')



