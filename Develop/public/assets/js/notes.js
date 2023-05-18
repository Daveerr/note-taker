// express router
const notes = require("express").Router();
const path = require("path");

//get route
router.get(`/notes`, (req, res) => {
  const notesPath = path.join(__dirname, "../notes.html");
  res.sendFile(notesPath);
});
