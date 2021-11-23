/* eslint-disable space-before-blocks */
<template>
  <div class="test-wrapper">
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <lb-table :column="formData.column" :data="formData.list" :pagination="true" />
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from '@/api/test.js'
import ListLayout from '@/components/Listlayout/index.vue'
import LbTable from '@/components/Lb-table/lb-table.vue'
import Conditions from './components/conditions/index.vue'
export default {
  components: {
    ListLayout,
    LbTable,
    Conditions
  },
  data() {
    return {
      formData: {
        column: [{
          prop: 'nick',
          label: '昵称'
        }, {
          prop: 'phone',
          label: '手机号'
        }, {
          prop: 'name',
          label: '真实姓名'
        }, {
          prop: 'subject',
          label: '所属学科'
        }, {
          prop: 'job',
          label: '职位'
        }, {
          prop: 'year',
          label: '工作年限'
        }, {
          prop: 'updateTime',
          label: '录入时间'
        }, {
          prop: 'actions',
          label: '操作',
          render(_, scope) {
            return (
              <div>
                <button class='btn btn-check'>查看</button>|
                <button class='btn btn-edit'>编辑</button>|
                <button class='btn btn-delete'>删除</button>
              </div>
            )
          }
        }],
        list: []
      }
    }
  },

  created() {
    getTestList().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items, total } = data
        this.formData.list = items
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .btn{
    outline:none;
    color: blue;
  }
</style>
