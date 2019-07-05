import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary /> 
        <ExpensListFilters /> 
        <ExpenseList /> 
    </div>
)

export default ExpenseDashboardPage;