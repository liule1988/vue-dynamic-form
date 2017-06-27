<template>
  <div class="damage">
    <el-form ref="damform"
             style="min-width: 1086px">
      <el-row>
        <el-col :span="4" class="label">
            <label>外观：</label>
        </el-col>
        <el-col :span="20">
            <el-row>
              <el-col :span="10">1</el-col>
              <el-col :span="10">2</el-col>
              <el-col :span="4">3</el-col>
            </el-row>
            <el-row>
              <el-col :span="4" class="label">
                <label>外观整体情况：</label>
                <span style="color:red">*</span>
              </el-col>
              <el-col :span="20">
                <el-checkbox-group v-model="form.seatsList" style="display: inline-block">
                  <el-checkbox label="良好"></el-checkbox>
                  <el-checkbox label="陈旧"></el-checkbox>
                  <el-checkbox label="划伤"></el-checkbox>
                  <el-checkbox label="色差较大"></el-checkbox>
                  <el-checkbox label="明显硬伤"></el-checkbox>
                </el-checkbox-group>
                <el-input size="small" style="display: inline-block;width: 30%"></el-input>
              </el-col>
            </el-row>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'xx',
    data () {
      return {
        form: {}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label{
  background-color: #e5f4ff;
}
</style>
