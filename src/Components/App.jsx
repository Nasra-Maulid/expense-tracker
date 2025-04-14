// App.jsx
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchAndSort from "./components/SearchAndSort";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(search.toLowerCase()) ||
      expense.description.toLowerCase().includes(search.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortBy) return 0;
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
    <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>
    <ExpenseForm onAddExpense={handleAddExpense} />
    <SearchAndSort setSearch={setSearch} setSortBy={setSortBy} />
    <ExpenseTable expenses={sortedExpenses} onDelete={handleDelete} />
  </div>
  );
  
};

export default App;