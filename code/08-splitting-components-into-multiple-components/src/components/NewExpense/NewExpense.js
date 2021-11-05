import React from 'react';
import ExpenseForm  from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const showNewFormHandler = (event) => {
        console.log("Do you remember that old lullabi");
        props.onToggle(true);
    };

    const hideNewFormHandler = (event) => {
        console.log("Do you remember that old lullabi??");
        props.onToggle(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 99999),
            key: Math.floor(Math.random() * 99999)
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    if(props.showForm) {
        return <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideNewFormHandler} />
        </div>;
    } else {
     //<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
     return <div className="new-expense">
        <button onClick={showNewFormHandler}>Add New Expense</button>
        </div>       
    }
};

export default NewExpense;

