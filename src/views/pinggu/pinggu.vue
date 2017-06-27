<template>
  <div class="pinggu" style="min-width: 1086px;margin: 0 auto">
    <div class="btn-group">
      <el-button size="small" icon="upload">上传图片</el-button>
      <el-button size="small" icon="view">查看图片</el-button>
      <el-button size="small">暂存</el-button>
      <el-button size="small" @click.native="sub">通过</el-button>
      <el-button size="small">返回</el-button>
    </div>
    <baseTable class="table-margin" ref="baseInfo" @validate="validForm" :idDisabled="false" :data="form"> </baseTable>
    <damageTable class="table-margin"></damageTable>
    <!--<detectTable class="table-margin"></detectTable>-->
    <!--<xTable ref="test" @validate="validForm"></xTable>-->
  </div>
</template>

<script>
  import baseTable from '../../components/diya/baseInfo.vue'
  import damageTable from '../../components/diya/Xdamage.vue'
  import detectTable from '../../components/diya/detect.vue'
  import xTable from '../../components/diya/test.vue'

  export default {
    name: 'pinggu',
    data () {
      return {
        form: {
          name: '张三',
          idNum: '312312312421321432',
          carBrand: '',
          carStyle: '',
          carModel: '',
          carframeNum: '',
          plateNum: '',
          engineNUm: '',
          isCarNumber: '',
          dateOfProduct: '年-月-日',
          carColor: '',
          isLimitTurn: '',
          turnLine: '',
          dateOfFirst: '',
          displacement: '',
          fineAmount: '',
          gradeAmount: '',
          totalAmount: '',
          dateOfLast: '',
          kmAmount: '',
          inAir: '',
          timeOfTCI: '2',
          transferNum: '',
          useProp: '02',
          dateOfNew: ''
        },
        baseInfo:false,
        testInfo:false,
      }
    },
    components: {
      baseTable,
      damageTable,
      detectTable,
      xTable
    },
    methods: {
      sub(){
        this.$refs.baseInfo.test();
        this.$refs.test.submitForm();
        if (this.baseInfo&&this.testInfo){
            alert("通过，提交")
        }else {
            console.log(this.baseInfo+'  '+this.testInfo)
            return false
        }

      },
      validForm(childForm,isV,formName){
          if (isV){
            let obj = Object.assign(this.form, childForm);
            this.form = obj;
            this[formName]=true;
            console.log(formName+'  :'+this[formName])
            console.log(JSON.stringify(this.form))
          }else {
            this[formName]=false;
          }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn-group {
    text-align: right;
    background-color: #EFF2F7;
    padding: 5px 50px;
  }

  .table-margin {
    margin-bottom: 30px;
  }


</style>
