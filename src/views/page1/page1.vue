<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="标题" v-model="listQuery.title">
      </el-input>

      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="作者(工号)" v-model="listQuery.gonghaoid">
      </el-input>


      <el-button class="filter-item" type="primary" v-waves icon="search" @click="handleFilter">查询</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" @click="handleReset" type="primary" icon="setting">重置</el-button>

    </div>

    <el-table  :key='tableKey' :data="list"  v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

      <el-table-column width="100px" align="center" label="ID">
        <template scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="分类编号" width="100px">
        <template scope="scope">
          <span>{{scope.row.tgroupId}}</span>
        </template>
      </el-table-column>



      <el-table-column min-width="100px" label="标题">
        <template scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.title}}</span>
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="发布状态">
        <template scope="scope">
          <span>{{scope.row.delFlag	}}</span>
        </template>
      </el-table-column>

      <el-table-column width="110px" v-if='showAuditor' align="center" label="创建时间">
        <template scope="scope">
          <span style='color:red;'>{{scope.row.createDate}}</span>
        </template>
      </el-table-column>


      <el-table-column width="110px" align="center" label="修改时间">
        <template scope="scope">
          <span style='color:red;'>{{scope.row.lastUptDate}}</span>

        </template>
      </el-table-column>

      <el-table-column class-name="status-col"  align="center" label="转发状态" width="120">
        <template scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.forwardFlag	}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="来源大区">
        <template scope="scope">
          <span style='color:red;'>{{scope.row.psnumberName}}</span>

        </template>
      </el-table-column>
      <el-table-column width="110px" align="center" label="作者(工号)">
        <template scope="scope">
          <span style='color:red;'>{{scope.row.auther}}</span>

        </template>
      </el-table-column>

      <!--<el-table-column  align="center" label="操作" width="150">-->
        <!--<template scope="scope">-->
          <!--<el-button v-if="scope.row.status!='published'" size="small" type="success" @click="handleModifyStatus(scope.row,'published')">发布-->
          <!--</el-button>-->
          <!--<el-button v-if="scope.row.status!='draft'" size="small" @click="handleModifyStatus(scope.row,'draft')">草稿-->
          <!--</el-button>-->
          <!--<el-button v-if="scope.row.status!='deleted'" size="small" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除-->
          <!--</el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->

    </el-table>

    <div v-show="!listLoading"  class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]"
                     :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>



  </div>
</template>

<script>
import api from '../../api/index'
import '../../commen/test1'
  const calendarTypeOptions = [
    { key: 'FD', display_name: '经济数据' },
    { key: 'FE', display_name: '财经大事' },
    { key: 'BI', display_name: '国债发行' },
    { key: 'VN', display_name: '假期报告' }
  ];

  // arr to obj
  const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name;
    return acc
  }, {});

  export default {
    name: 'table_demo',
    data() {
      return {
        list: [{
          tgroupId: '001',
          tgroupName		: '特别企划',
          title			: '征信规则新改版',
          delFlag:'转发',
          createDate:'20160701',
          lastUptDate:'20160701',
          forwardFlag:'萨达',
          psnumberName:'大区1',
          auther:'李华'
        },
          {
            tgroupId: '001',
            tgroupName		: '特别企划',
            title			: '征信规则新改版',
            delFlag:'转发',
            createDate:'20160701',
            lastUptDate:'20160701',
            forwardFlag:'萨达',
            psnumberName:'大区1',
            auther:'李华'
          },
          {
            tgroupId: '001',
            tgroupName		: '特别企划',
            title			: '征信规则新改版',
            delFlag:'转发',
            createDate:'20160701',
            lastUptDate:'20160701',
            forwardFlag:'萨达',
            psnumberName:'大区1',
            auther:'李华'
          },
          {
            tgroupId: '001',
            tgroupName		: '特别企划',
            title			: '征信规则新改版',
            delFlag:'转发',
            createDate:'20160701',
            lastUptDate:'20160701',
            forwardFlag:'萨达',
            psnumberName:'大区1',
            auther:'李华'
          },
          {
            tgroupId: '001',
            tgroupName		: '特别企划',
            title			: '征信规则新改版',
            delFlag:'转发',
            createDate:'20160701',
            lastUptDate:'20160701',
            forwardFlag:'萨达',
            psnumberName:'大区1',
            auther:'李华'
          },],
        total: null,
        listLoading: false,
        listQuery: {
          page: 1,
          rows: 20,

        },
        temp: {
          id: undefined,
          importance: 0,
          remark: '',
          timestamp: 0,
          title: '',
          type: '',
          status: 'published'
        },
        importanceOptions: [1, 2, 3],
        calendarTypeOptions,
        sortOptions: [{ label: '按ID升序列', key: '+id' }, { label: '按ID降序', key: '-id' }],
        statusOptions: ['published', 'draft', 'deleted'],
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: '编辑',
          create: '创建'
        },
        dialogPvVisible: false,
        pvData: [],
        showAuditor: false,
        tableKey: 0
      }
    },
    created() {
//      this.getList();
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        };
        return statusMap[status]
      },
      typeFilter(type) {
        return calendarTypeKeyValue[type]
      }
    },

    methods:{
        getList(){
          api.getTmpLists(this.listQuery).then((response) => {
            this.list = response.data.rows;
            this.listLoading = false;
            this.total= response.data.total;
            console.log(response.data)
          })
            .catch((response) => {
              console.log(response);
            });
        },

      handleFilter() {
        this.getList();
      },
    handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
    }
