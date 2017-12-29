<template>
	<div class="msg-unread">
		<h3 class="c-title">
			<span class="title">未读消息</span>
		</h3>
		<el-tabs type="card" v-model="activeName" @tab-click="handleTabsClick">
		    <el-tab-pane label="全部消息" name="all-news">
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
					
				      width="30">
				      <template slot-scope="scope">
				      	<div class="badge" v-show="!scope.row.isRead"></div>
				      </template>
				    </el-table-column>
				    <el-table-column
				      prop="title"
				      label="标题内容">
				    </el-table-column>
				    <el-table-column
				      prop="date"
				      label="时间"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="type"
				      label="类型"
				      width="220"
				      show-overflow-tooltip>
				    </el-table-column>
				</el-table>
				<div class="c-table-toolbar">
					<div class="btn-group">
						<el-button @click="deleteItems">删除</el-button>
						<el-button @click="read">标记已读</el-button>
						<el-button @click="allRead">全部已读</el-button>
					</div>
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="1000">
					</el-pagination>
				</div>
				
		    </el-tab-pane>
		    <el-tab-pane label="短信平台" name="msg-platform">短信平台</el-tab-pane>
		    <el-tab-pane label="商业选址" name="business-loaction">商业选址</el-tab-pane>
	  </el-tabs>
	</div>
</template>
<script>
export default {
	data () {
		return {
			activeName : 'all-news',
			tableData3: [{
	          title: '48小时云上狂欢节，全线产品折扣，满返优惠同享，击破全年底价-03',
	          date: '2017-11-10',
	          isRead : true,
	          type: '活动消息-优惠活动'
	        }, {
	          title: '48小时云上狂欢节，全线产品折扣，满返优惠同享，击破全年底价-02',
	          date: '2017-11-10',
	          isRead : false,
	          type: '活动消息-优惠活动'
	        }, {
	          title: '48小时云上狂欢节，全线产品折扣，满返优惠同享，击破全年底价-04',
	          date: '2017-11-10',
	          isRead : false,
	          type: '活动消息-优惠活动'
	        }, {
	          title: '独享虚拟主机经济版，独享资源，建站首选！-01',
	          date: '2017-11-10',
	          isRead : false,
	          type: '活动消息-优惠活动'
	        }, {
	          title: '独享虚拟主机经济版，独享资源，建站首选！-08',
	          date: '2017-11-10',
	          isRead : true,
	          type: '活动消息-优惠活动'
	        }, {
	          title: '独享虚拟主机经济版，独享资源，建站首选！-06',
	          date: '2017-11-10',
	          isRead : false,
	          type: '活动消息-域名和网站'
	        }, {
	          title: '独享虚拟主机经济版，独享资源，建站首选！-07',
	          date: '2017-11-10',
	          isRead : false,
	          type: '活动消息-优惠活动'
	        }],
	        multipleSelection: []
		}
	},
	methods : {
		handleTabsClick(tab){
			console.log(tab.name)
		},
		toggleSelection(rows) {
	        if (rows) {
	          rows.forEach(row => {
	            this.$refs.multipleTable.toggleRowSelection(row);
	          });
	        } else {
	          this.$refs.multipleTable.clearSelection();
	        }
	    },
	    handleSelectionChange(val) {
	        this.multipleSelection = val;
	        console.log(this.multipleSelection);
	        
	    },
	    read(){
	    	this.multipleSelection.forEach(item=>{
	    		item.isRead = true;
	    	});
	    },
	    allRead(){
	    	this.tableData3.forEach(item=>{
	    		item.isRead = true;
	    	});
	    },
	    deleteItems(){
	    	this.multipleSelection.forEach(item=>{
	    		this.tableData3.forEach(inner=>{
	    			if(item.title === inner.title){
	    				inner.flag = true;
	    			}
	    			
	    		});
	    	});
	    	this.tableData3 = this.tableData3.filter(item=>item.flag!==true);

	    }
	}
}
</script>