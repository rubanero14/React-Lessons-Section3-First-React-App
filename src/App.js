import ExpenseItem from "./components/ExpenseItem";

function App() {
  const Expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 483.0,
      date: new Date(2022, 8, 20),
    },
    {
      id: 2,
      title: "Mortgage",
      amount: 2500.0,
      date: new Date(2022, 8, 21),
    },
    {
      id: 3,
      title: "Car Service",
      amount: 1300.0,
      date: new Date(2022, 8, 2),
    },
    {
      id: 4,
      title: "New Udemy Course",
      amount: 70.0,
      date: new Date(2022, 8, 30),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem
        title={Expenses[0].title}
        amount={Expenses[0].amount}
        date={Expenses[0].date}
      />
      <ExpenseItem
        title={Expenses[1].title}
        amount={Expenses[1].amount}
        date={Expenses[1].date}
      />
      `
      <ExpenseItem
        title={Expenses[2].title}
        amount={Expenses[2].amount}
        date={Expenses[2].date}
      />
      <ExpenseItem
        title={Expenses[3].title}
        amount={Expenses[3].amount}
        date={Expenses[3].date}
      />
      `
    </div>
  );
}

export default App;
