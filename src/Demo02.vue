<template>
	<div id="demo02">
		<h3>1.数据值的动态绑定和方法的使用</h3>
		2.使用ref获取并显示数据
		{{msg}}
		<input type="text" v-model="msg" />
		<button v-on:click="getmsg()">我是按钮！</button>
		<button v-on:click="setmsg()">我是改变</button>
		
		<hr/>
		<input type="text" ref="info"/>
		<div ref="box">我是；啦啦啦</div>
		<!--ref获取dom节点-->
		<button v-on:click="getInput()">获取数据！</button>
		
	</div>
</template>
<script>
	/**
	 * 双向数据绑定  MVM  vue就是一个MVM架构
	 * 
	 * 
	 * M  model
	 * V  view
	 * MVM model改变会造成view中的数据的变化
	 * 
	 */
export default { 
  name: 'demo02',
  /*业务逻辑中的数据*/
  data () {
    return {
    	msg:"我是啦啦啦"  
    }
  },methods:{
  	getmsg(){
  		/*alert('方法执行！');*/
		alert(this.msg);
  	},setmsg(){
  		/*alert('方法执行！');*/
		this.msg="我是渣渣！"
  	},getInput(){
  		alert('dfihdfuf');
  		console.log(this.$refs.info);
  		this.$refs.box.style.background='red';
  		alert(this.$refs.info.value);
  	}
  }
}
</script>

<style lang="scss">

</style>
