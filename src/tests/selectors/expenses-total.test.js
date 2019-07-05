import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should retun 0 if no expenses', () => {
    const result = totalExpenses([]);
    expect(result).toEqual(0);
})

test('Should correctly add up a single expense', () => {
    const result = totalExpenses([expenses[0]]);
    expect(result).toBe(50);
})

test('Should correctly add up multiple expenses', () => {
    const result = totalExpenses(expenses);
    expect(result).toBe(945);
})
