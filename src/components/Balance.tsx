import { useAppSelector } from '../hooks/hooks';

const Balance = () => {
  const balance = useAppSelector((state) => state.expense.balance);
  return (
    <div>
      Your Balance: <span>$ {balance}</span>
    </div>
  );
};

export default Balance;
