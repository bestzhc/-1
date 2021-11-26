<template>
  <div class="dialog">
    <input v-model="value" v-anti-shake:none="getData" type="text">
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    this.$Message({
           title: '我是哪吒',
           bgColor: 'crimson'
        }, {
          btn: <el-button type='success'>点我</el-button>
        }
        ).init()
  },
  methods: {
    getData() {
      console.log(1)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
