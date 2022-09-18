export interface ExpenseStateProps {
  balance: number;
  expense: number;
  income: number;
  expenseHistory: {
    expenseName: string;
    amount: number;
  }[];
}
