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
    }
  }
});
