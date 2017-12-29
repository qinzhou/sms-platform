<template>
	<div class="msg-receive">
		<h3 class="c-title">
			<span class="title">接收管理</span>
			<el-button size="mini">接收人管理</el-button>
		</h3>
			<el-tabs type="card" v-model="activeName" @tab-click="handleTabsClick">
			    <el-tab-pane label="短信平台" name="msg-platform">
					<el-table
					    ref="multipleTable"
					    :data="tableData3"
					    tooltip-effect="dark"
					    style="width: 100%"
					    @selection-change="handleSelectionChange">
					    <el-table-column
					      type="selection"
					      width="30">
					    </el-table-column>
					    <el-table-column
					      prop="type"
					       width="120"
					      label="消息类型">
					    </el-table-column>
					    <el-table-column
					      label="站内信"
					      width="120">
					      <template slot-scope="scope">
					      	<el-checkbox v-model="scope.row.mail"></el-checkbox>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="邮箱"
					      width="120">
					      <template slot-scope="scope">
					      	<el-checkbox v-model="scope.row.email"></el-checkbox>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="短信"
					      width="120">
					      <template slot-scope="scope">
					      	<el-checkbox v-model="scope.row.sms"></el-checkbox>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="接收人">
					      <template slot-scope="scope">
					      	<span>{{scope.row.sendee}}</span>
					      	<i class="el-icon-edit-outline" @click="dialogTableVisible = true"></i>
					      </template>
					    </el-table-column>
					</el-table>
					<div class="c-table-toolbar">
						<div class="btn-group">
							<el-button>统一设置</el-button>
						</div>
					</div>
					
			    </el-tab-pane>
			    <el-tab-pane label="商业选址" name="business-loaction">商业选址</el-tab-pane>
		  </el-tabs>

		  <el-dialog width="800px" title="修改消息接收人" :visible.sync="dialogTableVisible">
		    <el-table :data="gridData">
		    <el-table-column type="selection"  width="30"></el-table-column>
		      <el-table-column property="name" label="姓名" width="80"></el-table-column>
		      <el-table-column property="email" label="邮箱"></el-table-column>
		      <el-table-column property="phone" label="手机" width="200"></el-table-column>
		      <el-table-column property="job" label="职位" width="100"></el-table-column>
		      <el-table-column property="operation" label="操作" width="100"></el-table-column>
		    </el-table>
		    <ul class="new-list">
		    	<li class="new-item" v-for="i in itemNum">
		    		<el-input
		    		    size="small"
		    		    placeholder="请输入姓名">
		    		</el-input>
		    		<el-input
		    		    size="small"
		    		    placeholder="请输入邮箱">
		    		</el-input>
		    		<el-input
		    		    size="small"
		    		    placeholder="请输入手机">
		    		</el-input>
		    		<el-input
		    		    size="small"
		    		    placeholder="请输入职位">
		    		</el-input>
		    		<!-- <el-button type="text">确定</el-button>
		    		<el-button type="text">取消</el-button> -->
		    	</li>
		    </ul>
		    <el-button size="small" icon="el-icon-plus" class="add-btn" @click="createItem">新增</el-button>
		    <div slot="footer" class="dialog-footer">
		    	<el-button type="primary" @click="dialogTableVisible = false">保存</el-button>
			  <el-button @click="dialogTableVisible = false">取消</el-button>
			</div>
		  </el-dialog>
	</div>
</template>
<script>
export default {
	data () {
		return {
			activeName : 'msg-platform',
			tableData3: [{
	          mail: true,
	          email : true,
	          sms : true,
	          sendee : '李大牛，陈三',
	          type: '发送成功'
	        }, {
	          mail: true,
	          email : true,
	          sms : true,
	          sendee : '李大牛，陈三',
	          type: '发送成功'
	        }, {
	          mail: true,
	          email : true,
	          sms : false,
	          sendee : '李大牛，陈三',
	          type: '发送成功'
	        }, {
	          mail: false,
	          email : true,
	          sms : true,
	          sendee : '李大牛，陈三',
	          type: '发送失败'
	        }, {
	          mail: true,
	          email : true,
	          sms : true,
	          sendee : '李大牛，陈三',
	          type: '发送成功'
	        }, {
	          mail: true,
	          email : false,
	          sms : true,
	          sendee : '李大牛，陈三',
	          type: '发送异常'
	        }, {
	          mail: true,
	          email : false,
	          sms : true,
	          sendee : '李大牛，陈三',
	          type: '发送成功'
	        }],
	        multipleSelection: [],
	        dialogTableVisible : false,
	        gridData: [{
              email: '2018@qq.com',
              phone : '13752085264',
              job : '新手',
              name: '王小虎',
              operation : '操作'
            }, {
              email: '2018@qq.com',
              phone : '13752085264',
              job : '新手',
              name: '王小虎',
              operation : '操作'
            }, {
              email: '2018@qq.com',
              phone : '13752085264',
              job : '新手',
              name: '王小虎',
              operation : '操作'
            }, {
              email: '2018@qq.com',
              phone : '13752085264',
              job : '新手',
              name: '王小虎',
              operation : '操作'
            }],
            itemNum : 1
		}
	},
	methods : {
		handleTabsClick(tab){
			console.log(tab.name)
		},
		handleSelectionChange(val) {
		    this.multipleSelection = val;
		    console.log(this.multipleSelection);
		    
		},
		createItem(){
			this.itemNum = this.itemNum + 1;
		}
	}
}
</script>