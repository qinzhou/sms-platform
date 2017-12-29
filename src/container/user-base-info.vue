<template>
	<div class="base-info">
		<h3 class="c-title">
			<span class="title">基本资料</span>
		</h3>
		<div class="base-wrap">
			<h4 class="subtitle">基本信息</h4>
			<ul class="base-list">
				<li class="base-item">
					<label class="item-label">姓名：</label>
					<span class="item-val">李大牛<el-button size="mini">户主</el-button></span>
					
				</li>
				<li class="base-item">
					<label class="item-label">手机：</label>
					<span class="item-val">13570589481</span>
				</li>
				<li class="base-item">
					<label class="item-label">邮箱：</label>
					<span class="item-val">13570589481@sina.com</span>
				</li>
				<li class="base-item">
					<label class="item-label">地址：</label>
					<span class="item-val">广东省广州市
					<el-button size="mini" icon="el-icon-plus" @click="dialogVisible = true"></el-button>	
					</span>
				</li>
			</ul>
		</div>
		<div class="base-wrap">
			<h4 class="subtitle">业务信息</h4>
			<ul class="base-list">
				<li class="base-item">
					<label class="item-label">主要行业：</label>
					<span class="item-val">
						<el-select v-model="value" size="small" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</span>
				</li>
				<li class="base-item">
					<label class="item-label">描述：</label>
					<span class="item-val">
						<el-input
						  :rows="3"
						  type="textarea"
						  placeholder="请输入内容"
						  v-model="textarea2">
						</el-input>
					</span>
				</li>
			</ul>
			<el-button type="primary" class="save-btn">保存</el-button>
		</div>

		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="600px">
		  <div class="dialog-content">
			<ul class="base-list">
				<li class="base-item">
					<label class="item-label">地区：</label>
					<span class="item-val">
						<el-select v-model="value" size="small" placeholder="请选择">
						    <el-option
						      v-for="item in provinceOptions"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
						<el-select v-model="value" size="small" placeholder="请选择">
						    <el-option
						      v-for="item in cityOptions"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</span>
				</li>
				<li class="base-item">
					<label class="item-label">街道：</label>
					<span class="item-val">
						<el-input
						  placeholder="请输入内容"
						  class="address-input"
						  size="small">
						</el-input>
					</span>
				</li>
			</ul>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
export default {
	data() {
     return {
       options: [{
         value: '选项1',
         label: '旅游'
       }, {
         value: '选项2',
         label: '旅行社'
       }],
       provinceOptions: [{
         value: '选项1',
         label: '广东'
       }, {
         value: '选项2',
         label: '福建'
       }],
       cityOptions: [{
         value: '选项1',
         label: '广州'
       }, {
         value: '选项2',
         label: '厦门'
       }],
       value: '',
       textarea2 : '',
        dialogVisible: false
     }
   }
}
</script>