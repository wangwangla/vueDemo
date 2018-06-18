<template>
	<!--所有的内容需要被div包含起来-->
	<div id="home">
		<h2>这是一个组件</h2>
		{{msg}}
	</div>
</template>
<!--在组件中也是可以放入业务逻辑的-->
<script>
export default{
	data(){
		return{
			msg:'我是啦啦啦!'	
		}		
	}
}
</script>
<!--scoped表示局部作用域 -->
<style lang="scss" scoped>
/**#home{
	h2{
		color: red;
	}
}

* 或者是
* */
	h2{
		color: red;
	}
</style>