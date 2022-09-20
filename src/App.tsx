import { Container } from 'react-bootstrap';
import Balance from './components/Balance';
import ExpenseHistory from './components/ExpenseHistory';
import IncomeAndExpense from './components/IncomeAndExpense';
import TransactionForm from './components/TransactionForm';

function App() {
  return (
    <Container
      className='d-flex flex-column align-items-center mt-5 card shadow rounded p-3'
      style={{ maxWidth: '380px' }}
    >
      <Balance />
      <IncomeAndExpense />
      <ExpenseHistory />
      <TransactionForm />
    </Container>
  );
}

export default App;
