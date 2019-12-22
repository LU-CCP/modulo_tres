const express = require("express");
const sql = require("mssql");

const sqlConfig = require("../mssqlConfig");

const router = express.Router();

router.get("/", function(req, res) {
  res.send("ruta get paciente");
});

module.exports = router;
