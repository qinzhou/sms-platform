<template>
	<div class="sidebar-wrap">
		<h2 class="sidebar-name">消息中心</h2>
		<el-menu
	      :default-active="active"
	      :default-openeds="['1','2']"
	      :router="true"
	      class="el-menu-vertical-demo"
	      background-color="#F5F7FA"
	      text-color="#666"
	      active-text-color="#2C7CDB">
		  <el-submenu index="1">
		        <template slot="title">
		            <!-- <i class="el-icon-location"></i> -->
		            <span>平台消息</span>
		        </template>
	          	<el-menu-item index="/msg/msg-all">全部消息</el-menu-item>
	            <el-menu-item index="/msg/msg-unread">
	            	未读消息
	            	<el-badge value="8" class="item" :hidden="false"></el-badge>
	            </el-menu-item>
	            <el-menu-item index="/msg/msg-read">已读消息</el-menu-item>
	      </el-submenu>
	      <el-submenu index="2">
		        <template slot="title">
		            <!-- <i class="el-icon-location"></i> -->
		            <span>消息接收管理</span>
		        </template>
	            <el-menu-item index="/msg/msg-manage">消息人管理</el-menu-item>
	            <el-menu-item index="/msg/msg-receive">接收管理</el-menu-item>
	      </el-submenu>


	    </el-menu>
	</div>
</template>
<script>


export default{
	data () {
	  return {
	  	active : '/msg/msg-all'
	  }
	},
	methods: {

    },
    created (){
    	// let name = this.$route.name;
    	let path = this.$route.path;
    	if(path === '/msg'){
    		path = '/msg/msg-all';
    	}
    	this.active = path;
    },
    watch : {
    	$route (route){
    		this.active = route.path;
    	}
    }
}
</script>

<style scoped lang="scss">
	.el-badge{
		vertical-align : top;
	}
</style>