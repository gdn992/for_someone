import express from "express";
import bodyParser from "body-parser";
import gamesRouter from "./routes/gamesRouter";
import personsRouter from "./routes/personsRouter";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/games", gamesRouter);
app.use("/persons", personsRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
