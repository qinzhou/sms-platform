<template>
	<div class="population-aside">
		
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="目标标签" name="target">
				<div class="tab-main">
					<ul class="label-list">
						<li class="label-item">
							<div class="label-name">标签</div>
							<i class="icon-import-active"></i>
							<div class="import-text">导入</div>
						</li>
						<li class="label-item">
							<el-select v-model="value" placeholder="基础">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
						    </el-select>
							<!-- <el-dropdown>
							  <span class="el-dropdown-link">
							    基础<i class="el-icon-arrow-down el-icon--right"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item>选项1</el-dropdown-item>
							    <el-dropdown-item>选项2</el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown> -->
						</li>
					</ul>
					<ul class="user-option-select">
						<li class="user-select-item" v-for="(item,index) in checkList">
							<i class="el-icon-error" @click="deleteCheck(index)"></i>
							<div class="select-label">{{item}}</div>
							<el-select v-model="value" placeholder="基础">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
						    </el-select>
						</li>
					</ul>
					<!-- <div class="add-select-item" @click="showLayer">
						<i class="el-icon-plus"></i>
					</div> -->
				</div>
				<div class="tab-oper">
					<el-button-group>
					  <el-button type="text" @click="toggleLayer">更多因子</el-button>
					  <el-button type="text">存为模板</el-button>
					</el-button-group>
				</div>
		    </el-tab-pane>
		    <el-tab-pane label="规则" name="rule">
				<div class="tab-main">
					<ul class="label-list">
						<li class="label-item">
							<div class="label-name">标签</div>
							<i class="icon-import-active"></i>
							<div class="import-text">导入</div>
						</li>
						<li class="label-item">
							<el-select v-model="value" placeholder="定时发送">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
						    </el-select>
						</li>
					</ul>
					<div class="date-wrap">
						
						<el-date-picker
					      v-model="value1"
					      type="datetime"
					      placeholder="选择日期时间">
					    </el-date-picker>
					</div>
					<div class="date-desc">
						<span>注：</span>
						<p>非定时查询可查同一时间点的历史记录作对照</p>
					</div>
				</div>
				<div class="tab-oper">
					<el-button-group>
					  <el-button type="text">存为模板</el-button>
					</el-button-group>
				</div>		    
		    </el-tab-pane>
		    <el-tab-pane label="短信" name="sms">
				<div class="tab-main">
					<ul class="label-list">
						<li class="label-item">
							<div class="label-name">标签</div>
							<i class="icon-import-active"></i>
							<div class="import-text">导入</div>
						</li>
					</ul>
					<div class="textarea-wrap">
						<el-input
						  type="textarea"
						  :maxlength = "maxlength"
						  :autosize="{ minRows: 8, maxRows: 10}"
						  placeholder="请输入内容"
						  @input = "textareaInput"
						  v-model="textarea3">
						</el-input>
						<div class="limit-text-wrap">
							<span class="text-current">{{currentLength}}</span>/
							<span class="text-total">500</span>
						</div>
					</div>
					<ul class="desc-list">
						<li>
							<router-link to="">						
								<el-button size="small" type="text">注意事项说明</el-button>
							</router-link>
						</li>
						<li>
							<router-link to="">						
								<el-button size="small" type="text">交通指南说明</el-button> 
							</router-link>
						</li>
						<li>
							<router-link to="">						
								<el-button size="small" type="text">申明说明</el-button> 
							</router-link>
						</li>
					</ul>
					
					
				</div>	
				<div class="tab-oper">
					<el-button-group>
					  <el-button type="text">预览</el-button>
					  <el-button type="text">存为模板</el-button>
					</el-button-group>
				</div>		    
		    </el-tab-pane>
	  </el-tabs>
		<div class="population-layer" v-show="isShowLayer">
			<div class="layer-title">
				<h4>更多因子</h4>
				<i class="el-icon-close" @click="hideLayer"></i>
			</div>
			<div class="layer-content">
				<ul class="checkbox-list">
					<li class="checkbox-item">
						<h5 class="checkbox-title">基础</h5>
						<el-checkbox-group v-model="checkList" @change="checkboxChange">
						    <el-checkbox label="运营商"></el-checkbox>
						    <el-checkbox label="用户归属"></el-checkbox>
						    <el-checkbox label="用户性质"></el-checkbox>
						     <el-checkbox label="用户类型"></el-checkbox>
						</el-checkbox-group>
					</li>
					<li class="checkbox-item">
						<h5 class="checkbox-title">特色</h5>
						<el-checkbox-group v-model="checkList" @change="checkboxChange">
						    <el-checkbox label="用户画像"></el-checkbox>
						    <el-checkbox label="用户价值"></el-checkbox>
						    <el-checkbox label="用户年龄"></el-checkbox>
						     <el-checkbox label="用户群体"></el-checkbox>
						</el-checkbox-group>
					</li>
					<li class="checkbox-item">
						<h5 class="checkbox-title">行为</h5>
						<el-checkbox-group v-model="checkList" @change="checkboxChange">
						    <el-checkbox label="用户迁移"></el-checkbox>
						    <el-checkbox label="用户消费"></el-checkbox>
						    <el-checkbox label="用户性质1"></el-checkbox>
						     <el-checkbox label="用户类型1"></el-checkbox>
						</el-checkbox-group>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    data() {
      return {
        activeName: 'target',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '基础',
        value1: '',
        textarea3: '',
        maxlength : 500,
        currentLength : 0,
        checkList : ['运营商','用户归属'],
        isShowLayer : false
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        console.log(this.activeName)
      },
      textareaInput(val){
      	this.currentLength = val.length;
      },
      checkboxChange(val){
      	console.dir(val);
      },
      showLayer(){
      	this.isShowLayer = true;
      },
      hideLayer(){
      	this.isShowLayer = false;
      },
      toggleLayer(){
      	this.isShowLayer = !this.isShowLayer;
      },
      deleteCheck(index){
      	this.checkList.splice(index,1);
      }
    }
 };	
</script>