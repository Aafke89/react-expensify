import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();


store.dispatch(addExpense({ description: 'Water Bill', amount: 600, createdAt: 1}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 4000, createdAt: -1}));
store.dispatch(addExpense({ description: 'Rent', amount: 200, createdAt: 0}));

const state = store.getState();
console.log(state);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));