const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});