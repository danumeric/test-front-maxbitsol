import { COCTAIL_CODES } from '@/utils/constants'

export interface ICoctailsAPIRoutes {
  '/search.php': {
    request: {
      query: {
        s: (typeof COCTAIL_CODES)[number]['name']
      }
      method: 'GET'
    }
    response: { drinks: ICoctailsAPIResponses['/search.php'] }
  }
  //other routes...
}

type DynamicIngredient<T extends string> = {
  [key in `${T}${number}`]: string | null
}

export type Drink = {
  idDrink: null
  strDrink?: string | null
  strCategory?: string | null
  strAlcoholic?: string | null
  strGlass?: string | null
  strInstructions?: string | null
  strDrinkThumb?: string | null
} & DynamicIngredient<'strIngredient'> &
  DynamicIngredient<'strMeasure'>

export interface ICoctailsAPIResponses {
  '/search.php': Drink[] | null | undefined
}
