import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

// middleware

app.use(cors()); // Enable Cors
app.use(express.json()); // Parse Json bodies
app.use(morgan()); // log requests
app.use(express.static("public")); // Serve static files

// routes

// start the server
const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Server is running on https://localhost:${PORT}`);
});
