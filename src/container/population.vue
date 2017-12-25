<template>
	<el-container class="pupulation">
	  <el-header height="50px">
		<population-header></population-header>
	  </el-header>
	  <el-container>
	    <el-main style="padding : 0">
			<population-main></population-main>
	    </el-main>
	    <el-aside width="300px" style="overflow:visible">
			<population-aside></population-aside>
	    </el-aside>
	  </el-container>
	</el-container>
</template>
<script>
import populationHeader from '../components/population-header.vue';
import populationAside from '../components/population-aside.vue';
import populationMain from '../components/population-main.vue';
export default{
	components : {
		populationHeader,
		populationAside,
		populationMain
	}
}
</script>
