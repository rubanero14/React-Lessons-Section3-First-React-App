// Import CSS file for this component
import React, { useState } from "react";
import "./Expenses.css";

// Import child component for this component
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
// useState hook is used to dynamically change values of props or data on the DOM realtime, without it, the page is static
// useState() takes a param, which is variable that will be changed or manipulated, and useState(var) returns an array with 2 values [var, varManipulatorFunction]
const Expenses = (props) => {
  const setInitialYearValues = () => {
    return new Date().getFullYear().toString();
  };

  const [filteredYear, setFilteredYear] = useState(setInitialYearValues());

  const filterDateSelectionHandler = (year) => {
    return setFilteredYear(year);
  };

  const filteredData = props.expensesItems.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // We can assign JSX contents as variable here and render conditionally at the template below
  let expensesContent = <p>No Expenses found!</p>;
  if (filteredData.length > 0) {
    expensesContent = filteredData.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  // Iterating list of expenses from props object using .map() js utility function
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          initialYear={setInitialYearValues}
          onFilterDateChange={filterDateSelectionHandler}
        />

        {/* 
          In JSX if statement and for loop and other long expressions not
          allowed, hence for if and for loop statements, ternary operators and
          .map() are used 
        */}
        {/* This is longer syntax for ternary opration, for more readable format look the below method */}
        {/* {filteredData.length === 0 ? (
          <p>No Expenses found!</p>
        ) : (
          filteredData.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        )} */}
        {/* 
            Rendering the same thing above with shorter, cleaner and mroe readable syntax, using && operator trick, 
            if the condition on the left of &&  met, right code block will fire!
        */}
        {/* {filteredData.length === 0 && <p>No Expenses found!</p>}
        {filteredData.length > 0 &&
          filteredData.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))} */}

        {/* 
              There is more shorter syntax using JavaScript method, by outsourcing JSX blocks into variable and render conditionally here
        */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
