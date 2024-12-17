import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="expense-list">
      {expenses.length === 0 && <p>No expenses yet!</p>}
      {expenses.map((expense) => (
        <div className="expense-item" key={expense.id}>
          <span>{expense.title}</span>
          <span>${expense.amount.toFixed(2)}</span>
          <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
