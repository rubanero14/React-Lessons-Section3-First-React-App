// Import child component for this component
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Intiating App function using ES6 way (Arrow function), rather than traditional function App(){} function syntax
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Car Insurance",
      amount: 483.0,
      date: new Date(2022, 8, 20),
    },
    {
      id: 2,
      title: "Mortgage",
      amount: 2500.0,
      date: new Date(2022, 8, 21),
    },
    {
      id: 3,
      title: "Car Service",
      amount: 1300.0,
      date: new Date(2022, 8, 2),
    },
    {
      id: 4,
      title: "New Udemy Course",
      amount: 70.0,
      date: new Date(2022, 8, 30),
    },
  ]);
  // Adding data passed from child component to object bove
  const addNewExpenseHandler = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Creating elements in DOM using Dynamic React method
  // .createElement(htmlElementToBeCreated, config object containing attributes related to this element, ...all other contents between opening and closing of this element)
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement("p", {}, "This is also visible!"),
  //   React.createElement(
  //     Expenses, // For custom elements, dont use string but point it similar to pointing a function
  //     {
  //       expensesData: expenses,
  //     }
  //   )
  // );

  // Creating elements in DOM using JSX React method
  return (
    <div>
      <NewExpense
        ExpensesData={expenses}
        onSavedNewExpense={addNewExpenseHandler}
      />
      <Expenses expensesData={expenses} />
    </div>
  );
};

export default App;
