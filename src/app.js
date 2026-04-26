const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes = require("./routes/students");
app.use("/students", studentRoutes);

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log("API corriendo en puerto 3000"));
}