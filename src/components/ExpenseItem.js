import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>15th September 2022</h2>
      <div className="expense-item__description">
        <div>Car Insurance</div>
        <div className="expense-item__price">RM 490.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
