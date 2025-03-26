<template>
  <button
    class="navigation-panel"
    :class="[{ 'navigation-panel_disabled': isDisabled }, { 'navigation-panel_active': isActive }]"
    :disabled="isDisabled"
  >
    <span class="navigation-panel__text"> <slot></slot></span>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    isDisabled?: boolean
    isActive?: boolean
  }>()
</script>

<style scoped lang="scss">
  .navigation-panel {
    border: none;
    border-radius: 4px;
    display: flex;
    background-color: rgb(var(--button-default));
    width: 100%;
    padding: 0.75rem;
    &:focus-visible {
      outline: 2px dotted rgb(var(--theme-primary));
      outline-offset: 2px;
    }
    &:not(.navigation-panel_disabled) {
      cursor: pointer;
      &.navigation-panel_active {
        background-color: rgb(var(--button-active));
      }
    }

    &:hover:not(.navigation-panel_disabled):not(.navigation-panel_active) {
      transition: all 0.1s ease-out;
      background-color: rgb(var(--button-hover));
    }

    &.navigation-panel_disabled {
      opacity: 50%;
    }
    &__text {
      font-weight: 600;
      font-size: 1.2rem;
    }
  }
</style>
