<template>
  <div class="dialog">
    <input v-model="value" type="text" v-anti-shake:none="getData">
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
  mounted() {},
  methods: {
    getData() {
      console.log(1)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
