/* eslint-disable no-trailing-spaces */
<template>
  <div class="message">
    <el-button @click="open">打开消息框</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Message1',
    mounted() {

    },
    methods: {
      open() {
        this.$Message({
           title: '我是哪吒',
           bgColor: 'crimson'
        }, {
          btn: <el-button type='success'>点我</el-button>
        }
        ).init()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
