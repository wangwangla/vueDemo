<template>
<!--vue中的所有内容，需要让一个跟组件将他们包起来-->
  <div id="app">
  	<h2>这里的主要练习</h2>
  	<ul>
  		<li>
  		    1.简单数据的基本绑定
  		</li>
  		<li>
  			2.对象的简单绑定
  		</li>
  		<li>
  			3.数据的基本绑定
  		</li>
  		<li>
  			4.json数据的绑定
  		</li>
  		<li>
  			5.复杂数据的使用：
  		</li>
  	</ul>
  	
  	
    <h2>你好，啦啦啦！</h2>
      <!--1.简单数据-->
    	绑定数据：{{msg}}
      <br/>
			<!--2.对象数据的绑定-->
    	对象数据的绑定：
            名字：{{people.name}}
      <br/>
            年龄：{{people.age}}
      <br/>
      <!--3.list集合的使用，for循环的使用-->
      list集合的使用：
      <br/>
       for循环的练习：
       <ul>
          <ui v-for="a in list">
              {{a}}
          </ui>
       </ul>

       <hr/>
       <!--4.json数据的绑定-->
       json使用：
       <br/>
       <ul>
          <ui v-for="a in list01">
              {{a.demo01}}
          </ui>
       </ul>
       <hr/>
        <!--5.复杂数据的使用：-->
       <br/>
       for循
       <ul>
          <ui v-for="a in list03">
              {{a.name}}
              <ol>
                <ui v-for ="ai in a.data">
                  {{ai.name}}
                <br/>
                  {{ai.age}}         
                </ui>
              </ol>
              <br/>
          </ui>
       </ul>
  </div>
</template>
<!--将这个组件暴露出去！-->
<script>
export default { 
  name: 'app',
  /*业务逻辑中的数据*/
  data () {
    return {
      /**
      	基本数据
       */
      msg: '我是测试数据!',
      /**
     		 对象数据 
      */
      people:{
        name:"kangwang",
        age:20
      },
      /**
        list数据
       */
      list:["kangwang","lalal","djfh"],
      /**
      json数据的显示       */
      list01:[{'demo01':'demo02'},{'demo01':'demo02'},{'demo01':'demo02'},{'demo01':'demo02'}],

      /**
     	 复杂数据的使用：
       */


      list03:[{
        name:'啦啦啦01',
        data:[
              {
                name:'datatest',age:'2343'
               },
              {
                 name:'datatest',age:'2343'
              }
          ]},
        {
          name:'啦啦啦02',
          data:[
            {name:'datatest',age:'2343'},
            {name:'datatest',age:'2343'}
          ]
      }]
    }
  }
}
</script>

<style lang="scss">

</style>
