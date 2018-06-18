<template>
  <div id="demo09">
  	
  	<!--案例目标：将父标签的数据传入子标签中-->
	子父组件{{msg}}
  <v-header></v-header>
  </div>
</template>

<script>
import zfbq from './component/zfHome.vue';

	export default{
		data(){
			return {
			msg:'dfhdjffhu'
			}
		},components:{
			'v-header':zfbq
		}
	}
</script>


<style lang="scss">

</style>
