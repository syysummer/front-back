<template>
  <div class="boot">
    <StepZero v-if="currentStep === 0" />
    <StepOne v-if="currentStep === 1" />
    <StepTwo v-if="currentStep === 2" />
    <StepThree v-if="currentStep === 3" />
    <StepFour v-if="currentStep === 4" />
  </div>
</template>

<script lang='ts'>
import StepZero from './components/StepZero.vue'
import StepOne from './components/StepOne.vue'
import StepTwo from './components/StepTwo.vue'
import StepThree from './components/StepThree.vue'
import StepFour from './components/StepFour.vue'

import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    StepZero,
    StepOne,
    StepTwo,
    StepThree,
    StepFour
  }
})
export default class BootGuide extends Vue {
  currentStep = 0

  created () {
    this.currentStep = Number(this.$route.params.step)
  }

  @Watch('$route')
  handleChangeRoute (to: any): void {
    if (to.name === 'BootGuide') {
      this.currentStep = Number(to.params.step)
    }
  }
}
</script>

<style lang="less" scoped>
.boot {
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
}
</style>
