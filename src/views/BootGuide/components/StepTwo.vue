<template>
  <div class="step-two">
    <div class="text-h5">Step three</div>
    <NextBtn :currentStep="2" :previousStep="true"/>
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
  .step-two {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
