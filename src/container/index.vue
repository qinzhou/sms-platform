<template>
	<el-container style="height:100%">
	  <el-header height="50px" style="padding:0;">
	  	<header-bar></header-bar>
	  </el-header>
	  <el-container>
	    <el-aside width="220px">
	    	<sidebar></sidebar>
	    </el-aside>
	    <el-main>
	    	<router-view/>
	    </el-main>
	  </el-container>
	</el-container>
</template>
<script>
import headerBar from '../components/header-bar';
import sidebar from '../components/sidebar';
export default{
	components : {
		headerBar,
		sidebar
	}
}
</script>
<style lang="scss">
@import '../assets/scss/style.scss';
</style>