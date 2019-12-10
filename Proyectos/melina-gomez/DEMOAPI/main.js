const express = require("express");
const morgan = require("morgan");
const mssql = require("mssql");

const dbConfig = {
  user: "magister",
  password: "A7r9bFRTBtyXot7IPxin",
  server: "magisterdereemplazo.database.windows.net",
  database: "magisterdereemplazo",
  port: 1433,
  options: {
    encrypt: true
  }
};
const server = express();

server.use(morgan("short"));
server.use(express.json());
server.get("/mascota", function(request, response) {
    const {nombre,apellido_paterno}
  mssql.connect(dbConfig, function(err) {
    if (err) console.log(err);
    const sqlRequest = new mssql.Request();
    sqlRequest.query("select nombre from paciente", function(err, data) {
      response.send(data);
      mssql.close();
    });
  });
});
server.post("/mascota", function(request, response) {});
server.put("/mascota/:id", function(request, response) {
  console.log(req.params.id);
  console.log(req.body);
  response.statusCode = 200;
  es.send("Mascota Actualizada");
});

server.listen(3010, function() {
  console.log("server running on port 3010");
});
//Crear ruta que permita la actualizacion de los datos de un propietario
