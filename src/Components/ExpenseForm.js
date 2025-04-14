import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <input name="name" placeholder="Expense Name" value={formData.name} onChange={handleChange} required className="border p-2" />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="border p-2" />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="border p-2" />
      <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} required className="border p-2" />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required className="border p-2" />
      <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;