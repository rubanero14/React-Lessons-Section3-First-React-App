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

  // Iterating list of expenses from props object using .map() js utility function
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          initialYear={setInitialYearValues}
          onFilterDateChange={filterDateSelectionHandler}
        />

        {props.expensesItems.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
