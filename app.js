require("express-async-errors");

const express = require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Mongo connection successful!");
  })
  .catch(() => {
    console.log("Mongo connection failed");
  });

// Model init

//require("./models/users.model");

app.use(express.json());

// Routes

//app.use("/api/users", userRoutes);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "Not found",
  });
});

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
