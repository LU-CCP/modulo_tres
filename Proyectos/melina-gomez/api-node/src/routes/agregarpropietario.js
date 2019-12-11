const express = require("express");
const mssql = require("mssql");
const sqlConfig = require("../mssqlConfig");
const server = express();

server.use(express.json());
server.post("/agregarProp", function(req, res) {
  const {
    rut,
    nombre,
    apellido_materno,
    apellido_paterno,
    telefono
  } = req.body;
  sql.connect(sqlConfig.config, function(err) {
    if (err) console.log(err);
    const sqlRequest = new sql.Request();
    sqlRequest.query(
      `insert into Persona (rut,nombre, apellido_materno, apellido_paterno, telefono) values ('${rut},${nombre},${apellido_materno},${apellido_paterno},${telefono}')`,
      function(error, data) {
        if (error) console.log(error);
        res.send(data);
        sql.close();
      }
    );
  });
});

// server.put"/persona/:id", function(request, response) {
//   console.log(req.params.id);
//   console.log(req.body);
//   response.statusCode = 200;
//   es.send(" Propietario Actualizado");
// });
module.exports = server;
