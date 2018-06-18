<template>
	<div>
		<!--
			实现目标
			1.实现路由功能，就是将页面中的页面，动态的加载到页面中去。
			
			使用方法：
			下载一个插件vue-router
		-->
		
		<!--动态组件-->
		
    <router-link to="/Home">Home</router-link>
    <router-link to="/Header">Header</router-link>
		<router-view></router-view>
		{{msg}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'kangwang'
			}
		}
	}
</script>

<style lang="scss">
	
</style>