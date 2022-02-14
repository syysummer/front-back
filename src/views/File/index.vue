<template>
  <div class="file-page">
    {{$t('File.file')}}
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState([
      'config'
    ])
  }
})
export default class File extends Mixins(Vue,) {
}
</script>

<style lang="less" scoped>
  .file-page {
    .main-container();
    padding: 1.25rem;
  }
</style>
