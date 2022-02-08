/*
 * @Author: your name
 * @Date: 2021-03-02 17:17:45
 * @LastEditTime: 2021-03-02 17:38:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \c-smart-brain-web-pad\src\utils\rem.js
 */
class RemAdp {
  tid: any = null
  maxWidth = 1024
  designWidth = 1024
  rem (designWidth: number, maxWidth: number): void {
    this.maxWidth = maxWidth
    this.designWidth = designWidth
    if (document.documentElement.firstElementChild) {
      document.documentElement.firstElementChild.appendChild(document.createElement('style'))
    } else {
      let wrap: any = document.createElement('div')
      wrap.appendChild(document.createElement('style'))
      document.write(wrap.innerHTML)
      wrap = null
    }

    // 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    this.refreshRem()

    if (document.readyState === 'complete') {
      document.body.style.fontSize = '16px'
    } else {
      document.addEventListener(
        'DOMContentLoaded',
        function () {
          document.body.style.fontSize = '16px'
        },
        false
      )
    }
  }

  refreshRem () {
    let width = document.documentElement.getBoundingClientRect().width
    this.maxWidth = this.maxWidth || 750
    width > this.maxWidth && (width = this.maxWidth)
    const rem = (width * 16) / this.designWidth
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
  }

  runRem () {
    const designPageWidth =
      document.documentElement.clientWidth || document.body.clientWidth
    const designPageHeight =
      document.documentElement.clientHeight || document.body.clientHeight
    if (designPageWidth > designPageHeight) {
      this.rem(1024, 1024)
    } else {
      this.rem(600, 750)
    }
  }

  handleListener () {
    // 浏览器后退的时候重新计算
    clearTimeout(this.tid)
    this.tid = setTimeout(this.refreshRem, 300)
  }
}
const remInstances = new RemAdp()
remInstances.runRem()
// 监听页面尺寸变化
window.addEventListener(
  'resize',
  () => {
    console.log('resize')
    remInstances.handleListener()
    remInstances.runRem()
  },
  false
)
// 监听页面加载出来
window.addEventListener(
  'pageshow',
  (e) => {
    if (e.persisted) {
      remInstances.handleListener()
    }
  },
  false
)
