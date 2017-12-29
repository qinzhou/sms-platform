<template>
	<div class="sidebar-wrap">
		<h2 class="sidebar-name">个人中心</h2>
		<el-menu
	      :default-active="active"
	      :router="true"
	      class="el-menu-vertical-demo"
	      background-color="#F5F7FA"
	      text-color="#666"
	      active-text-color="#2C7CDB">
	      <el-menu-item index="/user/user-account-overview">
	        <i class="icon-account-overview"></i>
	        <i class="icon-account-overview-active"></i>
	        <span slot="title">账户概览</span>
	      </el-menu-item>
	      <el-menu-item index="/user/user-base-info">
	        <i class="icon-base-info"></i>
	        <i class="icon-base-info-active"></i>
	        <span slot="title">基本资料</span>
	      </el-menu-item>
	      <el-menu-item index="/user/user-security-setting">
	        <i class="icon-security-setting"></i>
	        <i class="icon-security-setting-active"></i>
	        <span slot="title">安全设置</span>
	      </el-menu-item>
	      <el-menu-item index="/user/user-cost-center">
	      	<i class="icon-cost-center"></i>
	        <i class="icon-cost-center-active"></i>
	        <span slot="title">费用中心</span>
	      </el-menu-item>
	    </el-menu>
	</div>
</template>
<script>


export default{
	data () {
	  return {
	  	active : '/user/user-account-overview'
	  }
	},
	methods: {

    },
    created (){
    	let name = this.$route.name;
    	this.active = name;
    },
    watch : {
    	$route (route){
    		this.active = route.name;
    	}
    }
}
</script>