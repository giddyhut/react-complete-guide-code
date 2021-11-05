import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    console.log('Clicked!!! ' + props.date.getFullYear());
    setTitle(title + ' Updated!');
  };

  return (
    <li className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title} ({props.id})</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </li>
  );
}

export default ExpenseItem;
