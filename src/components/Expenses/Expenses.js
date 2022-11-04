// Import CSS file for this component
import React, { useState } from "react";
import "./Expenses.css";

// Import child component for this component
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          initialYear={setInitialYearValues}
          onFilterDateChange={filterDateSelectionHandler}
        />
        <ExpensesChart expenses={filteredData} />
        <ExpensesList filteredData={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;
