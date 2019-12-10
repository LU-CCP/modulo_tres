const express = require("express");
const propietarioRoutes = require("./src/routes/propietario.routes");
const pacienteRoutes = require("./src/routes/paciente.routes");
const citaRoutes = require("./src/routes/cita.routes");
const app = express();

app.use("/propietario", propietarioRoutes);
app.use("/paciente", pacienteRoutes);
app.use("/citas", citaRoutes);
app.listen(3005, function() {
  console.log("server running on port 3005");
});
