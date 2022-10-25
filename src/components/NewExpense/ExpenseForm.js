import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // storing input value into multiple states using useState(), managing states separately, this method allows individually update states
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // this method manages in a single useState, by consolidating usng object structuring, this method only when all states to update
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    // storing the new value into enteredTitle
    // setEnteredTitle(e.target.value);

    // storing the new values and consolidating with other params together of the inputs
    // this importing ...userInput allows to get updated values for other missing properties and and mergein in one go, without it, only enteredTitle will be visible in object
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
  };
  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value);

    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value);

    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
