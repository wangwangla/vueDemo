<template>
	<div id="demo04">
		<input type="text" v-model="todo"/> <button @click="doAdd()">增加</button?>
<hr/>
<!--添加的数据-->
		添加数据
		<ul>
			<li v-for="(a,key) in list" v-if="!a.checked">
				<input type="checkbox" v-if="!a.checked"/> {{a}}   <button @click="deelete(key)" >删除</button>
			</li>
		</ul>
		完成的数据
		<hr/>
		<ul>
			<li v-for="(a,key) in list" v-if="a.checked">
				<input type="checkbox" v-if="a.checked"/> {{a}}   <button @click="deelete(key)" v-if="!a.checked">删除</button>
			</li>
		</ul>
		
		<hr/>
		<h2 v-if="ok">这个哥哥</h2>
		<h2 v-if="!ok">这个哥哥</h2>
	</div>
</template>
<script>

export default { 
  name: 'demo04',
  data () {
      return {
      	todo:'dsfh',
      	list:[],
      	ok:true
      }
  },methods:{
  	doAdd(){
  		this.list.push(this.todo);
  		localStorage.setItem('list',JSON.stringify(this.list));
  	},deelete(val){
  		//在某个位置上删除数据
  		this.list.splice(val,1);
  		localStorage.setItem('list',JSON.stringify(this.list));
  		/*出栈*/
  		/*this.list.pop(val);*/
		/*上面的两个方法是相同的 */
  	}
  },mounted()
  	{
  		
  		var list = JSON.parse(localStorage.getItem('list'));
  		alert(list);
  		if(list)
  		{
  			alert('dffffffff');
  			this.list = list;
  		}
  	}
}
  
</script>

<style lang="scss">

</style>
