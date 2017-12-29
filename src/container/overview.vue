<template>
	<div class="overview">
		<div class="overview-panel" v-show="!isShowTask">
			<h3 class="c-title">
				<span class="title">概览</span>
				
			</h3>
			<div class="c-msg-tip">
				<i class="el-icon-warning"></i>
				<h5 class="msg-text">系统提示：这是一条系统提示消息</h5>
			</div>
			<el-row :gutter="16">
				<el-col :span="16">
					<el-card class="c-box-card">
					  <div slot="header" class="clearfix">
					    <span>我的任务</span>
					    <el-button icon="el-icon-setting" class="oper-btn" style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					  </div>
					  <div class="card-content">
					  		<el-row>
								<el-col :span="10">
									<div class="c-task-box">
										<div class="task-state-wrap">
											<h3 class="task-number">6</h3>
											<div class="task-state">执行中</div>
										</div>
										<el-button @click="showCreateTask" size="small" type="primary" round>发起任务</el-button>
										<div class="v-line"></div>
									</div>
								</el-col>
								<el-col :span="7">
									<div class="c-task-box">
										<i class="icon-task-unusual"></i>
										<div class="task-state-wrap">
											<h3 class="task-number fz34">6</h3>
											<div class="task-state">异常任务</div>
										</div>
									</div>
								</el-col>
								<el-col :span="7">
									<div class="c-task-box">
										<i class="icon-task-todo"></i>
										<div class="task-state-wrap">
											<h3 class="task-number fz34">6</h3>
											<div class="task-state">待审任务</div>
										</div>
									</div>
								</el-col>
					  		</el-row>
					  </div>
					</el-card>

					<el-card class="c-box-card">
					  <div slot="header" class="clearfix">
					    <span>基本数据</span>
					  </div>
					  <div class="card-content">
					  	<el-row>
							<el-col :span="8">
								<h5 class="base-data-title">发送数量</h5>
								<div class="send-number">
									<span>5,234</span>条
								</div>
								<p class="base-data-desc">今日发送量，失败52条</p>
							</el-col>
							<el-col :span="8">
								<h5 class="base-data-title">发送成功率</h5>
								<ve-ring  :colors="ringColors" :grid="ringGrid" :data="ringData" :settings="ringSettings" :legend-visible="false" width="200px" height="160px" :title="title" ></ve-ring>
							</el-col>
							<el-col :span="8">
								<h5 class="base-data-title">7月份发送趋势</h5>
								 <ve-line :colors="lineColors" :grid="grid" height="160px" :legend-visible="false" :data="lineData" :settings="lineSettings"></ve-line>
							</el-col>

					  	</el-row>
					  </div>
					</el-card>  

					<el-card class="c-box-card">
					  <div slot="header" class="clearfix">
					    <span>您可能关注的场景</span>
					  </div>
					  <div class="card-content">
					  	<el-row>
							<el-col :span="12">
								<div class="scene-box">
									<i class="icon-hosptial"></i>
									<div class="scene-desc">
										<h4 class="scene-title">疾控预防</h4>
										<h5 class="scene-subtitle">辅助内容</h5>
										<p class="scene-text">辅助内容辅助内容辅助内容辅助内容辅助内容辅助内容</p>
									</div>
								</div>
							</el-col>
							<el-col :span="12">
								<div class="scene-box">
									<i class="icon-traffic-flow"></i>
									<div class="scene-desc">
										<h4 class="scene-title">疾控预防</h4>
										<h5 class="scene-subtitle">辅助内容</h5>
										<p class="scene-text">辅助内容辅助内容辅助内容</p>
									</div>
								</div>
							</el-col>

					  	</el-row>
					  </div>
					</el-card>  
				</el-col>
				<el-col :span="8">
					<el-card class="c-box-card">
					  <div slot="header" class="clearfix">
					    <span>待办事项</span>
					  </div>
					  <div class="card-content">
					  		<div class="c-task-box">
								<div class="task-state-wrap">
									<h3 class="task-number">6</h3>
									<div class="task-state">待办数量</div>
								</div>
								<div class="btn-wrap">
									<el-button size="mini" type="primary" round>发起工单</el-button>
									<div class="task-detail-wrap">
										<span>明细</span>
										<i class="el-icon-arrow-right"></i>
									</div>
								</div>
								
							</div>
					  </div>
					</el-card>
					<el-card class="c-box-card">
					  <div slot="header" class="clearfix">
					    <span>公告</span>
					  </div>
					  <div class="card-content">
					  	<ul>
						  	<li class="card-item" v-for="i in 4">
						  		<h6>这是一条公告内容这是一条公告内容这是一条公告</h6>
						  		<time>2017-12-02</time>
						  	</li>
					  	</ul>
					  </div>
					</el-card>

					<el-card class="c-box-card">
					  <div slot="header" class="clearfix">
					    <span>新手必读</span>
					  </div>
					  <div class="card-content">
					  	<ul>
						  	<li class="newbee-item" v-for="i in 2">
						  		<h6>接口调用：</h6>
						  		<p>这是一条公告内容这是一条公告内容</p>
						  	</li>
					  	</ul>
					  </div>
					</el-card>

				</el-col>
			</el-row>

		</div>
		<div class="create-task-panel" v-show="isShowTask">
			<h3 class="c-title">
				<span class="title">创建任务</span>
				<el-button size="small" type="info" icon="el-icon-arrow-left" @click="hideCreateTask">返回</el-button>
				<!-- <div class="back" @click="hideCreateTask">
					<i class="icon-back"></i>
					<span>返回</span>
				</div> -->
			</h3>
			<el-row :gutter="20">
				<el-col :span="8">
					<h2 class="task-title">最近使用的任务:</h2>
					<ul>
					  	<li class="card-item" v-for="i in 10">
					  		<h6>这是一条公告内容这是一条公告内容这是一条公告</h6>
					  		<time>2017-12-02</time>
					  	</li>
				  	</ul>
				  	<div class="more-task">
				  		<span>更多</span>
				  		<i class="el-icon-d-arrow-right"></i>
				  	</div>
				</el-col>
				<el-col :span="16">
					<h2 class="task-title">我的模板:</h2>
					<div class="searchbar">
						
						<el-input
						    placeholder="搜索任务模板"
						    suffix-icon="el-icon-search"
						    v-model="input6">
						</el-input>
						<div class="model-link">
							<span>模板商城</span>
							<i class="el-icon-d-arrow-right"></i>
						</div>
					</div>
					<el-row class="module-list">
						<el-col :span="8">
							<router-link tag="li" to="/population" class="module-item">
								<i class="icon-add-module">
									<i class="el-icon-plus"></i>
								</i>
								<h6>新建空白任务</h6>
							</router-link>
						</el-col>
						<el-col :span="8">
							<li class="module-item">
								<i class="icon-traffic-jam"></i>
								<h6>交通堵塞</h6>
							</li>
						</el-col>
						<el-col :span="8">
							<li class="module-item">
								<i class="icon-typhoon"></i>
								<h6>台风预警</h6>
							</li>
						</el-col>
						
						<el-col :span="8">
							<li class="module-item">
								<i class="icon-accident"></i>
								<h6>交通事故</h6>
							</li>
						</el-col>
						<el-col :span="8">
							<li class="module-item">
								<i class="icon-weather"></i>
								<h6>天气预告</h6>
							</li>
						</el-col>
						<el-col :span="8">
							<li class="module-item">
								<i class="icon-city-management"></i>
								<h6>城市管理</h6>
							</li>
						</el-col>

					</el-row>
					
				</el-col>
			</el-row>

		</div>
		


	</div>
