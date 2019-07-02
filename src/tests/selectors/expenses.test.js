import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('Should filter by text value', () => {
    const filters = {
        text: "e",
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
})

test('Should filter by startDate', () => {
    const filters = {
        text: "e",
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
})

test('Should sort by enddate', () => {
    const filters = {
        text: "",
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(1, 'days')
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0]])
})

test('Should sort by date', () => {
    const filters = {
        text: "",
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})

test('Should sort by amount', () => {
    const filters = {
        text: "",
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})



// test('Should sort by amount', () => {
//     const filters = {
//         text: "e",
//         sortBy: 'date',
//         startDate: moment(0),
//         endDate: undefined
//     }
//     const result = selectExpenses(expenses, filters);
//     expect(result).toEqual([expenses[2], expenses[1]])
// })


// import moment from 'moment';

// export default (expenses, {text, sortBy, startDate, endDate}) => {
//     return expenses.filter((expense) => {
//         const createdAtMoment = moment(expense.createdAt);
//         const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
//         const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1;
//         } else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };