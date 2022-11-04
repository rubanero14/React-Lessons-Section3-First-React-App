import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const IdGenerator = (data) => {
    return [...data].length + 1;
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: IdGenerator(props.ExpensesData),
      ...enteredExpenseData,
    };

    // Passing data to parent via using custom prop functions created in the parent component one level at a time
    props.onSavedNewExpense(expenseData);
  };

  const toggleFormVisibilityHandler = () => {
    // one-liner code for toggling previous value
    return setFormIsVisible((val) => !val);
  };

  // Conditionally rendering components based on state
  return (
    <div className="new-expense">
      {!formIsVisible && (
        <div className="new-expense__button-nav">
          <a
            href="https://github.com/rubanero14/React-Lessons-Section3-First-React-App"
            target="_blank"
          >
            <i class="bi bi-filetype-jsx"></i> Source Code
          </a>
          <button onClick={toggleFormVisibilityHandler}>
            <i class="bi bi-wallet2"></i> Add New Expense
          </button>
        </div>
      )}
      {formIsVisible && (
        <ExpenseForm
          onSubmitExpenseForm={saveExpenseDataHandler}
          formVisibilityToggle={toggleFormVisibilityHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
