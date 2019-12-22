const express = require("express");

const server = express();

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

server.use(express.json());

server.get("/mascota", function(request, response) {
  mssql.connect(dbConfig, function(err) {
    if (err) console.log(err);
    const sqlRequest = new mssql.Request();
    sqlRequest.query("select * from paciente", function(err, data) {
      response.send(data);
      mssql.close();
    });
  });
});

server.put("/testupdate/:id", function(request, response) {
  console.log(request.params.id);
  console.log(request.body);

  response.statusCode = 200;
  response.send("MASCOTA ACTUALIZADA");
});

server.listen(3011, function() {
  console.log("server running on port 3011");
});

//.---------------------------

// const http = require("http");

// const colors = require("colors");

// const server = http.createServer(function(request, response) {
//   response.end("Solicitud procesada");
// });

// server.listen(3001, getListen);
// function getListen() {
//   console.log("server running on port 3001".bgRed);
// }
