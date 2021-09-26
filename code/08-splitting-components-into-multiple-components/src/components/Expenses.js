import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import React, { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2021');
    const expenses = props.expensesList;

    const changeFilterHandler = year => {
        console.log("In Expenses");
        console.log(year);
        setFilterYear(year);
    };
//.filter(i => (i.date.getFullYear() == filteredYear))
    return (
        <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
        {expenses.filter(i => (i.date.getFullYear() == filteredYear)).map(item => 
            <ExpenseItem
                id={item.id}
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        )}
        </div>
    );
}

export default Expenses;