<template>
<!--vue中的所有内容，需要让一个跟组件将他们包起来-->
  <div id="demo01">
  	<h1>练习目标</h1>
  	<ul>
  		<li>1.数据路径的三种方式</li>
  		<li>2.{{}}和v-html的区别</li>
  	</ul>
               这是第二个练习
        <div v-bind:title="msg">我是张家辉！</div>
        <hr/>
        <img src="http://pic.baike.soso.com/p/20140109/20140109142534-188809525.jpg">
        <hr/>
        <img v-bind:src="url">
        <hr/>
        <img :src="url">
        <hr/>
        <div :title="msg">我是张家辉！</div>
        <br/>
        	这种方式是将他们的数据直接输出，并没有达到我们想要的解析
        	{{h}}
        <hr/>
        	下面的方法可以解决问题
        <div v-html="h"></div>


        <hr/>
        绑定数据的第二种方法是
        <div v-text="msg"> </div>
    <hr/>
    绑定样式的使用
        <div v-bind:class="{'red':flag}">
        
        我是渣渣！
         </div>
        
        <hr/>
            绑定样式的使用
        <div v-bind:class="{'red':flag,'blue':!flag}">
                 我是渣渣！
         </div>
         
         <hr/>
         <!--显示高亮-->
         <div v-for="(item,key) in list" :class="{'red':key==0,'blue':key==1}">
         		{{key}}---->{{item}}
         </div>
         <!--style  和v-bind：class的数据显示-->
         <div class="box"> 
         	我说一个box
         	
         	
         </div>
        
  </div>
</template>
<!--将这个组件暴露出去！-->
<script>
export default { 
  name: 'demo01',
  /*业务逻辑中的数据*/
  data () {
    return {
        msg:'你好，我是啦啦啦!',
        url:'http://pic.baike.soso.com/p/20140109/20140109142534-188809525.jpg',
        h:'<h2>我是h2</h2>',
        flag:true,
        list:['kw','ll','ee']
    }
  }
}
</script>

<style lang="scss">
    .red{color:red;}
    .blue{color:blue}
    .box{
    	height: 100px;
    	width: 100px;
    	background: black;
    }
</style>
