<template>
	<div id="demo03">
		<h3>获取值的几种方式和数据传参问题</h3>
		<button v-on:click="fun01()">我是第一种方法</button>
		<button @click="fun02()">获取方式二</button>
		<button v-on:click="fun03()">获取参数</button>
		<button @click="fun04('1111')">
			值传递
		</button>
		<button @click="fun05($event)">事件对象</button>
	</div>
</template>
<script>
export default { 
  name: 'demo03',
  data () {
      return {
      	msg:"woshi zhehheh"
 
   }
 },methods:{
 	fun01(){
 		alert('方法一成功！');
 	},
 	fun02(){
 		alert("我是啦啦啦");
 	},fun03(){
 		alert(this.msg);
 	},fun04(val)
 	{
 		alert(val);
 	},fun05(e){
 		//console.log(e);
 		console.log(e.srcElement.dataset)
 	}
 }
}
</script>

<style lang="scss">

</style>
