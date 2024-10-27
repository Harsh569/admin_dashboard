const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectDb");

// databse call
console.log("Database Connecting...");
connectDb();

//rest object
const app = express();

//middlewares

app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/expenses", require("./routes/expenseRoutes"));
app.use("/api/v1/incomes", require("./routes/incomeRoutes"));

//port
const PORT = 8080;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
