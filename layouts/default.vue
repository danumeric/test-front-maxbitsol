<template>
  <div class="layout container">
    <NavigationMenuMain />
    <slot />
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '@/assets/styles/mixins/media-queries.scss';

  .container {
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;
    @include media-down(md) {
      grid-template-columns: 1fr;
      padding: 0 16px;
    }
  }
</style>
