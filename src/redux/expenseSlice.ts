import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExpenseStateProps, ExpenseProps } from '../interfaces';

const initialState: ExpenseStateProps = {
  balance: 0,
  expense: 0,
  income: 0,
  expenseHistory: []
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpenseToHistory: (state, action: PayloadAction<ExpenseProps>) => {
      if (typeof action.payload.amount !== 'number') {
        state.expenseHistory.push({
          expenseName: action.payload.expenseName,
          amount: parseFloat(action.payload.amount)
        });
      }
    },
    calculateBalance: (state, action: PayloadAction<void>) => {
      state.balance = state.expenseHistory.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
    },
    calculateIncome: (state, action: PayloadAction<void>) => {
      state.income = state.expenseHistory.reduce((acc, curr) => {
        if (curr.amount > 0) {
          return Math.abs(acc + curr.amount);
        }
        return acc;
      }, 0);
    },
    calculateExpense: (state, action: PayloadAction<void>) => {
      state.expense = state.expenseHistory.reduce((acc, curr) => {
        if (curr.amount < 0) {
          return Math.abs(acc + curr.amount);
        }
        return acc;
      }, 0);
    }
  }
});

export const {
  calculateBalance,
  addExpenseToHistory,
  calculateExpense,
  calculateIncome
} = expenseSlice.actions;

export default expenseSlice.reducer;
