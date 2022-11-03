import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  // Adding conditional rendering incase no expenses found, this is gated expression since if the condition is true, it returns the h2 tag and ends the function, hence
  // the return for ExpenseItem components wont fire
  if (props.filteredData.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredData.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
