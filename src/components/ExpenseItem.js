import "./ExpenseItem.css";

// Component Template Section
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <h2>{props.date.toISOString()}</h2>
      <div className="expense-item__description">
        <div>{props.title}</div>
        <div className="expense-item__price">RM{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
