<template>
	<div class="account-overview">
		<h3 class="c-title">
			<span class="title">账户总览</span>
			
		</h3>
		<div class="c-msg-tip">
			<i class="el-icon-warning"></i>
			<h5 class="msg-text">系统提示：这是一条系统提示消息</h5>
		</div>

		<el-card>
			<el-row :gutter="60">
				<el-col :span="10">
					<div class="account-avatar-wrap">
						<img src="../assets/img/avatar.jpg" class="avatar" />
						<div class="desc-box">
							<h3 class="username">李大牛</h3>
							<div class="sign-box">
								<el-button class="householder-btn" size="mini"><i class="icon-householder"></i>户主</el-button>
								<i class="icon-phone"></i>
								<i class="icon-email"></i>
								<el-button type="text" size="mini">政府单位</el-button>
								<i class="el-icon-edit-outline"></i>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="7" class="both-border">
					<div class="balance-info">
						<div class="balance-title-box">
							<span class="balance-title">可用余额(元)</span>
							<i class="icon-remind"></i>
							<span>提醒</span>
						</div>
						<div class="cash-box">
							<span class="cash">233,68</span>
							<el-button type="primary" round size="small">充值</el-button>
						</div>
					</div>
				</el-col>
				<el-col :span="7">
					<div class="balance-info">
						<div class="balance-title-box">
							<span class="balance-title">消费金额(元)</span>
						</div>
						<div class="cash-box">
							<span class="cash">233,68</span>
							<el-button type="primary" round size="small">开票</el-button>
						</div>
					</div>
				</el-col>
			</el-row>
		</el-card>

		<el-row :gutter="15">
			<el-col :span="14">
				<el-card>
					<div slot="header" class="card-head">
					    <h5 class="title">消费情况</h5>
					    <span class="subtitle">月均消费：230元</span>
					</div>
					<h5 class="line-title">个人近7个月月均消费趋势图</h5>
					<ve-line :colors="lineColors" :grid="grid" height="240px" :legend-visible="false" :data="lineData" :settings="lineSettings"></ve-line>
				</el-card>

			</el-col>
			<el-col :span="10">
				<el-card class="card-padding">
					<div slot="header" class="card-head">
					    <h5 class="title">消费明细</h5>
					</div>
					<el-table
				      :data="tableData"
				      style="width: 100%">
				      <el-table-column
				        prop="date"
				        label="时间"
				        width="140">
				      </el-table-column>
				      <el-table-column
				        prop="name"
				        label="产品名">
				      </el-table-column>
				      <el-table-column
				        prop="cash"
				        width="140"
				        label="金额">
				      </el-table-column>
				    </el-table>
				    <el-button type="text">更多<i class="el-icon-d-arrow-right el-icon--right"></i></el-button>
				</el-card>
			</el-col>
		</el-row>

		<el-card class="card-padding">
			<div slot="header" class="card-head">
			    <h5 class="title">登录历史
			    	<span class="tip">（以下最近的登录记录，若有异常，请尽快</span>
			    	<el-button size="mini" type="text">修改密码</el-button>
			    	<span class="tip">）</span>
			    </h5>
			</div>
			<el-table
		      :data="historyData"
		      style="width: 100%">
		      <el-table-column
		        prop="date"
		        label="时间"
		        width="140">
		      </el-table-column>
		      <el-table-column
		        prop="ip"
		        width="140"
		        label="IP">
		      </el-table-column>
		      <el-table-column
		        prop="address"
		        label="地区">
		      </el-table-column>
		      <el-table-column
		        prop="browser"
		        width="140"
		        label="浏览器">
		      </el-table-column>
		     
		    </el-table>
		</el-card>
	</div>
</template>
<script>
import Vue from 'vue';
import VCharts from 'v-charts';
Vue.use(VCharts);
export default {
	data(){
		return {
			grid : {
				containLabel : true,
				top : '10%',
				left : '0%',
				right : '0%',
				bottom : '10%'
			},
			tableData: [{
	            date: '2016-05-02 12:30',
	            name: '短信发送',
	            cash: '23,565'
	          }, {
	            date: '2016-05-04 12:30',
	            name: '短信发送',
	            cash: '2,356'
	          }, {
	            date: '2016-05-01 12:30',
	            name: '短信发送',
	            cash: '2,356'
	          }, {
	            date: '2016-05-03 12:30',
	            name: '短信发送',
	            cash: '2,356'
	          }],
	        historyData : [{
	        	date: '2016-05-02 12:30',
	        	ip : '192.168.0.1',
	        	browser : 'chrome',
	        	address : '广东省广州市'
	        },{
	        	date: '2016-05-02 12:30',
	        	ip : '192.168.0.1',
	        	browser : 'chrome',
	        	address : '广东省广州市'
	        },{
	        	date: '2016-05-02 12:30',
	        	ip : '192.168.0.1',
	        	browser : 'chrome',
	        	address : '广东省广州市'
	        },],
	        lineColors : ['#0FD1E3']  
		}
	},
	created(){
  	    this.lineData = {
  	            columns: ['month', '消费'],
  	            rows: [
  	              { 'month': '1月', '消费': 13 },
  	              { 'month': '2月', '消费': 123 },
  	              { 'month': '3月', '消费': 153 },
  	              { 'month': '4月', '消费': 223 },
  	              { 'month': '5月', '消费': 283 },
  	              { 'month': '6月', '消费': 302 }
  	            ]
  	          }
        this.lineSettings = {
          // xAxisType: 'value',
          area: true
        }
	}
}
</script>