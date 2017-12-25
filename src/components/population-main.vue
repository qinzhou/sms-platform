<template>
	<div class="population-main">
		<div class="toolbar">
			<label class="toolbar-item">
				<i class="icon-address"></i>
				<el-select v-model="address" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
			  </el-select>
			</label>
			<label class="toolbar-item" @click="toggleLayer">
				<i class="icon-area"></i>
				<div class="area-text">不限</div>
				<i class="el-icon-arrow-down"></i>
				<!-- <el-select v-model="area" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
			  </el-select> -->
			</label>
			<label class="toolbar-item">
				<i class="icon-select"></i>
				<el-select v-model="select" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
			  </el-select>
			</label>
		</div>


		<div class="area-layer" v-show="isShowLayer">
			<el-collapse-transition>
				<el-tabs type="border-card">
					  <el-tab-pane label="我的区域">
							<el-checkbox-group v-model="checkList">
							    <el-checkbox label="龙华区"></el-checkbox>
							    <el-checkbox label="保安中心"></el-checkbox>
							    <el-checkbox label="龙商中心"></el-checkbox>
							    <el-checkbox label="南山区"></el-checkbox>
							    <el-checkbox label="罗湖区"></el-checkbox>
							  </el-checkbox-group>
					  </el-tab-pane>
					  <el-tab-pane label="热门区域">热门区域</el-tab-pane>
					  <el-tab-pane label="商业区">商业区</el-tab-pane>
					  <el-tab-pane label="行政区">行政区</el-tab-pane>
					  <el-tab-pane label="地铁">地铁</el-tab-pane>
					  <el-tab-pane label="机场/车站">机场/车站</el-tab-pane>
					  <el-tab-pane label="景区">景区</el-tab-pane>
					  <el-tab-pane label="大学">大学</el-tab-pane>
					  <el-tab-pane label="展会周边">展会周边</el-tab-pane>
					  <el-tab-pane label="医院">医院</el-tab-pane>
				</el-tabs>
			</el-collapse-transition>
			<div class="sliderup" @click="closeLayer">
				<span>收起</span>
				<i class="el-icon-arrow-up"></i>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data() {
	     return {
	       options: [{
	         value: '选项1',
	         label: '深圳市'
	       }, {
	         value: '选项2',
	         label: '广州市'
	       }],
	       address: '深圳市',
	       area : '不限',
	       select : '圈选',
	       checkList : [],
	       isShowLayer : false
	     }
	   },
	methods : {
   		toggleLayer(){
   			this.isShowLayer = !this.isShowLayer;
   		},
   		closeLayer(){
   			this.isShowLayer = false;
   		}
	}
}
</script>