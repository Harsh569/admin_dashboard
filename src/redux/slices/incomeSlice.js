import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch incomes
export const fetchIncomes = createAsyncThunk(
  "incomes/fetchIncomes",
  async () => {
    const response = await axios.get("http://127.0.0.1:8080/api/v1/incomes");
    return response.data;
  }
);

// Async thunk to add a new income
export const addIncome = createAsyncThunk(
  "incomes/addIncome",
  async (income) => {
    const response = await axios.post(
      "http://127.0.0.1:8080/api/v1/incomes",
      income
    );
    return response.data;
  }
);

// Create the income slice
const incomeSlice = createSlice({
  name: "incomes",
  initialState: {
    incomes: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncomes.fulfilled, (state, action) => {
        state.incomes = action.payload;
        state.status = "success";
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.incomes.push(action.payload);
      });
  },
});

export default incomeSlice.reducer;
