<template>
  <div class="error-page">
    <h2 class="error-page__title">{{ error?.statusCode }}</h2>
    <h4>{{ error?.message }}</h4>
    <NuxtLink to="/"><NavigationPanel>Домой</NavigationPanel></NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError,
  })
</script>
<style lang="scss">
  .error-page {
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      margin: 0;
    }
  }
</style>
