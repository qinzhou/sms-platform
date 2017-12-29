<template>
	<div class="population-header">
		<i class="icon-back" @click="back"></i>
		<h2 class="population-title">20181218人群密集通知</h2>
		<div class="population-menus">
			<div class="population-btn">
				<i class="icon-import"></i>
				<span class="menu-text">导入</span>
			</div>
			<div class="population-btn">
				<i class="icon-save-module"></i>
				<span class="menu-text">存为模板</span>
			</div>
			<div class="population-btn">
				<i class="icon-save"></i>
				<span class="menu-text">保存</span>
			</div>
			<div class="population-btn">
				<i class="icon-commit"></i>
				<span class="menu-text">提交</span>
			</div>
			<div class="population-btn">
				<i class="icon-play"></i>
				<span class="menu-text">运行</span>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	methods : {
		back(){
			this.$router.go(-1);
		}
	}
}
</script>
