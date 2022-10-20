// Import specific CSS style file for this component
import "./ExpenseItem.css";

// Import child component for this component
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Component Template Section
const ExpenseItem = (props) => {
  // useState hook is used to dynamically change values of props or data on the DOM realtime, without it, the page is static
  // useState() takes a param, which is variable that will be changed or manipulated, and useState(var) returns an array with 2 values [var, varManipulatorFunction]
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    // setTitle() is a varManipulatorFunction that takes a new param which is the new value to be assigned replacing the old one and same time refreshes the DOM
    setTitle(`${props.title} ${(Math.random(0, 1) * 10).toFixed(0)}`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">RM{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
