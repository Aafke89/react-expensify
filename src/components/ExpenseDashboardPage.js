import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component  
        <ExpensListFilters /> 
        <ExpenseList /> 
    </div>
)

export default ExpenseDashboardPage;