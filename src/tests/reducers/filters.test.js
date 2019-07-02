import moment from 'moment';
import filterReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'amount', 
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sortby to date', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('Should set sortby to amount', () => {
    const currentState = {
        text: '',
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    }

    const action = { type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('Should set Textfilter', () => {
    const text = 'Foo';
    const action = { type: 'SET_TEXT_FILTER', text}
    const state = filterReducer(undefined, action);
    expect(state.text).toBe('Foo');
})

test('Should set StartDateFilter', () => {
    const startDate = moment(0);
    const action = { type: 'SET_START_DATE', startDate }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);

})

test('Should set EndDateFilter', () => {
    const endDate = moment(0);
    const action = { type: 'SET_END_DATE', endDate }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
})