<template>
  <div class="temper-control">
    <div class="minus"><span>-</span></div>
    <van-field v-model="currentTemper"  type="number" placeholder="" />
    <div class="add"><span>+</span></div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'

@Component({})
export default class TemperControl extends Mixins(Vue) {
  currentTemper: any = ''
  mounted () {
    
  }
}
</script>

<style lang="less" scoped>
  .temper-control {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    .minus,.add{
      width: 3.75rem;
      height: 3.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #323232;
      color: #fff;
      font-size: 2rem;
    }
    /deep/ .van-cell.van-field{
      width: 30%;
      height: 3.75rem;
      margin: 0 1.25rem;
      background-color: #323232;
      &::after{
        content:'';
        width: 0rem;
        height: 0rem;
      }
      .van-field__body{
        height: 100%;
        .van-field__control{
          height: 100%;
          color: #fff;
          font-size: 1.25rem;
          text-align: center;
        }
      }
    }
  }
</style>
