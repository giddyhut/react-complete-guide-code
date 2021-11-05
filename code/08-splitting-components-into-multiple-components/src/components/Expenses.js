import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2021');
    const expenses = props.expensesList;

    const changeFilterHandler = year => {
        console.log("In Expenses");
        console.log(year);
        setFilterYear(year);
    };
//.filter(i => (i.date.getFullYear() == filteredYear))

    const filteredExpenses = expenses.filter(i => (i.date.getFullYear() == filteredYear));

    //{filteredExpenses.length === 0 && <p>No expenses found.</p>}
    return (
        <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
        
        </div>
    );
}

export default Expenses;