import React from 'react';
import './App.css';

import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {  
      date: new Date(2023, 0, 10),
      title: "new book",
      price: 30.99
    },
    {
      date: new Date(2023, 0, 10),
      title: "new jeans",
      price: 99.99
    }
  ];

  return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    </div>
  );
}

export default App;