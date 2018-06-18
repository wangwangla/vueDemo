<template>
	<!--
		声明周期函数，就是组件挂载和组件销毁发生的一系
		列动作，这些动作就是生命周期函数。
		
		也就是声明周期开始和声明周期结束所触发的一系列函数
		
	-->
	<div>
		dfjid
		<v-life></v-life>
	</div>
</template>

<script>
	/*引入*/
	import life from './component/Life.vue';
	export default{
		data(){
			return{
				
			}
		},components:{
		/*挂载*/	
			'v-life':life
		}
	}
</script>

<style>
</style>