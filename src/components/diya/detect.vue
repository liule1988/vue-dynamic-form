<template>
  <table class="base" style="margin-bottom: 30px">
    <tbody style="display: table-row-group">
    <tr>
      <td class="title" colspan="4">工况检测</td>
    </tr>

    <tr>
      <th class="label">
        启动性能：<span style="color:red">*</span>
      </th>
      <td class="content">
        <el-radio-group v-model="form.startPerformance">
          <el-radio :label="1">正常</el-radio>
          <el-radio :label="2">延时</el-radio>
          <el-radio :label="3">异响</el-radio>
          <el-radio :label="4">未能启动</el-radio>
        </el-radio-group>
      </td>
      <th class="label">
        尾气排放：<span style="color:red">*</span>
      </th>
      <td class="content">
        <el-radio-group v-model="form.startPerformance">
          <el-radio :label="1">正常</el-radio>
          <el-radio :label="2">异常</el-radio>
          <el-radio :label="3">蓝烟</el-radio>
        </el-radio-group>
      </td>
    </tr>

    <tr>
      <th class="label">
        助力转向性能：<span style="color:red">*</span>
      </th>
      <td class="content">
        <el-radio-group v-model="form.startPerformance">
          <el-radio :label="1">正常</el-radio>
          <el-radio :label="2">渗油</el-radio>
          <el-radio :label="3">异响</el-radio>
          <el-radio :label="4">失效</el-radio>
        </el-radio-group>
      </td>
      <th class="label">
        变速箱：<span style="color:red">*</span>
      </th>
      <td class="content">
        <el-radio-group v-model="form.startPerformance">
          <el-radio :label="1">正常</el-radio>
          <el-radio :label="2">有卡滞</el-radio>
          <el-radio :label="3">有异响</el-radio>
          <el-radio :label="3">掉档</el-radio>
          <el-radio :label="3">创档</el-radio>
        </el-radio-group>
      </td>
    </tr>

    <tr>
      <th class="label">
        车况评级：<span style="color:red">*</span>
      </th>
      <td class="content" colspan="1" >
        <p class="control">
          <el-input class="small-input" size="small"  v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="myEmail"></el-input>
          <span v-show="errors.has('myEmail')" class="help is-danger">{{ errors.first('myEmail')}}</span>

        </p>

      </td>
      <td class="content" colspan="2">
        <div style="margin-bottom: 5px">
          <el-select v-model="value" placeholder="请选择历史车况" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <el-select v-model="value" placeholder="请选择车辆现状" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </td>
    </tr>

    <tr>
      <th class="label">
        整体描述：<span style="color:red">*</span>
      </th>
      <td class="content" colspan="3">
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea2"
        style="width: 800px">
        </el-input>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        form: {
          startPerformance: ''
        }
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
    width: 180px;
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
    padding: 0;
    margin: 0;
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

  /*.row div {*/
  /*display: inline-block;*/
  /*}*/

  /*th, td {*/
  /*border: #b8d0d6 1px solid;*/

  /*}*/
  .tableForm {

    width: 90%;
    border: #b8d0d6 1px solid;
    margin: 0 auto;
    border-collapse: collapse;
  }
</style>
