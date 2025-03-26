//export const COCTAIL_CODES = ['margarita', 'mojito', 'a1', 'kir'] as const

export const COCTAIL_CODES = [
  {
    name: 'margarita',
    routes: ['margarita', ''],
  },
  { name: 'mojito', routes: ['mojito'] },
  { name: 'a1', routes: ['a1'] },
  { name: 'kir', routes: ['kir'] },
] as const
