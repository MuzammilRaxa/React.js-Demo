import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import { GlobalProvider } from './context/GlobalState';
import TransactionList from './components/TransactionList';
import AddTransaciton from './components/AddTransaciton';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className=''>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaciton />
      </div>
    </GlobalProvider>
  );
}

export default App;
