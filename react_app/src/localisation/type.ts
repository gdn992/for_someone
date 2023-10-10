import { Navigation } from '../components/pages/HeaderToolbar'

export type TranslationTypes = {
  uglyDesign: string
  greeting: string
} & Record<Navigation, string>
