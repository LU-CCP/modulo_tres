const express = require("express");
const propietarioRoutes = require("./src/routes/propietario.routes");
const pacienteRoutes = require("./src/routes/paciente.routes");
const citaRoutes = require("./src/routes/cita.routes");
const medicoRoutes = require("./src/routes/medico.routes");

const app = express();
app.use(express.json());

app.use("/propietario", propietarioRoutes);
app.use("/paciente", pacienteRoutes);
app.use("/cita", citaRoutes);
app.use("/medico", medicoRoutes);

app.listen(3005, function() {
  console.log("Server running on port 3005");
});
