// Import child component for this component
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
      <Expenses expensesData={expenses} />
    </div>
  );
}

export default App;
