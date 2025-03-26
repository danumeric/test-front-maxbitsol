<template>
  <article class="coctail-card">
    <h4>{{ props.fetchedCoctail.strDrink }}</h4>
    <div class="coctail-card__top-info">
      <div>
        <p>{{ props.fetchedCoctail.strCategory }}</p>
        <p>{{ props.fetchedCoctail.strAlcoholic }}</p>
        <p>{{ props.fetchedCoctail.strGlass }}</p>
        <p>Instructions:</p>
        {{ props.fetchedCoctail.strInstructions }}
      </div>
      <NuxtImg
        v-if="props.fetchedCoctail.strDrinkThumb"
        :src="props.fetchedCoctail.strDrinkThumb"
        width="150"
        cover
        loading="lazy"
      />
    </div>
    <p>List of ingredients:</p>
    <div v-for="ingredient of fetchedCoctail.ingredients">
      <span v-if="ingredient.name || ingredient.measure"
        >{{ ingredient.name ?? 'неизв.' }}: {{ ingredient.measure ?? 'неизв.' }}</span
      >
    </div>
    <hr />
  </article>
</template>
<script setup lang="ts">
  import type { DrinkWithInjectedIngredients } from '@/types/coctails.model'

  const props = defineProps<{
    fetchedCoctail: DrinkWithInjectedIngredients
  }>()
</script>
<style lang="scss" scoped>
  .coctail-card {
    padding: 0.5rem;
    &__top-info {
      display: flex;
      gap: 0 1rem;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
</style>
