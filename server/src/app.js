import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello server is good");
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
