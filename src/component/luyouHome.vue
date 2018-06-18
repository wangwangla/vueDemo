<template>
	<div>
		这个是路由的测试home
		<ul>
			<li>Home</li>
			<li>Home</li>
			<li>Home</li>
			<li>Home</li>
			<li>Home</li>
			<li>Home</li>
			<li>Home</li>
			<li>Home</li>
		</ul>
		<ul>
			<li v-for="(key,a) in list">
				 <router-link :to="'/content/'+a">{{a}}==={{key}} </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:['我是啦啦啦01','我是啦啦啦02','我是啦啦啦03']
			}
		}
	}
</script>

<style lang="scss">
	
</style>