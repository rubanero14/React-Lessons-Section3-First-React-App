// Import specific CSS style file for this component
import "./ExpenseItem.css";

// Import child component for this component
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Component Template Section
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">RM{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
