// Import CSS file for this component
import React, { useState } from "react";
import "./Expenses.css";

// Import child component for this component
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterDateSelectionHandler = (year) => {
    return setFilteredYear(year);
  };

  // Iterating list of expenses from props object using .map() js utility function
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          initialYear={filteredYear}
          onFilterDateChange={filterDateSelectionHandler}
        />
        {props.expensesData.map((expense) => (
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
