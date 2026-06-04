import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("<h1>Hey Raunak... Jyaada Harkatein nahin</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
