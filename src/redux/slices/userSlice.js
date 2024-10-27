import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

// Asynchronous signup action to call the backend API
export const signup = createAsyncThunk(
  "user/signup",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/v1/users/register",
        {
          name,
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      // Handle error message returned from the server
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/v1/users/login",
        {
          email,
          password,
        }
      );
      return response.data; // Return the user data received from the server
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login: (state, action) => {
    //   const { email, password } = action.payload;
    //   const user = state.users.find(
    //     (user) => user.email === email && user.password === password
    //   );
    //   if (user) {
    //     state.currentUser = user;
    //     state.isAuthenticated = true;
    //     state.error = null;
    //   } else {
    //     state.error = "Invalid email or password";
    //   }
    // },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload; // Capture error message from API
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload; // Capture error message from API
      });
  },
});

export const { logout, clearError } = userSlice.actions;

export default userSlice.reducer;
