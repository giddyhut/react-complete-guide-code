import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter';

function App() {
  const expenses = [
    {
      id: 'e1',
      key: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', key: "e2", title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      key: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      key: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      key: 'e5',
      title: 'New Moon Mooncakes',
      amount: 45,
      date: new Date(2021, 5, 13),
    }
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
  };

  const changeFilterHandler = year => {
    console.log("In App.js #2");
    console.log(year);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter onChangeFilter={changeFilterHandler} />
      <Expenses expensesList={expenses} />
    </div>
  );
}

export default App;
