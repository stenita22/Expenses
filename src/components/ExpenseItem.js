import React from "react";
import './ExpenseItem.css';

function ExpenseItem(props) {

	console.log(props)


  return (
    <div className="expense-item">
      	<div>{props.data.date.toString()}</div>
      	<div className="expense-item__description">
        	<h2>{props.data.title}</h2>
        	<div className="expense-item__price">{props.data.price}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
