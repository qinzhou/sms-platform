<template>
	<div class="header-bar">
		<div class="logo"></div>
		<h1 class="title">智信·短信平台</h1>
		<div class="user-info-wrap">
			<div class="avatar"></div>
			<el-dropdown :hide-on-click="false">
			  <span class="el-dropdown-link">
			    李大牛<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>黄金糕</el-dropdown-item>
			    <el-dropdown-item>蚵仔煎</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
			<div class="icon-notice">
				<div class="badges">3</div>
			</div>
			<a href="" class="icon-help"></a>
		</div>
	</div>
</template>
<script>
export default{

}
</script>