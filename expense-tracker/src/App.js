import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
