import express, { urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import gamesRouter from "./routes/gamesRouter";
import personsRouter from "./routes/personsRouter";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(urlencoded({ extended: true }));

app.use("/api/games", gamesRouter);
app.use("/api/persons", personsRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
