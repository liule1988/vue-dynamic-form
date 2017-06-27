<template>
    <div class="hello">
      <t-query  :queryList="queryList" @handleQuery="parentHandleQuery"></t-query>
      <t-list :listData="listData" :listTypes="listTypes"></t-list>
      <!--<div v-for="item in listTypes">-->
        <!--<div v-if="item.type=='title'">哈哈</div>-->
        <!--<div v-else-if="item.type=='auther'">呵呵</div>-->
      <!--</div>-->
    </div>
</template>

<script>
  import t_list from '../../components/List/list.vue';
  import t_query from '../../components/Query/queryList.vue'
    export default {
        name: 'page2',
        data () {
            return {
                listData:[{
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
                    tgroupId: '002',
                    tgroupName		: '特别企划',
                    title			: '测试标题2',
                    delFlag:'转发',
                    createDate:'20160701',
                    lastUptDate:'20160701',
                    forwardFlag:'萨达',
                    psnumberName:'大区1',
                    auther:'李华'
                  },
                  {
                    tgroupId: '003',
                    tgroupName		: '特别企划',
                    title			: '测试标题3',
                    delFlag:'转发',
                    createDate:'20160701',
                    lastUptDate:'20160701',
                    forwardFlag:'萨达',
                    psnumberName:'大区1',
                    auther:'李华'
                  },
                  {
                    tgroupId: '004',
                    tgroupName		: '特别企划',
                    title			: '测试标题4',
                    delFlag:'转发',
                    createDate:'20160701',
                    lastUptDate:'20160701',
                    forwardFlag:'萨达',
                    psnumberName:'大区1',
                    auther:'李华'
                  },
                  {
                    tgroupId: '005',
                    tgroupName		: '特别企划',
                    title			: '测试标题5',
                    delFlag:'转发',
                    createDate:'20160701',
                    lastUptDate:'20160701',
                    forwardFlag:'萨达',
                    psnumberName:'大区1',
                    auther:'李华'
                  },],
              listTypes:[{
                    typeName:'标题',
                    type:'title'
              },
                {
                    typeName:'ID',
                    type:'tgroupId'

                }, {
                  typeName:'作者',
                  type:'auther'

                }, {
                  typeName:'大区',
                  type:'psnumberName'

                },],

              queryList:[{
                    type:'text',
                    placeholder:'标题'
              },{
                type:'select',
                placeholder:'城市',
                options:[{
                  value: 'Beijing',
                  label: '北京'
                }, {
                  value: 'Shanghai',
                  label: '上海'
                }, {
                  value: 'Nanjing',
                  label: '南京'
                }, {
                  value: 'Chengdu',
                  label: '成都'
                }]
              }]

            }
        },
      components:{
            't-list':t_list,
            't-query':t_query
      },
      methods:{
        parentHandleQuery(props){
                console.log(props)
              this.listData=[]
            }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
