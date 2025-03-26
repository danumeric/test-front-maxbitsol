import { COCTAIL_CODES } from '@/utils/constants'
import type { Drink } from '@/types/api/coctails-api.model'
import type { DrinkWithInjectedIngredients, IInjectedIngredients } from '@/types/coctails.model'

export const useCoctailsStore = defineStore('coctailsStore', () => {
  const notificationStore = useNotificationStore()

  async function fetchCoctailsByName(
    coctailName: (typeof COCTAIL_CODES)[number]['name']
  ): Promise<DrinkWithInjectedIngredients[] | undefined> {
    try {
      const { data } = await useCoctailsAPIFetch('/search.php', {
        method: 'GET',
        query: {
          s: coctailName,
        },
      })

      if (!data.value?.drinks) {
      }

      return data.value?.drinks?.map((d) => injectIngredientsToDrink(d))
    } catch (error) {
      notificationStore.add({
        type: 'error',
        message: `Ошибка загрузки ${error instanceof Error ? error.message : ''}`,
      })
    }
  }

  function injectIngredientsToDrink(drink: Drink): DrinkWithInjectedIngredients {
    const ingredients: IInjectedIngredients = {} as IInjectedIngredients

    for (const key of Object.keys(drink) as Array<keyof typeof drink>) {
      //todo in foreach []
      const matchIngredientStrId = key.match(/^strIngredient([1-9]\d*)$/)

      if (matchIngredientStrId) {
        const ingredientId: number = parseInt(matchIngredientStrId[1], 10)

        if (ingredients[ingredientId] === undefined) {
          ingredients[ingredientId] = {
            name: drink[key],
          }
        } else {
          ingredients[ingredientId]['name'] = drink[key]
        }
      }

      const matchMeasureStrId = key.match(/^strMeasure([1-9]\d*)$/)

      if (matchMeasureStrId) {
        const measureId: number = parseInt(matchMeasureStrId[1], 10)

        if (ingredients[measureId] === undefined) {
          ingredients[measureId] = {
            measure: drink[key],
          }
        } else {
          ingredients[measureId]['measure'] = drink[key]
        }
      }
    }

    return { ...drink, ingredients }
  }

  return { fetchCoctailsByName }
})
