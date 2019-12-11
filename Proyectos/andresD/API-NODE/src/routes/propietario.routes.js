const express = require("express");
const sql = require("mssql");
const sqlConfig = require("../mssqlConfig");

const router = express.Router();

// router.get("/", function(req, res) {
//   sql.connect(sqlConfig.config, function(err) {
//     if (err) console.log(err);

//     const sqlRequest = new sql.Request();

//     sqlRequest.query("select * from persona", function(error, data) {
//       if (error) console.log(error);

//       res.send(data);

//       sql.close();
//     });
//   });
// });

// router.get("./promise", function(req, res) {
//   sql
//     .connect(sqlConfig.config)
//     .then(conn => {
//       return conn.query("select* from persona");
//     })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(error => console.log(error));
// });

router.post("/", (req, res) => {
  sql.connect(sqlConfig.config, function(err) {
    if (err) console.log(err);

    const {
      rut,
      nombre,
      apellido_paterno,
      apellido_materno,
      telefono
    } = req.body;
    const sqlRequest = new sql.Request();

    sqlRequest.query(
      `insert into persona(rut, nombre, apellido_paterno, apellido_materno, telefono) values (
         '${rut}', '${nombre}', '${apellido_paterno}', '${apellido_materno}', '${telefono}')`,
      function(error, data) {
        if (error) console.log(error);

        res.send(data);

        sql.close();
      }
    );
  });
});

router.put("/update/:id", (req, res) => {
  sql.connect(sqlConfig.config, function(err) {
    if (err) console.log(err);

    let {
      rut,
      nombre,
      apellido_paterno,
      apellido_materno,
      telefono
    } = req.body;

    const { id } = req.params;
    const sqlRequest = new sql.Request();

    sqlRequest.query(
      `update persona set rut = '${rut}', nombre = '${nombre}', apellido_paterno = '${apellido_paterno}', apellido_materno =  '${apellido_materno}', telefono =  '${telefono}' where id = '${id}'`,
      function(error, data) {
        if (error) console.log(error);
        res.send(data);
        sql.close();
      }
    );
  });
});

module.exports = router;
