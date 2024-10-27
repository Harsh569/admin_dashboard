// Update ExpenseTracker.js
import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { fetchExpenses, addExpense } from "../../slices/expenseSlice";
import { fetchExpenses, addExpense } from "../../redux/slices/expenseSlice";

const ExpenseTracker = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expenses);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(""); // New state for category

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleAddExpense = () => {
    if (expenseName && amount && category) {
      // Ensure category is also checked
      dispatch(
        addExpense({ name: expenseName, amount: parseFloat(amount), category })
      ); // Include category in dispatch
      setExpenseName("");
      setAmount("");
      setCategory(""); // Reset category
    }
  };

  const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Box m="20px">
      <Header title="EXPENSE TRACKER" subtitle="Keep track of your expenses" />

      {/* Add Expense Form */}
      <Box mt="20px" p="16px" bgcolor={colors.grey[300]} borderRadius="8px">
        <Typography variant="h6" color={colors.primary[400]} gutterBottom>
          Add a New Expense
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Expense Name"
              variant="outlined"
              fullWidth
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              InputProps={{
                style: { color: colors.primary[400] }, // Change input text color
              }}
              InputLabelProps={{
                style: { color: colors.primary[400] }, // Change label color
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Amount"
              variant="outlined"
              type="number"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              InputProps={{
                style: { color: colors.primary[400] }, // Change input text color
              }}
              InputLabelProps={{
                style: { color: colors.primary[400] }, // Change label color
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)} // Handle category
              InputProps={{
                style: { color: colors.primary[400] }, // Change input text color
              }}
              InputLabelProps={{
                style: { color: colors.primary[400] }, // Change label color
              }}
              change
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddExpense}
          sx={{ mt: 2 }}
        >
          Add Expense
        </Button>
      </Box>

      {/* Expense List */}
      <Box mt="20px">
        <Typography variant="h6" color={colors.primary[400]} gutterBottom>
          Expense List
        </Typography>
        <List>
          {expenses.map((expense, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={expense.name}
                secondary={`$${expense.amount.toFixed(2)} - ${
                  expense.category
                }`} // Display category
              />
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            <ListItemText
              primary="Total"
              secondary={`$${totalAmount.toFixed(2)}`}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ExpenseTracker;
