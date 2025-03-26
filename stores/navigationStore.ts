import { COCTAIL_CODES } from '@/utils/constants'
import { isNil } from 'lodash'
import { skipHydrate } from 'pinia'

type Route = (typeof COCTAIL_CODES)[number] | null | undefined

export const useNavigationStore = defineStore('navigationStore', () => {
  const currentRoute: Ref<Route> = ref(null)

  function changeCurrentRoute(newRoute: Route) {
    if (isNil(newRoute)) return
    currentRoute.value = newRoute
  }

  return { currentRoute: skipHydrate(currentRoute), changeCurrentRoute }
})
