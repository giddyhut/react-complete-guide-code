import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', key: "e2", title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Moon Mooncakes',
    amount: 45,
    date: new Date(2021, 5, 13),
  }
];

const App= () => {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const[showToggle, setShowToggle] = useState(false);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    //This to update state based on previous state - inline function
    setExpenses((prevExpenses) => {
      let abc = [expense, ...prevExpenses];
      console.log(abc);
      return abc;
    });
    //Hide form
    setShowToggle(false);
  };

  const hideForm = (toggle) => {
    console.log("Hide form due to cancellation");
    //Hide form
    setShowToggle(toggle);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} showForm={showToggle} onToggle={hideForm} />
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;
