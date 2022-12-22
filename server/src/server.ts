import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json("Acessou!");
});

app.listen(3001);
