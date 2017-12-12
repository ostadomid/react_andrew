import { createStore, combineReducers } from 'redux';
import {
  addExpenseAction,
  editExpenseAction,
  removeExpenseAction
} from "./actions";
import uuid from 'uuid/v1';

const expenseDefault = [];
const filterDefault = { text: '', sort: 'date', startDate: undefined, endDate: undefined };

const expenseReducer = (state = expenseDefault, action) => { 
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, { id: uuid(), ...action.newExpense, createdAt: new Date().getTime() }];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                return expense.id == action.id && { ...expense, ...action.updates } || expense;
            });
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        default:
            return state;
    }
};
const filterReducer = (state = filterDefault, action) => { 
    switch (action.type) {
        case 'SET_FILTER':
            return { ...state, text: action.text };
        case 'SET_SORT':
            return { ...state, sort: action.sort };    
        default:
            return state;
    }
};

export default () => createStore(combineReducers({ expenses: expenseReducer, filter: filterReducer }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

