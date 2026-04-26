const express = require("express");
const router = express.Router();
const model = require("../models/students");

// Obtener estudiantes
router.get("/", (req, res) => {
  res.json(model.getAll());
});

// Registrar estudiante
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  const student = { id: Date.now(), name, email };
  model.add(student);

  res.status(201).json(student);
});

module.exports = router;