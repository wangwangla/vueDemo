<template>
<div>子{{title}}=============={{msg}}
<button @click="run()">父组件</button>
</div>
</template>

<script>
	/*接收值*/
	export default{
		data(){
			return{
				 msg:'sdfduhdgfhdgf'
			}
		},props:['title','msg','run']
	}
</script>

<style>
</style>

<!--
	
子父传值步骤
(1)在父类中传值
<v-zz :title='title'></v-zz>
（2）在子类中接收值
<script>
	/*接收值*/
	export default{
		data(){
			return{
				
			}
		},props:['title']
	}
</script>

显示值
<div>子{{title}}</div>
-->