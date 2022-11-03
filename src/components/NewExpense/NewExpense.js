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
        <button onClick={toggleFormVisibilityHandler}>Add New Expense</button>
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
