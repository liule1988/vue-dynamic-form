<template>
  <el-form :model="form" :rules="rules" ref="baseForm" label-width="141px">
    <table class="base" style="margin-bottom: 30px">
      <tbody style="display: table-row-group">
      <tr class="base-row">
        <td class="title" colspan="6">基本信息</td>
      </tr>
      <tr class="base-row">
        <th class="label">姓名</th>
        <td class="content">
          <div class="name">张三</div>
        </td>
        <th class="label">身份证号</th>
        <td class="content">
          <div class="id">131231241243143214</div>
        </td>
        <th class="label"></th>
        <td class="content">&nbsp;</td>
      </tr>

      <tr class="base-row">
        <th class="label">车辆品牌</th>
        <td class="content">
          <el-input size="small " class="middle-input" prop="name" v-model="form.productionDate"></el-input>
        </td>
        <th class="label">车俩款式</th>
        <td class="content">
          <el-input size="small " class="middle-input"></el-input>
        </td>
        <th class="label">车辆型号</th>
        <td class="content">
          <el-input size="small " class="middle-input"></el-input>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">车架号码</th>
        <td class="content">
          <el-input size="small " class="middle-input"></el-input>
        </td>
        <th class="label">车牌号码</th>
        <td class="content">
          <el-input size="small " class="middle-input"></el-input>
        </td>
        <th class="label">发动机号码</th>
        <td class="content">
          <el-input size="small " class="middle-input"></el-input>
        </td>
      </tr>

      <tr class="base-row">
        <td colspan="2">
          <tr>
            <th class="label">车架号码核实</th>
            <td class="content">
              <el-radio-group v-model="form.isTrueChejiaNum">
                <el-radio :label="1">已核实</el-radio>
                <el-radio :label="0">未核实</el-radio>
              </el-radio-group>
            </td>
          </tr>

        </td>

        <th class="label">车身颜色</th>
        <td class="content">
          <el-input size="small " class="middle-input"></el-input>
        </td>
        <th class="label">带额度转移</th>
        <td class="content">
          <el-radio-group v-model="form.isLimitTurn">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
          <el-input v-if="form.isLimitTurn==1" size="small" style="width: 100px;display: inline-block"></el-input>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">安全气囊</th>
        <td class="content">
          <el-input size="small " class="small-input"></el-input>
          个
        </td>
        <th class="label">排气量</th>
        <td class="content">
          <el-input size="small" class="small-input"></el-input>
          L
        </td>
        <th class="label">出厂日期</th>
        <td class="content">
          <el-date-picker
            v-model="form.productionDate"
            type="date"
            placeholder="选择日期"
            size="small"
          >
          </el-date-picker>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">底盘升降</th>
        <td class="content">
          <el-radio-group v-model="form.isLimitTurn">
            <el-radio :label="1">有</el-radio>
            <el-radio :label="0">无</el-radio>
          </el-radio-group>
        </td>
        <th class="label">公里数</th>
        <td class="content">
          <el-input size="small" class="middle-input"></el-input>

        </td>
        <th class="label">首次登记日期</th>
        <td class="content">
          <el-date-picker
            v-model="form.firstRegDate"
            type="date"
            placeholder="选择日期"
            size="small"
          >
          </el-date-picker>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">天窗</th>
        <td class="content">
          <el-radio-group v-model="form.isLimitTurn">
            <el-radio :label="0">无</el-radio>
            <el-radio :label="1">单天窗</el-radio>
            <el-radio :label="2">全景天窗</el-radio>
          </el-radio-group>
        </td>
        <th class="label">过户次数</th>
        <td class="content">
          <el-input size="small" class="middle-input"></el-input>

        </td>
        <th class="label">最后一次转移登记日期</th>
        <td class="content">
          <el-date-picker
            v-model="form.lastRegDate"
            type="date"
            placeholder="选择日期"
            size="small"
          >
          </el-date-picker>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">空调</th>
        <td class="content">
          <el-radio-group v-model="form.isLimitTurn">
            <el-radio :label="0">手动</el-radio>
            <el-radio :label="1">自动</el-radio>
            <el-radio :label="2">多温区</el-radio>
          </el-radio-group>
        </td>
        <th class="label">使用性质</th>
        <td class="content">
          <el-input size="small" class="middle-input"></el-input>

        </td>
        <th class="label">新补领日期</th>
        <td class="content">
          <el-date-picker
            v-model="form.newRegDate"
            type="date"
            placeholder="选择日期"
            size="small"
          >
          </el-date-picker>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">屏幕数</th>
        <td class="content">
          <el-input size="small " class="mini-input"></el-input>
          个
        </td>
        <th class="label">交通违规情况</th>
        <td class="content">
          罚款金额
          <el-input size="small" class="mini-input"></el-input>
          元，扣
          <el-input size="small" class="mini-input"></el-input>
          分，合计金额
          <el-input size="small " class="mini-input"></el-input>
          元

        </td>
        <th class="label">交强险有效期</th>
        <td class="content">
          <el-radio-group v-model="form.isLimitTurn">
            <el-radio :label="1">有</el-radio>
            <el-radio :label="0">无</el-radio>
            <el-radio :label="0">后续补交</el-radio>
          </el-radio-group>
          <el-input v-if="form.isLimitTurn==1" size="small" style="width: 100px;display: inline-block"></el-input>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">变速箱</th>
        <td class="content">
          <el-radio-group v-model="form.speedBox">
            <el-radio :label="0">AT</el-radio>
            <el-radio :label="1">MT</el-radio>
            <el-radio :label="2">A/MT</el-radio>
            <el-radio :label="3">CVT</el-radio>
            <el-radio :label="4">DSG</el-radio>
          </el-radio-group>
        </td>
        <th class="label">驱动方式</th>
        <td class="content">
          <el-radio-group v-model="form.speedBox">
            <el-radio :label="2">两驱</el-radio>
            <el-radio :label="4">四驱</el-radio>
          </el-radio-group>
        </td>
        <th class="label">进气方式</th>
        <td class="content">
          <el-select v-model="form.jinqi" placeholder="请选择">
            <el-option
              v-for="item in inAirOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>

      <tr class="base-row">
        <th class="label">座椅</th>
        <td class="content">
          <el-checkbox-group v-model="form.seatsList">
            <el-checkbox label="电动"></el-checkbox>
            <el-checkbox label="加热"></el-checkbox>
            <el-checkbox label="后排通风"></el-checkbox>
          </el-checkbox-group>
        </td>
        <th class="label">方向盘</th>
        <td class="content">
          <el-checkbox-group v-model="form.seatsList">
            <el-checkbox label="无"></el-checkbox>
            <el-checkbox label="多功能"></el-checkbox>
            <el-checkbox label="巡航"></el-checkbox>
            <el-checkbox label="换挡"></el-checkbox>
          </el-checkbox-group>
        </td>
        <th class="label">影音系统</th>
        <td class="content">
          <el-checkbox-group v-model="form.seatsList">
            <el-checkbox label="导航"></el-checkbox>
            <el-checkbox label="后排娱乐"></el-checkbox>
            <el-checkbox label="后改"></el-checkbox>
          </el-checkbox-group>
        </td>
      </tr>
      </tbody>


    </table>

  </el-form>
