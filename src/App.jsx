// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// App.jsx
import React, { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import SearchAndSort from "./Components/SearchAndSort";

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
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Expense Tracker</h1>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left side: Form */}
        <div className="md:col-span-1 bg-white border border-blue-200 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Add New Expense</h2>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
  
        {/* Right side: Search + Table */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-300 p-4 rounded shadow">
            <SearchAndSort setSearch={setSearch} setSortBy={setSortBy} />
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded shadow">
            <ExpenseTable expenses={sortedExpenses} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default App;