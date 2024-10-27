// slices/expenseSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

// Fetch expenses from the server
export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async () => {
    const response = await axios.get("http://127.0.0.1:8080/api/v1/expenses");
    return response.data;
  }
);
export const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (expenseId) => {
    await axios.delete(`http://127.0.0.1:8080/api/v1/expenses/${expenseId}`);
    return expenseId;
  }
);
// Add a new expense
export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (expense) => {
    const response = await axios.post(
      "http://127.0.0.1:8080/api/v1/expenses",
      expense
    );
    return response.data;
  }
);

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    clearExpenses: (state) => {
      state.expenses = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          (expense) => expense.id !== action.payload
        );
      });
  },
});

export const { clearExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;
