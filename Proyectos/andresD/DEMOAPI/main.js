// const http = require("http");
// const colors = require("colors");

// const server = http.createServer(function(request, response) {
//   response.end("Solicitud procesada");
// });

// // server.listen(3001, function() {
// //   console.log("server running on port 3001");
// // });

// function getListen() {
//   console.log("server running on port 3001".green);
// }

// server.listen(3001, getListen());

//npm init, agregar entrypoint index.js y keywords : api, lu

const express = require("express");
const mssql = require("mssql");
const server = express();

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

server.use(express.json());

server.get("/mascota", function(request, response) {
  mssql.connect(dbConfig, function(err) {
    if (err) console.log(err);
    const sqlRequest = new mssql.Request();
    sqlRequest.query("select rut, nombre from persona", function(err, data) {
      response.send(data);
      mssql.close();
    });
  });
});

server.post("/mascota", function(request, response) {});

server.delete("/mascota", function(request, response) {});

server.listen(3010, function() {
  console.log("server running on port 3010");
});
