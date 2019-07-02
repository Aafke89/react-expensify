import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter,  
    sortByAmount, 
    sortByDate 
} from '../../actions/filters'

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should set a text filter', () => {
    const action = setTextFilter('foo');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'foo'
    })
})

test('Should set a text filter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})