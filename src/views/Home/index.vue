<template>
  <div class="home-page">
    <div class="home-label">首页</div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Mixins(Vue) {

}
</script>

<style lang="less" scoped>
  .home-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
