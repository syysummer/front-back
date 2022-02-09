<template>
  <div class="step-three">
    <div class="text-h5">Step four</div>
    <NextBtn :currentStep="3" :previousStep="true"/>
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
  .step-three {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
