// packages
const express = require("express");
const apiRouter = require("./routes/api");
const htmlRouter = require("./routes/html");

// port 3001
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
