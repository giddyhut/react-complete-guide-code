import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const expenses = props.expensesList;

    return (
        <div>
        {expenses.map(item => 
            <ExpenseItem
                id={item.id}
                key={item.key}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        )}
        </div>
    );
}

export default Expenses;