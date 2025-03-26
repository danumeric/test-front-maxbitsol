<template>
  <div>
    <CoctailCardMain v-for="fetchedCoctail of fetchedCoctails" :fetchedCoctail="fetchedCoctail" />
  </div>
</template>
<script setup lang="ts">
  import type { DrinkWithInjectedIngredients } from '@/types/coctails.model'

  import { COCTAIL_CODES } from '@/utils/constants'
  const route = useRoute()
  const navigationStore = useNavigationStore()
  const coctailsStore = useCoctailsStore()

  const fetchedCoctails: Ref<DrinkWithInjectedIngredients[] | null | undefined> = ref(null)

  const coctailCode = route.params.coctailCode
  const currentCoctailRoute = COCTAIL_CODES.find((r) => isIn(r.routes, coctailCode))
  navigationStore.changeCurrentRoute(currentCoctailRoute)

  async function loadCoctails() {
    if (!currentCoctailRoute) {
      showError({
        statusCode: 404,
        message: 'Данный коктейль не существует в захардкоженом списке',
      })
      return
    }
    fetchedCoctails.value = await coctailsStore.fetchCoctailsByName(currentCoctailRoute.name)
  }

  await loadCoctails()
</script>
