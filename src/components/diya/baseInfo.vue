<template>
  <div class="base-info">
    <el-form ref="form" label-width="40%" label-position="left" :model="form" :rules="rules"
             style="min-width: 1086px">
      <div class="row title">基本信息</div>

      <div class="row">
        <el-form-item label="姓名：" class="item" required>
          <div>{{form.name}}</div>
        </el-form-item>
        <el-form-item label="身份证号:" class="item" required>
          <div>{{form.idNum}}</div>
        </el-form-item>
        <el-form-item label=" " class="item null-label" >
          <div></div>
        </el-form-item>
      </div>

      <div class="row">
        <el-form-item label="车俩品牌：" class="item" prop="carBrand" :show-message="false">
          <el-input class="middle-input" size="small" v-model="form.carBrand" :disabled="idDisabled"></el-input>
        </el-form-item>
        <el-form-item label="车俩款式：" class="item" prop="carStyle" :show-message="false">
          <el-input class="middle-input" v-model="form.carStyle" size="small" :disabled="idDisabled"></el-input>
        </el-form-item>
        <el-form-item label="车俩型号：" class="item" prop="carModel" :show-message="false">
          <el-input class="middle-input" v-model="form.carModel" size="small" :disabled="idDisabled"></el-input>
        </el-form-item>
      </div>

      <div class="row">
        <el-form-item label="车架号码：" class="item" prop="carframeNum">
          <el-input class="middle-input" v-model="form.carframeNum" size="small" :disabled="idDisabled"></el-input>
        </el-form-item>

        <el-form-item label="车牌号码：" class="item" prop="plateNum">
          <el-input class="middle-input" v-model="form.plateNum" size="small" :disabled="idDisabled"></el-input>
        </el-form-item>

        <el-form-item label="发动机号码：" class="item" prop="engineNum">
          <el-input class="middle-input" v-model="form.engineNum" size="small" :disabled="idDisabled"></el-input>
        </el-form-item>
      </div>

      <div class="row">
        <el-form-item label="车架号码核实：" class="item" prop="isCarNumber">
          <el-radio-group v-model="form.isCarNumber" size="small" :disabled="idDisabled">
            <el-radio label="01">已核实</el-radio>
            <el-radio label="02">未核实</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出厂日期：" class="item" prop="dateOfProduct">
          <el-date-picker
            v-model="form.dateOfProduct"
            type="date"
            placeholder="年/月/日"
            size="small"
            class="middle-input"
            :disabled="idDisabled"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="车身颜色：" class="item" required>
          <el-input class="middle-input" v-model="form.carColor" size="small" :disabled="idDisabled"></el-input>
        </el-form-item>
      </div>

      <div class="row">
        <el-form-item label="带额度转移：" class="item" prop="isLimitTurn">
          <el-radio-group v-model="form.isLimitTurn" :disabled="idDisabled">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
          <el-form-item v-if="form.isLimitTurn==1" style="display: inline-block" prop="turnLine" :show-message="false">
            <el-input  v-model="form.turnLine" size="small"
                      style="display: inline-block ;width:60px " :disabled="idDisabled" ></el-input>
          </el-form-item>

        </el-form-item>
        <el-form-item label="首次登记日期:" class="item" required>
          <el-date-picker
            v-model="form.dateOfFirst"
            type="date"
            placeholder="年/月/日"
            size="small"
            class="middle-input"
            :disabled="idDisabled"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="排气量：" class="item" required>
          <el-input class="small-input" v-model="form.displacement " size="small" :disabled="idDisabled"></el-input>
          <span style="padding-left: 10px">L</span>
        </el-form-item>

      </div>

      <div class="row row2">
        <el-form-item label="交通违规情况：" class="item" required>
          <div class="item-box">
            <div>
              罚款金额
              <el-input v-model="form.fineAmount" size="small" class="mini-input" :disabled="idDisabled"></el-input>
              元,扣
              <el-input v-model="form.gradeAmount" size="small" class="mini-input" :disabled="idDisabled"></el-input>
              分,
            </div>
            合计金额
            <el-input v-model="form.totalAmount" size="small " class="mini-input" :disabled="idDisabled"></el-input>
            元
          </div>

        </el-form-item>


        <el-form-item label="最后一次转移登记日期：" class="item" required>
          <div class="item-box">
            <el-date-picker
              v-model="form.dateOfLast"
              type="date"
              placeholder="年/月/日"
              size="small"
              class="middle-input"
              :disabled="idDisabled"
            >
            </el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="公里数：" class="item" required>
          <div class="item-box">
            <el-input class="middle-input" v-model="form.kmAmount" size="small" :disabled="idDisabled"></el-input>
          </div>
        </el-form-item>
      </div>

      <div class="row">
        <el-form-item label="进气方式：" class="item" required>
          <el-select v-model="form.inAir" placeholder="请选择" size="small" class="middle-input" :disabled="idDisabled">
            <el-option
              label="自然进气"
              value="01">
            </el-option>
            <el-option
              label="涡轮增压"
              value="02">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="交强险有效期：" class="item" required>
          <el-radio-group v-model="form.timeOfTCI" :disabled="idDisabled">
            <el-radio label="有" value="1"></el-radio>
            <el-radio label="无" value="2"></el-radio>
            <el-radio label="后续补交" value="3"></el-radio>
          </el-radio-group>
          <el-input v-if="form.isLimitTurn==1" size="small" style="width: 100px;display: inline-block" :disabled="idDisabled"></el-input>

        </el-form-item>

        <el-form-item label="过户次数：" class="item" required>
          <el-input class="middle-input" v-model="form.transferNum" size="small" :disabled="idDisabled"></el-input>
        </el-form-item>
      </div>

      <div class="row">
        <el-form-item label="使用性质：" class="item" required>
          <el-select v-model="form.useProp" placeholder="请选择" size="small" class="middle-input" :disabled="idDisabled">
            <el-option
              label="营运"
              value="01">
            </el-option>
            <el-option
              label="非营运"
              value="02">
            </el-option>
            <el-option
              label="营转非"
              value="03">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="新补领日期：" class="item">
          <el-date-picker
            v-model="form.dateOfNew"
            type="date"
            placeholder="年/月/日"
            size="small"
            class="middle-input"
            :disabled="idDisabled"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label=" " class="item null-label">
        </el-form-item>
      </div>


    </el-form>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        form: {

        },
        rules: {
          carBrand: [
            {required: true, message: '必填', trigger: 'blur'},
          ],
          carStyle: [
            {required: true, message: '必填', trigger: 'blur'}
          ],
          carModel: [
            { required: true, message: '必填', trigger: 'blur'}
          ],
          carframeNum:[
            { required: true, message: '必填', trigger: 'blur'},
            {min:17,max:17}
          ],
          plateNum:[
            { required: true, message: '必填', trigger: 'blur'}
          ],
          engineNum:[
            { required: true, message: '必填', trigger: 'blur'}
          ],
          isCarNumber:[
            { required: true, message: '必选', trigger: 'blur'}
          ],
          isLimitTurn:[
            { required: true, message: '必选', trigger: 'blur'}
          ],
          turnLine:[
            { required: true, message: '必选', trigger: 'blur'}
          ],
          dateOfProduct: [
            {required: true, message: '必填', trigger: 'blur'},
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
      }
    },
    props: {idDisabled:{
        type:Boolean
    },
    data:{
        type:Object
    }},
    created(){
        this.form=this.data
    },

    methods: {
      test(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$emit('validate', this.form, true, 'baseInfo');

          } else {
            console.log('error submit!!');
            this.$emit('validate', this.form, false, 'baseInfo');

            return false;

          }
        });
      }
    }
  }
</script>


<style>
  .item >.el-form-item__label {
    text-align: left;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
    border: 1px solid #95b8e7;
    border-collapse: collapse;
    background-color: #e5f4ff;
    /*background-color: #f3f3f9;*/
    border-bottom: 0;
    border-left: 0;
    height: 100%;
  }

  .null-label .el-form-item__label{
    height: 37px;
  }
  .item >.el-form-item__content {
    line-height: 37px;
    position: relative;
    font-size: 14px;
    box-sizing: border-box;
    border: 1px solid #95b8e7;
    border-left: 0;
    border-bottom: 0;
    overflow: hidden;
    height: 37px
  }

  .item:nth-child(1) > label {
    border-left: 1px solid #95b8e7;
  }

  .row:nth-last-child(1) {
    border-bottom: 1px solid #95b8e7;
  }

  .row2 .el-form-item__label {
    padding-top: 30px;
  }

  .row2 .item .el-form-item__content {
    height: 100%;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }

  .title {
    background-color: #6699cc;
    color: #fff;
    padding: 10px;
  }

  .base-info {
    margin: 30px 0;
  }

  .item {
    display: inline-block;
    width: 33.333333%;
    float: left;
    height: 100%;
  }

  .item-box {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%)
  }

  .row:after {
    content: '';
    clear: both;
    display: table;
  }

  .row:before {
    display: table;
    content: '';
  }

  .small-input {
    width: 100px;
  }

  .middle-input {
    width: 160px;
  }

  .mini-input {
    width: 40px;
  }

  .row2 {
    height: 74px;
  }

</style>
