// routes/expenseRoutes.js
const express = require("express");
const router = express.Router();
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

// Route to get all expenses
router.get("/", getExpenses);

// Route to add a new expense
router.post("/", addExpense);

// Route to update an expense by ID
router.put("/:id", updateExpense);

// Route to delete an expense by ID
router.delete("/:id", deleteExpense);

module.exports = router;
