//sets up require express
const express = require("express");
const api = require(".routes/index.js");
const pathname = require("path");
const app = express();
//port
const port = process.env.port || 3001;

app.use(express.json());
app.use(express, express.urlencoded({ extended: true }));

//routes
api.use("/api", api);
