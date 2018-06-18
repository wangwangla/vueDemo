<template>
	<div id="content">
		这个是详情页！
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:['我是啦啦啦01','我是啦啦啦02','我是啦啦啦03']
			}
		},mounted(){
			alert(this.$route.params);
			console.log(this.$route.params);
		}
	}
</script>

<style lang="scss">
	
</style>