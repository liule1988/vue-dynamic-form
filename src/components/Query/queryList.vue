<template>
      <div class="filter-container" >

        <div v-for="item in queryList" class="filter-item">
          <el-input v-if="item.type=='text'" @keyup.enter.native="handleFilter" style="width: 200px;"  placeholder="标题" v-model="listQuery.title">
          </el-input>
          <el-select v-if="item.type=='select'" v-model="selectValue" >
            <el-option
              v-for="i in item.options"
              :key="i.value"
              :label="i.label"
              :value="i.value">
            </el-option>
          </el-select>
        </div>

        <!--<el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="标题" v-model="listQuery.title">-->
        <!--</el-input>-->

        <!--<el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="作者(工号)" v-model="listQuery.gonghaoid">-->
        <!--</el-input>-->


        <el-button class="filter-item" type="primary"  icon="search" @click="handleFilter">查询</el-button>
        <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="setting">重置</el-button>

      </div>
</template>

<script>
    export default {
        name: 'query',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
               listQuery:{
                    tilte:''
               },
              selectValue:''
            }
        },
      props:{
            queryList:{
                type:Array
            },
            listData:{
                type:Array
            }
      },
      methods:{
        handleFilter(){

              this.$emit('handleQuery', this.listQuery);
            }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .filter-container {
    padding-bottom: 10px;

  }

  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>
