import React from "react";

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="odd:bg-white even:bg-gray-50">
              <td className="border p-2">{expense.name}</td>
              <td className="border p-2">{expense.description}</td>
              <td className="border p-2">{expense.category}</td>
              <td className="border p-2">${expense.amount}</td>
              <td className="border p-2">{expense.date}</td>
              <td className="border p-2">
                <button
                  onClick={() => onDelete(expense.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
