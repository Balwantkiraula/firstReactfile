
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses=[ 
    {title: 'Car Insurance', amount: 256.45, date: new Date(2023, 3, 16)}, 
  {title: 'Car', amount: 25687.45, date: new Date(2023, 3, 6)}, 
  {title: 'Insurance', amount: 2596.45, date: new Date(2023, 3, 19)}, 
  {title: 'Car In', amount: 2560.45, date: new Date(2013, 3, 16)}, 
];
  return (
    <div >
      <h2> Expense Item</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem> 
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
       <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem> 
       <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
