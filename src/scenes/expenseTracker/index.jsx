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
import { fetchExpenses, addExpense } from "../../redux/slices/expenseSlice";
import { fetchIncomes, addIncome } from "../../redux/slices/incomeSlice"; // Import income actions

const ExpenseTracker = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expenses);
  const { incomes } = useSelector((state) => state.incomes); // Get incomes from store
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [incomeName, setIncomeName] = useState(""); // State for income name
  const [incomeAmount, setIncomeAmount] = useState(""); // State for income amount
  const [incomeCategory, setIncomeCategory] = useState(""); // State for income category

  useEffect(() => {
    dispatch(fetchExpenses());
    dispatch(fetchIncomes()); // Fetch incomes on load
  }, [dispatch]);

  const handleAddExpense = () => {
    if (expenseName && amount && category) {
      dispatch(
        addExpense({ name: expenseName, amount: parseFloat(amount), category })
      );
      setExpenseName("");
      setAmount("");
      setCategory("");
    }
  };

  const handleAddIncome = () => {
    if (incomeName && incomeAmount && incomeCategory) {
      dispatch(
        addIncome({
          name: incomeName,
          amount: parseFloat(incomeAmount),
          category: incomeCategory,
        })
      );
      setIncomeName("");
      setIncomeAmount("");
      setIncomeCategory("");
    }
  };

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Box m="20px">
      <Header
        title="EXPENSE TRACKER"
        subtitle="Keep track of your expenses and income"
      />

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
              InputProps={{ style: { color: colors.primary[400] } }}
              InputLabelProps={{ style: { color: colors.primary[400] } }}
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
              InputProps={{ style: { color: colors.primary[400] } }}
              InputLabelProps={{ style: { color: colors.primary[400] } }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              InputProps={{ style: { color: colors.primary[400] } }}
              InputLabelProps={{ style: { color: colors.primary[400] } }}
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

      {/* Add Income Form */}
      <Box mt="20px" p="16px" bgcolor={colors.grey[300]} borderRadius="8px">
        <Typography variant="h6" color={colors.primary[400]} gutterBottom>
          Add a New Income
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Income Name"
              variant="outlined"
              fullWidth
              value={incomeName}
              onChange={(e) => setIncomeName(e.target.value)}
              InputProps={{ style: { color: colors.primary[400] } }}
              InputLabelProps={{ style: { color: colors.primary[400] } }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Amount"
              variant="outlined"
              type="number"
              fullWidth
              value={incomeAmount}
              onChange={(e) => setIncomeAmount(e.target.value)}
              InputProps={{ style: { color: colors.primary[400] } }}
              InputLabelProps={{ style: { color: colors.primary[400] } }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={incomeCategory}
              onChange={(e) => setIncomeCategory(e.target.value)}
              InputProps={{ style: { color: colors.primary[400] } }}
              InputLabelProps={{ style: { color: colors.primary[400] } }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddIncome}
          sx={{ mt: 2 }}
        >
          Add Income
        </Button>
      </Box>

      {/* Expense and Income List */}
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
                }`}
              />
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            <ListItemText
              primary="Total Expenses"
              secondary={`$${totalExpenses.toFixed(2)}`}
            />
          </ListItem>
        </List>
      </Box>

      <Box mt="20px">
        <Typography variant="h6" color={colors.primary[400]} gutterBottom>
          Income List
        </Typography>
        <List>
          {incomes.map((income, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={income.name}
                secondary={`$${income.amount.toFixed(2)} - ${income.category}`}
              />
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            <ListItemText
              primary="Total Income"
              secondary={`$${totalIncome.toFixed(2)}`}
            />
          </ListItem>
        </List>
      </Box>

      <Box mt="20px">
        <Typography variant="h6" color={colors.primary[400]} gutterBottom>
          Summary
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Net Income"
              secondary={`$${(totalIncome - totalExpenses).toFixed(2)}`}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ExpenseTracker;
