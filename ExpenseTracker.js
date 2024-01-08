// ExpenseTracker.js
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseItem.css";

function ExpenseTracker() {
  
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Car insurance", amount: 200 },
    
  ]);

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>

     
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}

      
      <form>
        <label>
          Expense Title:
          <input type="text" />
        </label>
        <label>
          Expense Amount:
          <input type="number" />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseTracker;