//    methods: {
//      getList() {
//        this.listLoading = true;
//        fetchList(this.listQuery).then(response => {
//          this.list = response.data.items;
//          this.total = response.data.total;
//          this.listLoading = false;
//        })
//      },
//

//      timeFilter(time) {
//        if (!time[0]) {
//          this.listQuery.start = undefined;
//          this.listQuery.end = undefined;
//          return;
//        }
//        this.listQuery.start = parseInt(+time[0] / 1000);
//        this.listQuery.end = parseInt((+time[1] + 3600 * 1000 * 24) / 1000);
//      },
//      handleModifyStatus(row, status) {
//        this.$message({
//          message: '操作成功',
//          type: 'success'
//        });
//        row.status = status;
//      },
//      handleCreate() {
//        this.resetTemp();
//        this.dialogStatus = 'create';
//        this.dialogFormVisible = true;
//      },
//      handleUpdate(row) {
//        this.temp = Object.assign({}, row);
//        this.dialogStatus = 'update';
//        this.dialogFormVisible = true;
//      },
//      handleDelete(row) {
//        this.$notify({
//          title: '成功',
//          message: '删除成功',
//          type: 'success',
//          duration: 2000
//        });
//        const index = this.list.indexOf(row);
//        this.list.splice(index, 1);
//      },
//      create() {
//        this.temp.id = parseInt(Math.random() * 100) + 1024;
//        this.temp.timestamp = +new Date();
//        this.temp.author = '原创作者';
//        this.list.unshift(this.temp);
//        this.dialogFormVisible = false;
//        this.$notify({
//          title: '成功',
//          message: '创建成功',
//          type: 'success',
//          duration: 2000
//        });
//      },
//      update() {
//        this.temp.timestamp = +this.temp.timestamp;
//        for (const v of this.list) {
//          if (v.id === this.temp.id) {
//            const index = this.list.indexOf(v);
//            this.list.splice(index, 1, this.temp);
//            break;
//          }
//        }
//        this.dialogFormVisible = false;
//        this.$notify({
//          title: '成功',
//          message: '更新成功',
//          type: 'success',
//          duration: 2000
//        });
//      },
//      resetTemp() {
//        this.temp = {
//          id: undefined,
//          importance: 0,
//          remark: '',
//          timestamp: 0,
//          title: '',
//          status: 'published',
//          type: ''
//        };
//      },
//      handleFetchPv(pv) {
//        fetchPv(pv).then(response => {
//          this.pvData = response.data.pvData;
//          this.dialogPvVisible = true;
//        })
//      },
//      handleDownload() {
//        require.ensure([], () => {
//          const { export_json_to_excel } = require('vendor/Export2Excel');
//          const tHeader = ['时间', '地区', '类型', '标题', '重要性'];
//          const filterVal = ['timestamp', 'province', 'type', 'title', 'importance'];
//          const data = this.formatJson(filterVal, this.list);
//          export_json_to_excel(tHeader, data, 'table数据');
//        })
//      },
//      formatJson(filterVal, jsonData) {
//        return jsonData.map(v => filterVal.map(j => {
//          if (j === 'timestamp') {
//            return parseTime(v[j])
//          } else {
//            return v[j]
//          }
//        }))
//      }
//    }
  }
</script>

<style>

  .app-container {
    padding: 20px;
  }
  .components-container {
    margin: 30px 50px;
    position: relative;
  }
  .pagination-container {
    margin-top: 30px;
  }

  .filter-container {
    padding-bottom: 10px;

  }

  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
  }
</style>
