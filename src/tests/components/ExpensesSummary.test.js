import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('Should return correctly summaryExpenses with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})

test('Should return correctly summaryExpenses with more expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={2380} />);
    expect(wrapper).toMatchSnapshot();
})
