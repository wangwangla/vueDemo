<template>
  <div id="demo07">
  	<!--
  		
  	通过按钮来获取参数
  	下来在想使用已加载就获取到数据。，这个时候需要使用的是声明周期方法
  	-->
	<button @click="getMsg()">获取请求参数</button>
	{{list}}
	<hr/>
	  <ul>
  	<li v-for="a in list">
  		{{a}}
  	</li>
  </ul>
  </div>
</template>

<script>
export default { 
  name: 'demo07',
  data () {
    return {
        msg:'你好，我是啦啦啦!',
        list:[]
    }
  },methods:{
  	getMsg(){
  		/*请求参数*/
  		var api='http://www.phonegap100.com/appapi.php?a=getPortalList 1'
  		this.$http.get(api).then(
  			function(response){
  				console.log(response)
  				this.list=response.body.message;
  		},function(err){
  			 
  			console.log(err);
  			
  		})
  	}
  }
}
</script>

<style lang="scss">

</style>
