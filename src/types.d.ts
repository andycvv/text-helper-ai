import { CATEGORIES, CATEGORIES_OPTIONS, NONE_OPTION } from "./data/constants"

export interface State {
  text: string
  context: string
  loading: boolean
  filters: Filter
}

export type Category = keyof typeof CATEGORIES

type CorrectionOption = keyof typeof CATEGORIES_OPTIONS.correction
type StyleOption = keyof typeof CATEGORIES_OPTIONS.style
type ToneOption = keyof typeof CATEGORIES_OPTIONS.tone
export type NoneOption = typeof NONE_OPTION

export type Option<T extends Category> = 
  T extends 'correction'
  ? CorrectionOption
  : T extends 'style'
  ? StyleOption
  : T extends 'tone'
  ? ToneOption
  : never

export type Filter = {
  category: Category;
  option: Option<Category> | NoneOption;
}

export type Action =
  | { type: 'REFRESH_TEXT'; payload: string }
  | { type: 'CHANGE_CATEGORY'; payload: Category }
  | { type: 'SELECT_OPTION'; payload: Option<Category> }
  | { type: 'CHANGE_CONTEXT'; payload: string }