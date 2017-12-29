<template>
	<div class="header-bar">
		<el-popover
		  ref="popover"
		  placement="bottom"
		  trigger="hover"
		  width="260">
		  <div class="popover-wrap">
		  	<div class="balance-wrap">
		  		<div class="balance-text">账户余额</div>
		  		<el-button class="recharge" type="text">充值<i class="el-icon-arrow-right el-icon--right"></i></el-button>
		  	</div>
		  	<div class="cash-wrap">
		  		<span class="cash">23,566</span>元
		  	</div>
	  		<el-menu
	  		  class="popover-menu"
	  	      :default-active="active"
	  	      :router="true">
	  	      <el-menu-item index="/user/user-account-overview">
	  			<i class="icon-account-overview"></i>
	  	      	<span>账户概览</span>
	  	      </el-menu-item>
	  	      <el-menu-item index="/user/user-base-info">
	  	      	<i class="icon-base-info"></i>
				<span>基本资料</span>
	  	      </el-menu-item>
	  	      <el-menu-item index="/user/user-security-setting">
	  	      	<i class="icon-security-setting"></i>
				<span>安全设置</span>
	  	      </el-menu-item>
	  		  <el-menu-item index="/user/user-cost-center">
	  		  	<i class="icon-cost-center"></i>
				<span>费用中心</span>
	  		  </el-menu-item>
	  	    </el-menu>
	  	    <div class="popover-btn">
	  	    	退出管理中心
	  	    </div>
		  </div>
		</el-popover>
		<router-link tag="div" to="/" class="logo"></router-link>
		<h1 class="title">智信·短信平台</h1>
		<div class="user-info-wrap">
			<img class="avatar" src="../assets/img/avatar.png" />

			<el-button type="text" v-popover:popover class="link">李大牛<i class="el-icon-arrow-down el-icon--right"></i></el-button>
			<router-link tag="div" to="/msg" class="icon-notice">
				<div class="badges">3</div>
			</router-link>
			<a href="" class="icon-help"></a>
		</div>
		
	</div>
</template>
<script>
export default{
	data(){
		return{
			active : ''
		}
	},
	methods : {

	},
	watch : {
    	$route (route){
    		this.active = route.name;
    	}
    }
}
</script>

<style scoped>

/*.el-popover{
	padding-left: 0 !important;
	padding-right: 0 !important;
	padding-bottom: 0 !important;
}*/
</style>