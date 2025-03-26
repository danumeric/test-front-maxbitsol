<template>
  <button @click="toggleMenu" class="burger-menu" aria-label="Menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav v-show="isShowMenu" class="navigation-menu">
    <ul>
      <li v-for="coctailCode of COCTAIL_CODES" class="navigation-menu__link">
        <NuxtLink :to="`/${coctailCode.name}`">
          <NavigationPanel
            :isActive="activeRouteName === coctailCode.name"
            @click="isShowMenu = false"
            >{{ coctailCode.name }}</NavigationPanel
          >
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <nav class="navigation-menu-big">
    <ul>
      <li v-for="coctailCode of COCTAIL_CODES" class="navigation-menu-big__link">
        <NuxtLink :to="`/${coctailCode.name}`">
          <NavigationPanel :isActive="activeRouteName === coctailCode.name">{{
            coctailCode.name
          }}</NavigationPanel>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { COCTAIL_CODES } from '@/utils/constants'

  const navigationStore = useNavigationStore()

  const activeRouteName = computed(() => {
    return navigationStore.currentRoute?.name
  })

  const isShowMenu = ref(false)

  function toggleMenu() {
    isShowMenu.value = !isShowMenu.value
  }
</script>

<style scoped lang="scss">
  @import '@/assets/styles/mixins/media-queries.scss';

  .navigation-menu-big {
    display: block;
    &__link {
      &:not(:first-child) {
        padding-top: 0.5rem;
      }
    }
    @include media-down(md) {
      display: none;
    }
  }
  .navigation-menu {
    position: fixed;
    left: 0;
    right: 0;
    height: 100svh;
    background-color: rgb(var(--button-default));
    @include media-up(md) {
      display: none;
    }
  }
  .burger-menu {
    position: fixed;
    display: flex;
    right: 16px;
    top: 16px;
    width: 24px;
    z-index: 4;
    padding: 0;
    height: 18px;
    flex-direction: column;
    justify-content: space-between;
    border: none;
    cursor: pointer;
    background: transparent;
    span {
      display: block;
      width: 100%;
      height: 2px;
      background: black;
    }
    @include media-up(md) {
      display: none;
    }
  }
</style>
