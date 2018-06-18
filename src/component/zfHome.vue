<template>
<div>
	<!---->
	home
	
	
	<!--
		
	将子标签中的数据传递个父标签中
	
	-->
	<v-zz :title='title' :msg='msg'></v-zz>
	
	<hr />
	<v-zz :run='run'></v-zz>
</div>
</template>

<script>
	import zz from './zfHeader.vue';
	export default{
		data(){
			return{
				title:'我是渣渣!',
				msg:'dijfhdfhjdfhjdfhj'
			}
		},components:{
			'v-zz':zz
		},methods:{
			run(){
				alert("dfikdujhdf")
			}
		}
	}
</script>

<style>
</style>