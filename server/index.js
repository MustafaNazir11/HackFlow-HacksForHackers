import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { callGroq, listModels } from "./groq.js";
import { mvpPrompt, taskPrompt, demoPrompt } from "./prompts.js";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/mvp", async (req, res) => {
  const text = await callGroq(mvpPrompt(req.body));
  res.json({ text });
});

app.post("/tasks", async (req, res) => {
  const text = await callGroq(taskPrompt(req.body.features));
  res.json({ text });
});

app.post("/demo", async (req, res) => {
  const text = await callGroq(demoPrompt(req.body));
  res.json({ text });
});

app.listen(5000, () => console.log("Server running on 5000"));
