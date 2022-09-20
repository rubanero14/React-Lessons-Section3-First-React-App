import "./ExpenseItem.css";

// Component Logic Section
const expenseDate = new Date(2022, 8, 20);
const expenseTitle = "Car Insurance";
const expenseAmount = 294.67;

// Component Template Section
function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>{expenseDate.toISOString()}</h2>
      <div className="expense-item__description">
        <div>{expenseTitle}</div>
        <div className="expense-item__price">RM{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
