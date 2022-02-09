<template>
  <div class="step-one">
    <div class="text-h5">Step two</div>
    <NextBtn :currentStep="1" :previousStep="true"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NextBtn from './NextBtn.vue'

@Component({
  components: {
    NextBtn
  }
})
export default class StepZero extends Vue {}
</script>

<style lang="less" scoped>
  .step-one {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
