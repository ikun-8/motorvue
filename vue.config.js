const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
//在element基础上 vant额外导入
const { VantResolver } = require('@vant/auto-import-resolver');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver(),VantResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(),VantResolver()],
      })
    ]
  },
  devServer:{
    //跨域代理对象
    proxy:{
      //配置很多组跨域 每组跨域都是一个对象
      //任意写
      //http://localhost:9999/任意写/show 就可以

      '/api':{
        // proxy 会转发到这里
        target:'http://localhost:9999',
        //路径重写 目的去除请求地址中的api
        pathRewrite:{'^/api':''},
        // 代理websockets
        ws:true,
        changeOrigin:true
      }
      

    }
  }

})
