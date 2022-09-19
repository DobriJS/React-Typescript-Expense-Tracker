import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAppDispatch } from '../hooks/hooks';
import { ExpenseProps } from '../interfaces';
import {
  addExpenseToHistory,
  calculateBalance,
  calculateExpense,
  calculateIncome
} from '../redux/expenseSlice';

const TransactionForm = () => {
  const dispatch = useAppDispatch();
  const [expense, setExpense] = useState<ExpenseProps>({
    expenseName: '',
    amount: ''
  });
  const onChange = <T extends keyof ExpenseProps>(
    key: T,
    value: ExpenseProps[T]
  ) => {
    setExpense({ ...expense, [key]: value });
  };

  const onClick = () => {
    if (
      typeof expense.amount === 'string' &&
      !isNaN(parseFloat(expense.amount))
    ) {
      dispatch(addExpenseToHistory(expense));
      dispatch(calculateBalance());
      dispatch(calculateIncome());
      dispatch(calculateExpense());
    }
  };

  return (
    <div className='mt-3'>
      <h3 className='border-bottom border-2'>Add New Transaction</h3>
      <Form.Group className='mb-3' controlId='controlInput'>
        <Form.Label>Text</Form.Label>
        <Form.Control
          onChange={(e) =>
            onChange(e.target.name as keyof ExpenseProps, e.target.value)
          }
          name='expenseName'
          type='text'
          placeholder='Enter Text'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='controlInput'>
        <Form.Label>Amount</Form.Label>
        <Form.Control
          onChange={(e) =>
            onChange(e.target.name as keyof ExpenseProps, e.target.value)
          }
          name='amount'
          type='text'
          placeholder='Enter Amount'
        />
      </Form.Group>
      <Button onClick={onClick}>Add Transaction</Button>
    </div>
  );
};

export default TransactionForm;
