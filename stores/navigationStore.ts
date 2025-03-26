import { COCTAIL_CODES } from '@/utils/constants'
import { skipHydrate } from 'pinia'

type Route = (typeof COCTAIL_CODES)[number] | null | undefined

export const useNavigationStore = defineStore('navigationStore', () => {
  const currentRoute: Ref<Route> = ref(null)

  function changeCurrentRoute(newRoute: Route) {
    if (newRoute === null || newRoute === undefined) return
    currentRoute.value = newRoute
  }

  return { currentRoute: skipHydrate(currentRoute), changeCurrentRoute }
})
