<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper__item">
      <span>昵称</span>
      <el-input />
    </div><div class="conditions-wrapper__item">
      <span>所属学科</span>
      <el-input />
    </div><div class="conditions-wrapper__item">
      <span>职位</span>
      <el-input />
    </div><div class="conditions-wrapper__item">
      <span>工作年限:</span>
      <el-input />
      <el-input />
    </div><div class="conditions-wrapper__item">
      <span>手机号</span>
      <el-input />
    </div>
    <el-button>搜索</el-button>
    <el-button>重置</el-button>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conditions-wrapper{
  display:flex;
  align-items:center;
  &__item{
    display:flex;
    flex-direction: row;
    align-items:center;
    span{
      border:1px solid rgb(201, 201, 201);
      display: inline-block;
      margin-left: 20px;
      white-space: nowrap;
      padding: 10px;
    }
  }
}

</style>
