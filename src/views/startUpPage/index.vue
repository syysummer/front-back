<template>
  <div class="start-up-page">
    <!-- <div class="start-up-label">CREALITY</div>s s -->
    <!-- <select name="lang" id="lang" @change="changeLang">
      <option :value="item" v-for="(item, index) in options" :key="index">{{item}}</option>
    </select>
    <div class="about">about</div>
    <h3>主题切换</h3>
    <select @change="changeTheme">
      <option value="theme1">主题一</option>
      <option value="theme2">主题二</option>
      <option value="theme3">主题三</option>
      <option value="theme4">主题四</option>
    </select> -->

    <!-- <van-button type="primary">Vant按钮</van-button> -->

    <!-- 温度部分 -->
    <div class="left-con">
      <TemperControl />
    </div>

    <!-- 图表部分 -->
    <div class="right-con">
      <TemperChart />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'
import { changeTheme, THEME_TYPE } from '@/config/colorConfig'
import TemperControl from './components/temperControl.vue'
import TemperChart from './components/temperChart11.vue'

@Component({
  components: {
    TemperControl,
    TemperChart,
  }
})
export default class StartUp extends Mixins(Vue) {
  jumpTimer: any = null
  options = ['ar', 'cn', 'cz', 'de']
  mounted () {
    this.jumpTimer = setTimeout(() => {
      // this.$router.replace('/BootGuide/0')
      clearTimeout(this.jumpTimer)
    }, 10000)
    const theme: THEME_TYPE = localStorage.getItem('theme') as THEME_TYPE || 'theme1'
    changeTheme(theme)
  }

  changeLang (e: any) {
    const selectDom = e.target
    const index = selectDom.selectedIndex
    const currentLang = this.options[index]
    this.$store.dispatch('config/onLocaleChange', currentLang)
  }

  changeTheme (e: Event) {
    const theme: THEME_TYPE = (e.target as HTMLInputElement).value as THEME_TYPE
    localStorage.setItem('theme', theme)
    changeTheme(theme)
  }
}
</script>

<style lang="less" scoped>
  .start-up-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    background: #000;
    .left-con{
      width: 30%;
      height: 6.25rem;
      background-color: #222222;
    }
    .right-con{
      width: 37.5rem;
      height: 31.25rem;
      background-color: #323232;
    }
  }
</style>
