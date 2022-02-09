<template>
  <div class="not-found">
    <div class="text-h5">404 Not Found</div>
    <router-link to="/" class="mt-5">Return to the dashboard</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class NotFound extends Vue {}
</script>

<style lang="less" scoped>
  .not-found {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: cloumn;
    justify-content: center;
    align-items: center;
    .router-link-active{
      color: var(--color2);
    }
  }
</style>
