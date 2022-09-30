// Import CSS file for this component
import "./Expenses.css";

// Import child component for this component
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  // Iterating list of expenses from props object using .map() js utility function
  return (
    <div className="expenses">
      {props.expensesData.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
