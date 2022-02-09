<template>
  <div class="btn">
    <div
      class="btn-previous"
      @touchstart.prevent="toPreviousStep"
      v-if="previousStep"
    >
     {{$t('BootGuide.preStep')}}
    </div>
    <div
      class="btn-next"
      @touchend.prevent="toNextStep"
      :class="{ disabled: disabled }"
    >
      {{ this.desc === 1 ? $t('BootGuide.nextStep') : this.desc }}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class NextBtn extends Vue {
  descData = ''
  toNextPath = 0
  toPreviousPath = 1

  @Prop({ default: 1 }) currentStep?: number | string
  @Prop({ default: 1 }) desc?: number
  @Prop({ default: false }) disabled?: boolean
  @Prop({ default: false }) previousStep?: boolean

  mounted () {
    this.toNextPath = Number(this.currentStep) + 1
    this.toPreviousPath = Number(this.currentStep) - 1
  }

  toPreviousStep () {
    const { toPreviousPath } = this
    if (toPreviousPath < 0) return
    this.$router.push(`/BootGuide/${toPreviousPath}`)
  }

  toNextStep () {
    const { toNextPath } = this
    this.$emit('toNextStep', toNextPath)
    // 走父组件逻辑
    if (this.$listeners.toNextStep) return
    if (toNextPath > 4) return
    this.$router.push(`/BootGuide/${toNextPath}`)
  }
}
</script>

<style lang="less" scoped>
.btn {
  width: 100%;
  text-align: center;
}
</style>
