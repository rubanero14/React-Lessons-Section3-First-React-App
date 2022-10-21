import "./NewExpense.css";
import React, { useState } from "react";
import Form from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <Form />
    </div>
  );
};

export default NewExpense;
