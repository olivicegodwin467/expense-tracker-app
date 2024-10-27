import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense, expenseToEdit }) => {
  const [amount, setAmount] = useState(expenseToEdit.amount || '');
  const [category, setCategory] = useState(expenseToEdit.category || []);
  const [date, setDate] = useState(expenseToEdit.date || '');
  const [description, setDescription] = useState(expenseToEdit.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ amount: parseFloat(amount), category, date, description });
    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        className="p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
        className="p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
