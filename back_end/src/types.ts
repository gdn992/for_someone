interface Game {
  id: number;
  name: string;
  publisher: string;
  publishedDate: Date;
  coverPicture: string;
}

interface Person {
  id: number;
  name: { first: string; last: string };
  games: Game["id"][]
  description: string;
}
