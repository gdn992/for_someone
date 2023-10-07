import express, { Request, Response } from "express";
import { readDb, writeDb } from "../db/dbHelper";
import { Game, Person } from "../types";

const router = express.Router();

// Get all persons
router.get("/", (req: Request, res: Response) => {
  const db = readDb();
  res.json(db.persons);
});

// Get person by ID
router.get("/:id", (req: Request, res: Response) => {
  const db = readDb();
  const person = db.persons.find(
    (p: Person) => p.id === parseInt(req.params.id, 10),
  );
  if (person) {
    res.json(person);
  } else {
    res.status(404).send("Person not found");
  }
});

// Create a new person
router.post("/", (req: Request, res: Response) => {
  const db = readDb();
  const person: Person = req.body;
  person.id = Date.now(); // simple way to generate a unique ID
  db.persons.push(person);
  writeDb(db);
  res.status(201).json(person);
});

// Update person by ID
router.put("/:id", (req: Request, res: Response) => {
  const db = readDb();
  const index = db.persons.findIndex(
    (p: Person) => p.id === parseInt(req.params.id, 10),
  );
  if (index > -1) {
    const updatedPerson: Person = req.body;
    updatedPerson.id = parseInt(req.params.id, 10);
    db.persons[index] = updatedPerson;
    writeDb(db);
    res.json(updatedPerson);
  } else {
    res.status(404).send("Person not found");
  }
});

// Delete a person by ID
router.delete("/:id", (req: Request, res: Response) => {
  const db = readDb();
  const initialLength = db.persons.length;
  db.persons = db.persons.filter(
    (p: Person) => p.id !== parseInt(req.params.id, 10),
  );
  if (db.persons.length < initialLength) {
    writeDb(db);
    res.status(204).send();
  } else {
    res.status(404).send("Person not found");
  }
});

// Add games to a person
router.post("/:id/games", (req: Request, res: Response) => {
  const db = readDb();
  const personIndex = db.persons.findIndex(
    (p: Person) => p.id === parseInt(req.params.id, 10),
  );

  if (personIndex === -1) {
    return res.status(404).send("Person not found");
  }

  const gameIds: number[] = req.body.games;

  for (let id of gameIds) {
    if (!db.games.some((g: Game) => g.id === id)) {
      return res.status(404).send(`Game with id ${id} not found`);
    }
  }

  db.persons[personIndex].games = db.persons[personIndex].games.concat(gameIds);
  writeDb(db);
  res.status(201).json(db.persons[personIndex]);
});

export default router;
