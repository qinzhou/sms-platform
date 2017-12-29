<template>
	<el-container style="height:100%">
	  <el-header height="50px" style="padding:0;">
	  		<header-bar></header-bar>
	  </el-header>
	  <el-container>
	  	<transition name="sidebar"
	    enter-active-class="animated fadeInLeft"
	    leave-active-class="animated fadeOutLeft">
		    <el-aside width="220px" v-if="enter">
		    	<user-sidebar></user-sidebar>
		    </el-aside>
	    </transition>
	    <transition name="sidebar"
	    	  enter-active-class="animated zoomIn"
	    	  leave-active-class="animated zoomOut">
	    	<el-main v-if="enter">
	    		<router-view/>
	    	
	    	</el-main>
	    </transition>
	  </el-container>
	</el-container>
</template>
<script>
import headerBar from '../components/header-bar';
import userSidebar from '../components/user-sidebar';
export default{
	data(){
		return {
			enter : false
		}
	},
	components : {
		headerBar,
		userSidebar
	},
	mounted(){
		this.enter = true;
	},
	beforeDestroy(){
		this.enter = false;
	},
	watch : {
    	$route (route){
    		console.log(route.path)
    	}
    }
}
</script>
