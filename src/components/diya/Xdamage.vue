<template>
  <el-form ref="xdform" :model="form" :rules="rules"
           style="min-width: 1086px">
    <table class="tableForm" style="width: 100%;margin-bottom: 30px
">
      <tbody>
      <tr>
        <td class="title" colspan="8">
          <div align="left">
            显性损伤
          </div>
        </td>
      </tr>
      <tr>
        <th rowspan="11" class="label">
          外观：
        </th>
        <td colspan="3" rowspan="10" class="content">
          <table class="tableForm" style="border: none;" width="100%">
            <tbody>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                <input name="out_top1" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_top2" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td colspan="2" rowspan="8" style="border-bottom: none;">
                <img src="pinggu_files/ct1.jpg" height="240">
              </td>
              <td style="border-bottom: none;">
                <input name="out_right1" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="out_left1" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_right2" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="out_left2" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_right3" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="out_left3" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_right4" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="out_left4" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_right5" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="out_left5" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_right6" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="out_left6" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_right7" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                <input name="out_right8" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                <input name="out_bottom1" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="out_bottom2" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            </tbody>
          </table>
        </td>
        <td colspan="3" rowspan="10">
          <table class="tableForm" style="border: none;" width="100%">
            <tbody>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                <input name="in_top1" size="8" maxlength="12" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="in_top2" size="8" maxlength="12" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="in_top3" size="8" maxlength="12" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td colspan="3" rowspan="8" style="border-bottom: none;">
                <img src="pinggu_files/ct2.jpg" height="240">
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="in_left1" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="in_right1" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="in_left2" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="in_right2" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="in_left3" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="in_right3" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                <input name="in_left4" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                <input name="in_right4" maxlength="12" size="8" class="textInput" type="text">
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                地毯
                <input name="in_bottom1" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
              <td style="border-bottom: none;">
                顶棚
                <input name="in_bottom2" maxlength="12" size="8" class="textInput" type="text">
              </td>
              <td style="border-bottom: none;">
                &nbsp;
              </td>
            </tr>
            </tbody>
          </table>

        </td>
        <td class="content">
          凹坑A
        </td>
      </tr>

      <tr>
        <td class="content">
          褪色T
        </td>
      </tr>
      <tr>
        <td class="content">
          钣金B
        </td>
      </tr>
      <tr>
        <td class="content">
          缺件Q
        </td>
      </tr>
      <tr>
        <td class="content">
          划伤H
        </td>
      </tr>
      <tr>
        <td class="content">
          腐蚀F
        </td>
      </tr>
      <tr>
        <td class="content">
          喷漆P
        </td>
      </tr>
      <tr>
        <td class="content">
          需更换X
        </td>
      </tr>
      <tr>
        <td class="content">
          已更换XX
        </td>
      </tr>
      <tr>
        <td class="content">
          整洁度（优-&gt;差）Z0/Z1/Z2/Z3
        </td>
      </tr>
      <tr>
        <th class="label">
          外观整体情况：<span style="color:red">*</span>
        </th>
        <td colspan="6" class="content">
          <table>
            <tbody>
            <tr>
              <td style="border-bottom-color: #fff" colspan="3">
                <el-form-item prop="name">
                  <el-checkbox-group v-model="form.name" >
                    <el-checkbox label="良好"></el-checkbox>
                    <el-checkbox label="陈旧"></el-checkbox>
                    <el-checkbox label="划伤"></el-checkbox>
                    <el-checkbox label="色差较大"></el-checkbox>
                    <el-checkbox label="明显硬伤"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </td>

              <td style="border-bottom-color: #fff" colspan="3" >
                <el-form-item prop="name" style="width: 300px">
                  <el-input size="small" class="large-input" v-model="form.name"></el-input>
                </el-form-item>
              </td>
            </tr>
            </tbody>
          </table>
        </td>

      </tr>
      <tr>
        <th class="label">
          骨架：
        </th>
        <td colspan="3" class="content">
          <img src="pinggu_files/ct3.jpg" height="200">
        </td>
        <td colspan="1" class="content">
          <select name="" id="skeletonnum" size="12" ondblclick="chackSkeleton(this.value)">
            <option value="1">1:纵梁</option>
            <option value="2">2:防撞梁</option>
            <option value="3">3:前翼子板内衬</option>
            <option value="4">4:A立柱</option>
            <option value="5">5:B立柱</option>
            <option value="6">6:C立柱</option>
            <option value="7">7:发动机隔板</option>
            <option value="8">8:车顶</option>
            <option value="9">9:地板</option>
            <option value="10">10:行李箱底板</option>
            <option value="11">11:裙边</option>
            <option value="12">12:后翼子板内衬</option>
            <option value="13">13:水箱框架</option>
            <option value="14">14:行李箱后围</option>
            <option value="15">15:后翼子板</option>
            <option value="16">16:减震器支架</option>
          </select>
        </td>
        <td colspan="3" valign="top" class="content">
          <div style="overflow-y: scroll; width: 100%; height: 200px;">
            <table style="width: 100%;" id="skeletonlist">

            </table>
          </div>

        </td>
      </tr>
      <tr>
        <th class="label">
          骨架整体状况：<span style="color:red">*</span>
        </th>
        <td colspan="3" class="content">
          <el-checkbox-group v-model="form.OverallAppearance">
            <el-checkbox label="良好"></el-checkbox>
            <el-checkbox label="轻微变形"></el-checkbox>
            <el-checkbox label="严重变形"></el-checkbox>
            <el-checkbox label="更换"></el-checkbox>
          </el-checkbox-group>
        </td>
        <th class="label">
          骨架整体状况：<span style="color:red">*</span>
        </th>
        <td class="content" colspan="3">
          <el-input class="middle-input" size="small"></el-input>
        </td>
      </tr>
      <tr>
        <th class="label">
          空调系统：<span style="color:red">*</span>
        </th>
        <td class="content">
          <el-radio-group v-model="form.kongtiao">
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="0">故障</el-radio>
          </el-radio-group>
        </td>

        <th class="label">
          仪表显示：<span style="color:red">*</span>
        </th>
        <td class="content">
          <el-radio-group v-model="form.kongtiao">
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="0">故障</el-radio>
          </el-radio-group>
        </td>
        <th class="label">
          底盘整体情况：<span style="color:red">*</span>
        </th>
        <td colspan="4">
          <el-checkbox-group v-model="form.OverallAppearance">
            <el-checkbox label="良好"></el-checkbox>
            <el-checkbox label="轻微变形"></el-checkbox>
            <el-checkbox label="严重变形"></el-checkbox>
            <el-checkbox label="更换"></el-checkbox>
          </el-checkbox-group>
        </td>
      </tr>
      </tbody>
    </table>
  </el-form>



</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        form: {
          OverallAppearance: [],
          kongtiao: '',

        },
        rules: {
          name: [
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

  .row div {
    display: inline-block;
  }

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
