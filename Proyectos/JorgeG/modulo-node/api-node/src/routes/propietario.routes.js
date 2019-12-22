const express = require("express");
const sql = require("mssql");
const sqlConfig = require("../mssqlConfig");

const router = express.Router();

router.post("/", function(req, res) {
  // console.log(req.body);
  // res.send(body);
  const { fecha, id_paciente, motivo_consulta, id_medico, monto } = req.body;
  sql.connect(sqlConfig.config, function(error) {
    if (error) console.log(error);

    const sqlRequest = new sql.Request();

    sqlRequest.query(
      "INSERT INTO cita VALUES(@fecha, @id_paciente, @motivo_consulta, @id_medico, @monto)",
      function(error, data) {
        if (error) {
          console.log(error);
        } else {
          const sqlRequest = new sql.Request();
          sqlRequest.input("fecha", fecha);
          sqlRequest.input("id_paciente", id_paciente);
          sqlRequest.input("motivo_consulta", motivo_consulta);
          sqlRequest.input("id_medico", id_medico);
          sqlRequest.input("monto", monto);
        }
        res.send(data);
        sql.close();
      }
    );
  });
});

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

// router.post("/", function(req, res) {
//   console.log(req.body);
//   res.send(req.body);
//   const {
//     id,
//     rut,
//     nombre,
//     apellido_materno,
//     apellido_paterno,
//     telefono
//   } = req.body;
//   sql.connect(sqlConfig.config, function(err) {
//     if (err) console.log(err);

//     const sqlRequest = new sql.Request();
//     const query = `INSERT INTO Persona (rut,nombre,apellido_materno,apellido_paterno,telefono)VALUES (${id},${rut},${nombre},${apellido_materno},${apellido_paterno},${telefono})`;
//     sqlRequest.query(query, function(error, data) {
//       if (error) console.log(error);
//       res.send(data);
//       sql.close();
//     });
//   });
// });

module.exports = router;
