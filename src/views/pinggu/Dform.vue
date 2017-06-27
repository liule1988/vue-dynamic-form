<template>
  <div class="main" style="min-width: 1086px">
    <el-form label-width="140px" class="demo-ruleForm" :rules="form.rules" ref="formName" :model="data">
      <el-row>
        <div class="title">{{form.title}}</div>
      </el-row>
      <el-row style="border: 1px solid #95b8e7;border-top: 0;">
        <el-col v-for="(col,index) in form.layout" :span="col.span" :key="index">
          <el-form-item v-for="(item,index) in col.Data" :label="item.label" :prop="item.rules" :key="index">
            <!--文本框 input-->
            <el-input v-if="item.type=='text'"
                      v-model="data[item.bindVal]"
                      :placeholder="item.placeholder"
                      :disabled="item.disabled"
                      size="small"
                      style="width:160px;"
            >
            </el-input>
            <!--日期选择 -->
            <el-date-picker
              v-if="item.type=='date'"
              v-model="data[item.bindVal]" type="date"
              :placeholder="item.placeholder"
              style="width: 160px;"
              :disabled="item.disabled"
              size="small"
            >
            </el-date-picker>
            <!--复选框 checkbox -->
            <el-checkbox-group
              v-if="item.type=='checkbox'"
              v-model="data[item.bindVal]"
            >
              <el-checkbox
                v-for="(opt,i) in item.options"
                :label="opt.value"
                :name="item.bindVal"
                :key="i"
                :disabled="item.disabled">
                {{opt.label}}
              </el-checkbox>
            </el-checkbox-group>
            <!--单选框 Radio -->
            <el-radio-group v-if="item.type=='radio'" v-model="data[item.bindVal]">
              <el-radio
                v-for="(opt,i) in item.options"
                :label="opt.value"
                :key="i"
                :disabled="item.disabled"
              >
                {{opt.label}}
              </el-radio>
            </el-radio-group>
            <!--下拉选择 Select-->
            <el-select
              v-if="item.type=='select'"
              v-model="data[item.bindVal]"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              size="small"
              style="width: 110px"
            >
              <el-option v-for="(opt,i) in item.options" :label="opt.label" :value="opt.value" :key="i"></el-option>
            </el-select>
          </el-form-item>

        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" @click="submitForm('formName')">提交</el-button>
  </div>
</template>

<script>
  export default {
    name: 'pinggu',
    data () {
      return {
        data: {
          name: '张三',
          idNum: '312312312421321432',
          carBrand: '',
          carframeNum: '',
          carStyle: '',
          carModel: '',
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
        form: {
          title: '基本信息',
          layout: [{
            span: 8,
            Data: [{
              type: 'text',
              label: '姓名',
              bindVal: 'name',
              placeholder: '',
              rules: 'name',
              disabled: true
            },
              {
                type: 'text',
                label: '车辆品牌',
                size: 'small',
                bindVal: 'carframeNum',
                placeholder: '',
                rules: 'carframeNum',
                disabled: false

              }, {
                type: 'text',
                label: '车架号码',
                size: 'small',
                bindVal: 'carBrand',
                placeholder: '',
                rules: 'carBrand',
                disabled: false

              },
              {
                type: 'radio',
                label: '车架号码核实',
                bindVal: 'isCarNumber',
                options: [{
                  label: '已核实',
                  value: '01'
                }, {
                  label: '未核实',
                  value: '02'
                }],
                rules: 'isCarNumber',
                disabled: false
              },
              {
                type: 'radio',
                label: '带额度转移',
                bindVal: 'isLimitTurn',
                options: [{
                  label: '是',
                  value: '01'
                }, {
                  label: '否',
                  value: '02'
                }],
                rules: 'isLimitTurn',
                disabled: false
              },
              {
                type: 'select',
                label: '进气方式',
                bindVal: 'inAir',
                options: [{
                  label: '自然进气',
                  value: '01'
                }, {
                  label: '涡轮增压',
                  value: '02'
                }],
                rules: 'inAir',
                disabled: false
              },
              {
                type: 'select',
                label: '使用性质',
                bindVal: 'inAir',
                options: [{
                  label: '营运',
                  value: '01'
                }, {
                  label: '非营运',
                  value: '02'
                },{
                  label: '营转非',
                  value: '03'
                }],
                rules: 'inAir',
                disabled: false
              },
            ]
          }, {
            span: 8,
            Data: [{
              type: 'text',
              label: '身份证号',
              size: 'small',
              bindVal: 'idNum',
              placeholder: '身份证号',
              rules: 'idNum',
              disabled: false

            },
              {
                type: 'date',
                label: '出生日期',
                size: 'small',
                bindVal: 'birth',
                placeholder: '',
                rules: 'birth',
                disabled: false

              },
              {
                type: 'checkbox',
                label: '爱好',
                size: 'small',
                bindVal: 'hobbies',
                options: [{
                  label: '篮球',
                  value: '01'
                }, {
                  label: '足球',
                  value: '02'
                }, {
                  label: '羽毛球',
                  value: '03'
                }],
                rules: 'hobbies',
                disabled: false

              },
              {
                type: 'radio',
                label: '性别',
                size: 'small',
                bindVal: 'gender',
                options: [{
                  label: '篮球',
                  value: '01'
                }, {
                  label: '足球',
                  value: '02'
                }, {
                  label: '羽毛球',
                  value: '03'
                }],
                rules: 'gender',
                disabled: false

              },
            ]

          }, {
            span: 8,
            Data: [{
              type: 'select',
              label: '意向产品',
              size: 'small',
              bindVal: 'wants',
              options: [{
                label: '篮球',
                value: '01'
              }, {
                label: '足球',
                value: '02'
              }, {
                label: '羽毛球',
                value: '03'
              }],
              rules: 'wants',
              disabled: false


            }]
          }],

          rules: {
            carBrand: [
              {required: true, message: '必填', trigger: 'blur'},
              {min: 2, max: 8, message: '长度在 2 到 8 个字', trigger: 'blur'}
            ],
            carframeNum: [
              {required: true, message: '必填', trigger: 'blur'},
            ],
            isCarNumber: [
              {required: true, message: '必填', trigger: 'blur'},
            ],
            isLimitTurn: [
              {required: true, message: '必填', trigger: 'blur'},
            ],
            birth: [
              {type: 'date', required: true, message: '请选择出生日期', trigger: ['change', 'blur']}
            ],
            hobbies: [
              {type: 'array', required: true, message: '请至少选择一个爱好', trigger: 'change'}
            ],
            gender: [
              {required: true, message: '请选择性别', trigger: 'change'}
            ],
            idNum: [
              {required: true, message: '请填写身份证号', trigger: 'blur'},
              {min: 18, max: 18, message: '请填写正确的18位身份证号', trigger: ['change', 'blur']}
            ],
            wants: [
              {required: true, message: '请选择意向', trigger: 'change'}
            ],
          },

        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs.formName.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log(JSON.stringify(this.form.list));

            return false;
          }
        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .title {
    background-color: #1c8de0;
    color: #fff;
    padding: 10px;
  }

</style>
