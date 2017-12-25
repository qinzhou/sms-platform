<template>
	<div class="sidebar-wrap">
		<h2 class="sidebar-name">短信平台</h2>
		<el-menu
	      :default-active="active"
	      :router="true"
	      class="el-menu-vertical-demo"
	      background-color="#F5F7FA"
	      text-color="#666"
	      active-text-color="#2C7CDB">
	      <el-menu-item index="overview">
	        <i class="icon-overview"></i>
	        <i class="icon-overview-active"></i>
	        <span slot="title">概览</span>
	        <!-- <i class="el-icon-arrow-right"></i> -->
	      </el-menu-item>
	      <el-menu-item index="task">
	        <i class="icon-task"></i>
	        <i class="icon-task-active"></i>
	        <span slot="title">任务管理</span>
			<!-- <i class="el-icon-arrow-right"></i> -->
	      </el-menu-item>
	      <el-menu-item index="module">
	        <i class="icon-module"></i>
	        <i class="icon-module-active"></i>
	        <span slot="title">模板管理</span>
	        <!-- <i class="el-icon-arrow-right"></i> -->
	      </el-menu-item>
	      <el-menu-item index="port">
	      	<i class="icon-port"></i>
	        <i class="icon-port-active"></i>
	        <span slot="title">端口配置</span>
	        <!-- <i class="el-icon-arrow-right"></i> -->
	      </el-menu-item>
	      <el-menu-item index="business">
	        <i class="icon-business"></i>
	       	<i class="icon-business-active"></i>
	        <span slot="title">业务配件</span>
			<!-- <i class="el-icon-arrow-right"></i> -->
	      </el-menu-item>
	      <el-menu-item index="authorize">
	        <i class="icon-authorize"></i>
	        <i class="icon-authorize-active"></i>
	        <span slot="title">授权管理</span>
	        <!-- <i class="el-icon-arrow-right"></i> -->
	      </el-menu-item>
	    </el-menu>
	</div>
</template>
<script>
import router from '../router/';
export default{
	data () {
	  return {
	  	active : 'overview'
	  }
	},
	methods: {

    },
    created (){
    	router.afterEach((to, from) => {
    		this.active = to.name;
		})
    }
}
</script>