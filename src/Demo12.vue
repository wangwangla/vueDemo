<template>
	<div>
		<!--实现目标：
			通过编程式路由
				其实就是通过js进行页面的跳转
				
		-->
		
		<button @click="getMsg()">这是一个按钮</button>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return {
			}
		},methods:{
			getMsg(){
				alert("sdkhfjdhffg");
				this.$router.push({ path: 'Header' })
			}
		}
	}
</script>

<style lang="scss">
	
</style>