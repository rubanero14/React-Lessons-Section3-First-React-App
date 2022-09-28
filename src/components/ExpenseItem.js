// Import specific CSS style file for this component
import "./ExpenseItem.css";

// Import child component for this component
import ExpenseDate from "./ExpenseDate";

// Component Template Section
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">RM{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
