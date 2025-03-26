import type { Drink } from '@/types/api/coctails-api.model'

export interface IInjectedIngredients {
  [ingredientId: number]: { name?: string | null | undefined; measure?: string | null | undefined }
}

export type DrinkWithInjectedIngredients = Drink & { ingredients: IInjectedIngredients }
