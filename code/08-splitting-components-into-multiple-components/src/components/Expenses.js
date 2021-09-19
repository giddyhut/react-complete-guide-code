import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    const expenses = props.expensesList;

    return (
        <div>
        {expenses.map(item => 
            <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        )}
        </div>
    );
}

export default Expenses;