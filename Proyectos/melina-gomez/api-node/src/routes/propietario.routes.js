const express = require("express");
const sql = require("mssql");
const sqlConfig = require("../mssqlConfig");

const router = express.Router();

router.get("/", function(req, res) {
  sql.connect(sqlConfig.config, function(err) {
    if (err) console.log(err);
    const sqlRequest = new sql.Request();
    sqlRequest.query("select* from persona", function(error, data) {
      if (error) console.log(error);
      res.send(data);
      sql.close();
    });
  });
});

router.post("/", (req, res) => {
  sql.connect(sqlConfig.config, function(err) {
    if (err) console.log(err);

    const {
      rut,
      nombre,
      apellido_materno,
      apellido_paterno,
      telefono
    } = req.body;

    const sqlRequest = new sql.Request();
    sqlRequest.query(
      `insert into Persona (rut, nombre, apellido_materno, apellido_paterno, telefono) values ('${rut}', '${nombre}' ,'${apellido_materno}','${apellido_paterno}','${telefono}')`,
      function(error, data) {
        if (error) console.log(error);
        res.send(data);
        sql.close();
      }
    );
  });
});

//res.send("ruta get persona");

module.exports = router;
