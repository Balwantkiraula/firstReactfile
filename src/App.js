import React,{ useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';



const xpenses=[  
  {title: 'Car Insurance', amount: 256.45, date: new Date(2023, 3, 16)}, 
{title: 'Car', amount: 25687.45, date: new Date(2023, 3, 6)}, 
{title: 'Bike Insurance', amount: 296.45, date: new Date(2023, 1, 19)}, 
{title: 'Bike', amount: 22560.45, date: new Date(2013, 2, 16)}, 
];
const App = () => {
const [expenses, setExpenses] = useState(xpenses);

const addExpenseHandler= (expense) =>{
 setExpenses((prevExpenses) =>{
  return [expense, ...prevExpenses]
 })
}
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses} />

    </div>
  );
}

export default App;
