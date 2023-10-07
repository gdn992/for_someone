import { Navigation } from '../views/HeaderToolbar'

export type TranslationTypes = {
  uglyDesign: string
  greeting: string
} & Record<Navigation, string>
