<template>
	<div>
		<!--实现目标
			获去到服务器上  的数据
		-->
		<ul>
			<li v-for="(key,a) in list">
				{{a}}======={{key.title}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[]
			}
		},methods:{
			resourceData()
			{
				var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
				this.$http.jsonp(api).then((response)=>
				{
					this.list=response.body.result;
				},function(err){
					console.log(err);
				})
			}
			
		},mounted(){
			this.resourceData();
		}
	}
</script>

<style lang="scss">
	
</style>