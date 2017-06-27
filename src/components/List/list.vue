<template>
    <div class="list">
      <el-table  :data="listData" border fit highlight-current-row style="width: 100%" >

        <div v-for="item in listTypes">
          <el-table-column align="center" :label="item.typeName" :prop="item.type">

          </el-table-column>
        </div>

      </el-table>

    </div>
</template>

<script>
    export default {
        name: 'list',
        data () {
            return {

            }

        },
      props:{
            listTypes:{
                type:Array
            },
            listData:{
                type:Array
            }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
