const express = require("express");
const sql = require("mssql");
const sqlConfig = require("../mssqlConfig");

const router = express.Router();

router.get("/", function(req, res) {
  sql.connect(sqlConfig.config, function(err) {
    if (err) console.log(err);

    const sqlRequest = new sql.Request();

    sqlRequest.query("select * from cita", function(error, data) {
      if (error) console.log(error);

      res.send(data);

      sql.close();
    });
  });
});

router.post("/", (req, res) => {
  sql.connect(sqlConfig.config, function(err) {
    if (err) console.log(err);

    const { fecha, id_paciente, motivo_consulta, id_medico, monto } = req.body;
    const sqlRequest = new sql.Request();

    sqlRequest.input("fecha", fecha);
    sqlRequest.input("id_paciente", id_paciente);
    sqlRequest.input("motivo_consulta", motivo_consulta);
    sqlRequest.input("id_medico", id_medico);
    sqlRequest.input("monto", monto);

    sqlRequest.query(
      `IF EXISTS (SELECT cita.fecha FROM cita, paciente, medico_veterinario 
        WHERE cita.id_paciente = paciente.id AND paciente.id= @id_paciente  
        AND (medico_veterinario.id = cita.id_medico AND cita.id_medico= @id_medico ))
         insert into cita (fecha, id_paciente, motivo_consulta, id_medico, monto)
         values (@fecha, @id_paciente, @motivo_consulta, @id_medico, @monto)`,
      function(error, data) {
        if (error) console.log(error);
        if (data.rowsAffected != 1) {
          res.statusCode = 400;
        } else {
          res.statusCode = 200;
        }
        res.send(data);
        sql.close();
      }
    );
  });
});

module.exports = router;
