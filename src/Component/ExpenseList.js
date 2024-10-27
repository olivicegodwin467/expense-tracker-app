import React from 'react';

const ExpenseList = ({ expenses, filterCategory, onEditExpense, onDeleteExpense }) => {
  const filteredExpenses = filterCategory
    ? expenses.filter((expense) => expense.category === filterCategory)
    : expenses;

  const groupedExpenses = filteredExpenses.reduce((groups, expense) => {
    const { category, amount, description, date } = expense;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push({ amount, description, date });
    return groups;
  }, {});

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-2">Expenses</h2>

      {Object.keys(groupedExpenses).length === 0 ? (
        <p>No expenses to show.</p>
      ) : (
        Object.keys(groupedExpenses).map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-xl font-bold">{category}</h3>
            <ul className="space-y-2">
              {groupedExpenses[category].map((expense, index) => (
                <li key={index} className="p-4 bg-white rounded shadow flex justify-between items-center flex-col sm:flex-row">
                  <div className="flex-1 mb-2 sm:mb-0">
                    <h3 className="text-lg font-semibold">${expense.amount}</h3>
                    <p className="text-sm text-gray-600">{expense.description}</p>
                    <p className="text-sm text-gray-500">{expense.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onEditExpense(index)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteExpense(index)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;
