<template>
	<div id="demo05">
		<h2>组件的使用</h2>
	
		我是demo05
		<hr/>
		<!--3.使用组件-->
		<v-home></v-home>
		<hr/>
		<h2>我是垃圾！</h2>
		<hr/>
		<v-news></v-news>
	</div>
</template>
<script>
/*1.将组件引入*/
import Home from './component/Home.vue';
import News from './component/News.vue';
export default { 
  name: 'demo05',
  data () {
      return {
      	
		}
  },
  components:{
  	/**
  	 * 2.挂载组件
  	 */
  	'v-home':Home,
  	'v-news':News
  }
}
</script>

<style lang="scss">

</style>
