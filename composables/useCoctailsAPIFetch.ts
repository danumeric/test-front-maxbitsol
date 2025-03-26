import type { UseFetchOptions } from 'nuxt/app'
import type { AsyncData } from '#app'
import type { ICoctailsAPIRoutes } from '@/types/api/coctails-api.model'

export function useCoctailsAPIFetch<T extends keyof ICoctailsAPIRoutes>(
  url: T,
  options: Omit<UseFetchOptions<unknown>, 'query' | 'method'> & {
    query: ICoctailsAPIRoutes[T]['request']['query']
  } & { method: ICoctailsAPIRoutes[T]['request']['method'] }
): AsyncData<ICoctailsAPIRoutes[T]['response'], Error | null> {
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()

  //@ts-expect-error
  return useFetch(url, {
    ...options,
    baseURL: config.public.API_URL,
    $fetch: nuxtApp.$api as typeof $fetch,
  })
}
