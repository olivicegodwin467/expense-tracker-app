import React, { useState, useEffect } from 'react';
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from './Component/ExpenseList';
import ExpenseChart from './Component/ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingExpense, setEditingExpense] = useState({ amount: '', category: '', date: '', description: '' });

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
      console.log("Loaded expenses from localStorage:", JSON.parse(savedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    console.log("Saved expenses to localStorage:", expenses);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  const editExpense = (index) => {
    setEditingIndex(index);
    setEditingExpense(expenses[index]);
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[editingIndex] = updatedExpense;
    setExpenses(updatedExpenses);
    setEditingIndex(null);
    setEditingExpense({ amount: '', category: '', date: '', description: '' });
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>

      {/* Expense form */}
      <ExpenseForm
        onAddExpense={editingIndex === null ? addExpense : updateExpense}
        expenseToEdit={editingExpense}
      />

      {/* Category filter */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Filter by Category</label>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="mt-1 p-2 border w-full"
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Rent">Rent</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Expense list */}
      <ExpenseList
        expenses={expenses}
        filterCategory={filterCategory}
        onEditExpense={editExpense}
        onDeleteExpense={deleteExpense}
      />

      {/* Expense Chart */}
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;
