// Import child component for this component
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const MOCK_DATA = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 483.0,
    date: new Date(2019, 8, 20),
  },
  {
    id: 2,
    title: "Mortgage",
    amount: 2500.0,
    date: new Date(2020, 8, 21),
  },
  {
    id: 3,
    title: "Car Service",
    amount: 1300.0,
    date: new Date(2021, 8, 2),
  },
  {
    id: 4,
    title: "New Udemy Course",
    amount: 70.0,
    date: new Date(2022, 8, 30),
  },
];

// Intiating App function using ES6 way (Arrow function), rather than traditional function App(){} function syntax
const App = () => {
  const [expenses, setExpenses] = useState(MOCK_DATA);
  // Adding data passed from child component to object bove
  const addNewExpenseHandler = (newExpense) => {
    // Best practice to update list or array is by using callback instead of passing array or object
    setExpenses(() => {
      return [newExpense, ...expenses];
    });
  };

  // Creating elements in DOM using JSX React method
  return (
    <div>
      <NewExpense
        ExpensesData={expenses}
        onSavedNewExpense={addNewExpenseHandler}
      />
      <Expenses expensesItems={expenses} />
    </div>
  );
};

export default App;