</template>

<script>
  export default {
    name: 'baseTable',
    data () {
      return {
        form: {
          isTrueChejiaNum: 0,
          isLimitTurn: 0,
          productionDate: '',
          firstRegDate: '',
          lastRegDate: '',
          newRegDate: '',
          speedBox: '',
          jinqi: '',
          seatsList: [],
          inAirOptions: [
            {
              label: '自然进气',
              value: '0'
            },
            {
              label: '涡轮增压',
              value: '1'
            },
          ]
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
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
        },


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #fff;
  }

  .form-item {
    width: 33.333333%;
    float: left;
    /* border: 1px solid #eee; */
    height: 30px;
    line-height: 30px;
  }

  .title {
    background-color: #50bfff;
    color: #fff;
    margin: 10px 0;
    padding: 10px;
    display: table-cell;
    font-size: 16px;
  }

  .label {

    background-color: azure;
    text-align: left;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    width: 141px;
    border: #b8d0d6 1px solid;
    background: #F7F7F7;
    box-sizing: border-box;
    display: table-cell;
    padding-left: 10px;

  }

  .content {
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    border: #D0D5D6 1px solid;
    height: 25px;
    line-height: 25px;
    text-align: left;
    padding: 5px;
  }

  * {
    box-sizing: border-box;
    font-size: 14px;
    font-weight: normal;
  }

  .middle-input {
    width: 200px;
    padding: 0 5px;
  }

  .small-input {
    width: 100px;
    padding: 0 5px;

  }

  .mini-input {
    width: 60px;
    padding: 0 5px;

  }

  td > div {
    padding: 0 5px;

  }
</style>
