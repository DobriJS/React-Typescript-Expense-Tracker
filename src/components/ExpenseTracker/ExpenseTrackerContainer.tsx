import { Container } from 'react-bootstrap';
import IncomeAndExpense from './IncomeAndExpense';
import Balance from './Balance';
import ExpenseHistory from './ExpenseHistory';
import TransactionForm from './TransactionForm';

const ExpenseTrackerContainer = () => {
  return (
    <Container
      className='d-flex flex-column align-items-center mt-5 card shadow rounded p-3'
      style={{ maxWidth: '500px' }}
    >
      <Balance />
      <IncomeAndExpense />
      <ExpenseHistory />
      <TransactionForm />
    </Container>
  );
};

export default ExpenseTrackerContainer;
