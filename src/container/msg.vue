<template>
	<el-container style="height:100%">
	  <el-header height="50px" style="padding:0;">
	  	<header-bar v-if="enter"></header-bar>
	  </el-header>
	  <el-container>
	    <el-aside width="220px">
	    	<transition name="sidebar"
	    		    	  enter-active-class="animated fadeInLeft"
	    		    	  leave-active-class="animated fadeOutLeft">
	    	<msg-sidebar v-if="enter"></msg-sidebar>
	    	 </transition>
	    </el-aside>
	   
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
import msgSidebar from '../components/msg-sidebar';
export default{
	data(){
		return {
			enter : false
		}
	},
	mounted(){
		this.enter = true;
	},
	beforeDestroy(){
		this.enter = false;
	},
	components : {
		headerBar,
		msgSidebar
	},
	watch : {
    	$route (route){
    		console.log(route.path)
    	}
    }
}
</script>
