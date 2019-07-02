import { AddExpense, removeExpense, editExpense, addExpense } from '../../actions/expenses'

test(`Should remove an expense`, () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    })
})

test(`Should edit an expense`, () => {
    const action = editExpense('123abc', {description: 'test', amount: 100, createdAt: 0, note: ""});
    expect(action).toEqual({
        id: '123abc', 
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'test', 
            note: "",
            amount: 100, 
            createdAt: 0 
        }
    })
})

test('Shoud add an expense with provided values', () => {
    const expenseData = {
        description: 'test', 
        amount: 100, 
        createdAt: 0, 
        note: ''
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Shoud add an expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0, 
            id: expect.any(String)
        }
    })

})