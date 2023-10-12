import { Game } from './game'

export interface Person {
  id: number
  name: { first: string; last: string }
  games: Game['id'][]
  url: string
  description: string
}
