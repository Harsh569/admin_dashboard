const express = require("express");
const router = express.Router();
const Income = require("../models/incomeModel");

// Get all income records
router.get("/", async (req, res) => {
  try {
    const incomes = await Income.find();
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new income record
router.post("/", async (req, res) => {
  const income = new Income(req.body);
  try {
    const savedIncome = await income.save();
    res.status(201).json(savedIncome);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
