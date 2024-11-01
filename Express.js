import express from "express";
import cors from "cors";
const app = express();

// middleware

app.use(cors());

// routes

// start the server
const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Server is running on https://localhost:${PORT}`);
});
