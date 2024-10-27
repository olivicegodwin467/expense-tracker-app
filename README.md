# Expense Tracker

A simple web application built with React that helps users track their daily expenses. The Expense Tracker allows users to add, display, filter, and calculate their expenses while saving data locally using localStorage or IndexedDB.

## Features

- **Add Expenses**: Easily add new expenses with details such as amount, category, date, and description.
- **Display Expenses**: View a list of all added expenses.
- **Filter by Category**: Filter expenses based on categories like Food, Transport, Rent, and Others.
- **Data Persistence**: Expenses are saved in localStorage or IndexedDB, ensuring data persistence even after refreshing the browser.
- **Expense Chart**: Visualize your expenses distribution using a bar chart.

## Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS (or plain CSS)
- **Charting Library**: Chart.js for visualizing expense distribution

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/olivicegodwin467/expense-tracker-app.git


2. **Directories structure
    expense-tracker/
├── public/
│   ├── index.html              # Main HTML file
│   ├── favicon.ico             # Favicon
│   └── ...                     # Other public assets
├── src/
│   ├── components/             # React components
│   │   ├── ExpenseForm.js      # Component for adding expenses
│   │   ├── ExpenseList.js      # Component for displaying the list of expenses
│   │   ├── ExpenseChart.js      # Component for visualizing expenses in a chart
│   │   └── ...                 # Other components
│   ├── styles/                 # CSS or styling files
│   │   ├── App.css             # Main styles
│   │   └── ...                 # Other styles
│   ├── utils/                  # Utility functions (e.g., for data manipulation)
│   │   └── storage.js          # Functions for localStorage or IndexedDB
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point of the application
│   └── ...                     # Other necessary files
├── .gitignore                   # Git ignore file
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation

