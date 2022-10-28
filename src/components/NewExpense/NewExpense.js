import "./NewExpense.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
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

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
