import Vue from 'vue'
import App from './App.vue'
import  demo01 from './Demo01.vue'
import  demo02 from './Demo02.vue'
import  demo03 from './Demo03.vue'
import  demo04 from './Demo04.vue'
import  demo05 from './Demo05.vue'
import  demo06 from './Demo06.vue'
import  demo07 from './Demo07.vue'
import  demo08 from './Demo08.vue'
import  demo09 from './Demo09.vue'
import  demo10 from './Demo10.vue'
import  demo11 from './Demo11.vue'
import  demo12 from './Demo12.vue'
/*后面的是固定的，前面的这个是可以自己定义的，但是推荐折磨写*/
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/*然后使用这个插件*/
Vue.use(VueResource);


//1.创建组件
import Header  from './component/luyouHeader.vue'
import Home  from './component/luyouHome.vue'
import content  from './component/luyouContent.vue'
//2.配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/Header', component: Header },
 	{ path: '/content/:aid', component: content},  //路由传值  下一个使用get传值
 /*默认跳转路由*/
 
  { path: '*', component: Header},
]
//3.实例化
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
//4.挂载
new Vue({
  el: '#app',
  router,
  render: h => h(demo12)
})

//5.使用