</template>
<script>
import Vue from 'vue';
import VCharts from 'v-charts';
Vue.use(VCharts);

export default{
	data (){
		return {
			isShowTask : false,
			input6 : '',
			grid : {
				containLabel : true,
				top : '10%',
				left : '0%',
				right : '0%',
				bottom : '10%',
			},
			ringGrid : {
				containLabel : true,
				top : '10%',
				left : '0%',
				right : '0%',
				bottom : '10%',
				backgroundColor: '#3c6476',
			},
			title : {
				text : '90%',
				left : '40%',
				top : '40%'
			},
			ringColors : ['#10cbc5','#ddd'],
			lineColors : ['#1DAAFC']
		}
	},
	methods : {
		showCreateTask(){
			this.isShowTask = true;
		},
		hideCreateTask(){
			this.isShowTask = false;
		}
	},
	created() {
	      this.ringData = {
	      	columns: ['state','val'],
	        rows: [
	          {  'state': '成功', 'val': 90 },
	          {  'state': '失败', 'val': 10 },
	        ]
	      }
	      this.ringSettings = {
	        dimension: 'state',
	        metrics: 'val',
	        label : {
	        	normal : {
	        		show : false
	        	}
	        },
	        hoverAnimation : false,
	        // itemStyle : {
	        // 	normal : {
	        // 		show : false
	        // 	},
	        // 	emphasis : {
	        // 		show : false,
	        // 	}
	        // },
	        offsetY : 80,
	        radius : ['80%','90%']
	        // legendLimit : 0
	      }

	  	    this.lineData = {
	  	            columns: ['date', 'val'],
	  	            rows: [
	  	              { 'date': '1', 'val': 13 },
	  	              { 'date': '2', 'val': 83 },
	  	              { 'date': '3', 'val': 153 },
	  	              { 'date': '4', 'val': 223 },
	  	              { 'date': '5', 'val': 283 },
	  	              { 'date': '6', 'val': 302 }
	  	            ]
	  	          }
            this.lineSettings = {
              area : true,
              labelMap : {
              	val : '发送数量'
              }
            }
	    }



	    
}
</script>