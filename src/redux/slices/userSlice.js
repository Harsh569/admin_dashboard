import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      password: "Admin@123",
      role: "admin",
    },
  ],
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Invalid email or password";
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    signup: (state, action) => {
      const { name, email, password } = action.payload;
      const exists = state?.users?.some((user) => user.email === email);
      if (!exists) {
        const newUser = {
          id: state?.users?.length + 1,
          name,
          email,
          password,
          role: "user",
        };
        state.users.push(newUser);
        state.currentUser = newUser;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "User with this email already exists";
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { login, logout, signup, clearError } = userSlice.actions;

export default userSlice.reducer;
