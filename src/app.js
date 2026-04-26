const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Estudiantes funcionando 🚀");
});

const studentRoutes = require("./routes/students");
app.use("/students", studentRoutes);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}