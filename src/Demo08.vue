<template>
  <div id="demo08">
	+通过axios获取数据  axios 
	
<button @click="getMsg()">annoui</button>
  </div>
</template>

<script>
	
import Axios from 'axios';
export default { 
  name: 'demo08',
  data () {
    return {
    }
  },methods:{
  	getMsg()
  	{
  		var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
 
  		Axios.get(api).then((response)=>{
  			console.log(response);
  		}).catch(error=>{
  			console.log(error);
  		})
  	}
  },mounted(){

  }
}
</script>

<style lang="scss">

</style>
