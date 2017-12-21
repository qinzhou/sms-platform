<template>
	<div class="sidebar-wrap">
		<h2 class="sidebar-name">短信平台</h2>
		<el-menu
	      default-active="1"
	      class="el-menu-vertical-demo"
	      @select="select"
	      background-color="#F5F7FA"
	      text-color="#666"
	      active-text-color="#2C7CDB">
	      <el-menu-item index="overview">
	        <i class="el-icon-menu"></i>
	        <span slot="title">概览</span>
	        <i class="el-icon-arrow-right"></i>
	      </el-menu-item>
	      <el-menu-item index="task">
	        <i class="el-icon-menu"></i>
	        <span slot="title">任务管理</span>
			<i class="el-icon-arrow-right"></i>
	      </el-menu-item>
	      <el-menu-item index="module">
	        <i class="el-icon-setting"></i>
	        <span slot="title">模板管理</span>
	        <i class="el-icon-arrow-right"></i>
	      </el-menu-item>
	      <el-menu-item index="port">
	        <i class="el-icon-menu"></i>
	        <span slot="title">端口配置</span>
	        <i class="el-icon-arrow-right"></i>
	      </el-menu-item>
	      <el-menu-item index="business">
	        <i class="el-icon-menu"></i>
	        <span slot="title">业务配件</span>
			<i class="el-icon-arrow-right"></i>
	      </el-menu-item>
	      <el-menu-item index="authorize">
	        <i class="el-icon-setting"></i>
	        <span slot="title">授权管理</span>
	        <i class="el-icon-arrow-right"></i>
	      </el-menu-item>
	    </el-menu>
	</div>
</template>
<script>
import router from '../router';
export default{
	data () {
	  return {
	   
	  }
	},
	methods: {
      select(key, keyPath) {
        // console.log(key, keyPath);
        router.push(key);
      },
    }
}
</script>