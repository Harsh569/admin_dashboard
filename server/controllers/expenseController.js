// controllers/expenseController.js
const Expense = require("../models/Expense");

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    console.log("req", req);
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new expense
exports.addExpense = async (req, res) => {
  const { name, amount, category } = req.body;
  console.log("name", name);
  try {
    const newExpense = new Expense({ name, amount, category });
    await newExpense.save();
    console.log("newExpense", newExpense);
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an expense by ID
exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const { name, amount, category } = req.body;
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { name, amount, category },
      { new: true }
    );
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
