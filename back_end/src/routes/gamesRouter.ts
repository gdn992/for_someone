import express, { Request, Response } from "express";
import { readDb, writeDb } from "../db/dbHelper";

const router = express.Router();

interface Game {
  id: number;
  name: string;
  publisher: string;
  publishedDate: Date;
  coverPicture: string;
}

// Get all games
router.get("/", (req: Request, res: Response) => {
  const db = readDb();
  res.json(db.games);
});

// Get a game by ID
router.get("/:id", (req: Request, res: Response) => {
  const db = readDb();
  const game = db.games.find((g: Game) => g.id === parseInt(req.params.id, 10));
  if (game) {
    res.json(game);
  } else {
    res.status(404).send("Game not found");
  }
});

// Create a new game
router.post("/", (req: Request, res: Response) => {
  const db = readDb();
  const game: Game = req.body;
  game.id = Date.now(); // simple way to generate a unique ID
  db.games.push(game);
  writeDb(db);
  res.status(201).json(game);
});

// Update a game by ID
router.put("/:id", (req: Request, res: Response) => {
  const db = readDb();
  const index = db.games.findIndex(
    (g: Game) => g.id === parseInt(req.params.id, 10),
  );
  if (index > -1) {
    const updatedGame: Game = req.body;
    updatedGame.id = parseInt(req.params.id, 10);
    db.games[index] = updatedGame;
    writeDb(db);
    res.json(updatedGame);
  } else {
    res.status(404).send("Game not found");
  }
});

// Delete a game by ID
router.delete("/:id", (req: Request, res: Response) => {
  const db = readDb();
  const initialLength = db.games.length;
  db.games = db.games.filter((g: Game) => g.id !== parseInt(req.params.id, 10));
  if (db.games.length < initialLength) {
    writeDb(db);
    res.status(204).send();
  } else {
    res.status(404).send("Game not found");
  }
});

export default router;
