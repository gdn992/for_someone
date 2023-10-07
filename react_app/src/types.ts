interface Game {
  id: number
  name: string
  publisher: string
  publishedDate: Date
  coverPicture: string
}

export interface Person {
  id: number
  name: { first: string; last: string }
  games: Game['id'][]
  url: string
  description: string
}
