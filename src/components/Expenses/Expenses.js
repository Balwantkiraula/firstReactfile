import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear]=useState('2020');
    const filterChangedHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }
return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onchangeFilter={filterChangedHandler}/>
        {props.items.map( (expense) =>(
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>  
        ))}
   
    </Card>
);
}
export default Expenses;