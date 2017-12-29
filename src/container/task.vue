<template>
	<div class="task">
		<h3 class="c-title">任务管理</h3>
		<div class="task-action-bar">
			<el-button-group>
				<el-button size="medium">执行中<span class="badges">44</span></el-button>
				<el-button size="medium">审核中<span class="badges">2</span></el-button>
				<el-button size="medium">异常</el-button>
				<el-button size="medium">结束</el-button>
			</el-button-group>
			<div class="search-group">
				<el-input
					  placeholder="请输入标题"
					  v-model="search"
					  size="medium"
					  clearable>
				</el-input>
				<el-button size="medium" type="primary" icon="el-icon-search">搜索</el-button>
			</div>
			<el-button plain size="medium" class="task-btn">发起任务</el-button>
		</div>

		<div class="table-wrap">
			
			<el-table
		    :data="tableData4"
		    style="width: 100%"
		    ref="multipleTable"
		    @selection-change="handleSelectionChange"
		    >
		    <el-table-column
		      fixed = "left"
		      label="全选"
			  type="selection"
			  width="55">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="任务名称"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="type"
		      label="任务类型"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="time"
		      label="创建时间"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="number"
		      label="用户量"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      label="操作"
		      width="260">
		      <template slot-scope="scope">
		        <el-button
		          class="toggle-btn"
		          @click.native.prevent="deleteRow(scope.$index, tableData4)"
		          type="text"
		          size="small">
		          删除
		        </el-button>
		        <el-button
		          class="toggle-btn"
		          type="text"
		          size="small">
		          创建副本
		        </el-button>
		        <el-button
		          class="toggle-btn"
		          type="text"
		          size="small">
		          分享
		        </el-button>
		        <el-button
		          class="toggle-btn"
		          type="text"
		          size="small">
		          运行
		          <i class="el-icon-caret-right"></i>
		        </el-button>
		        <el-button
		          type="text"
		          size="small">
		          查看
		        </el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		</div>	
		<el-pagination
		  background
		  layout="prev, pager, next"
		  @size-change = "sizeChange"
		  @current-change = "currentChange" 
		  :page-size = "10"
		  :total="1000">
		</el-pagination>

	</div>
</template>
<script>

export default{
    data() {
      return {
      	search : '',
        tableData4: [{
          name: '应用商城事业部/ 平台室 ',
          type: '平台室',
          time: '2017-12-20',
          number: '2345',
         
        }, {
          name: '应用商城事业部/ 平台室 ',
          type: '平台室',
          time: '2017-12-20',
          number: '2345',
         
        }, {
          name: '应用商城事业部/ 平台室 ',
          type: '平台室',
          time: '2017-12-20',
          number: '2345',
         
        }, {
          name: '应用商城事业部/ 平台室 ',
          type: '平台室',
          time: '2017-12-20',
          number: '2345',
         
        }, {
          name: '应用商城事业部/ 平台室 ',
          type: '平台室',
          time: '2017-12-20',
          number: '2345',
         
        }, {
          name: '应用商城事业部/ 平台室 ',
          type: '平台室',
          time: '2017-12-20',
          number: '2345',
         
        }, {
          name: '应用商城事业部/ 平台室 ',
          type: '平台室',
          time: '2017-12-20',
          number: '2345',
         
        }],
      }
    },
    methods: {
        deleteRow(index, rows) {
        	rows.splice(index, 1);
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
	    },
	    sizeChange(size){
	    	console.log(size)
	    },
	    currentChange(currentPage){
	    	console.log(currentPage)
	    },


    },
}
</script>