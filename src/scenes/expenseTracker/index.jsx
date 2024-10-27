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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExpenses,
  addExpense,
  deleteExpense,
} from "../../redux/slices/expenseSlice";
import {
  fetchIncomes,
  addIncome,
  deleteIncome,
} from "../../redux/slices/incomeSlice";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ExpenseTracker = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expenses);
  const { incomes } = useSelector((state) => state.incomes);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeCategory, setIncomeCategory] = useState("");

  useEffect(() => {
    const month = selectedDate.format("YYYY-MM");
    dispatch(fetchExpenses(month));
    dispatch(fetchIncomes(month));
  }, [dispatch, selectedDate]);

  const handleDateChange = (newDate) => setSelectedDate(newDate);

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box m="20px">
        <Header
          title="EXPENSE TRACKER"
          subtitle="Keep track of your expenses and income"
        />

        <Box mt="10px" width="250px">
          <DatePicker
            label="Select Month"
            views={["year", "month"]}
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Box>

        {/* Add Expense Form */}
        <Box mt="20px" p="16px" bgcolor={colors.grey[300]} borderRadius="8px">
          <Typography variant="h6" color={colors.greenAccent[400]} gutterBottom>
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
          <Typography variant="h6" color={colors.greenAccent[400]} gutterBottom>
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
          <Typography variant="h6" color={colors.greenAccent[400]} gutterBottom>
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
                <Button
                  color="error"
                  onClick={() => dispatch(deleteExpense(expense._id))}
                >
                  Delete
                </Button>
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
          <Typography variant="h6" color={colors.greenAccent[400]} gutterBottom>
            Income List
          </Typography>
          <List>
            {incomes.map((income, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={income.name}
                  secondary={`$${income.amount.toFixed(2)} - ${
                    income.category
                  }`}
                />
                <Button
                  color="error"
                  onClick={() => dispatch(deleteIncome(income._id))}
                >
                  Delete
                </Button>
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
          <Typography variant="h6" color={colors.greenAccent[400]} gutterBottom>
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
    </LocalizationProvider>
  );
};

export default ExpenseTracker;
