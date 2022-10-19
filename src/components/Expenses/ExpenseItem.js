// Import specific CSS style file for this component
import "./ExpenseItem.css";

// Import child component for this component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Component Template Section
const clickHandler = () => {
  console.log("Clicked");
};
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">RM{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
