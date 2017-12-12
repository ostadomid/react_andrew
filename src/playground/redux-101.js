import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import uuid4 from "uuid/v4";
import uuid1 from "uuid/v1";

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid1(), ...action.newExpense }];

    case "REMOVE":
      return state.filter(expense => (expense.id !== action.id ? true : false));

    case "EDIT":
      return state.map(
        expense =>
          expense.id === action.id ? { ...expense, ...action.updates } : expense
      );

    default:
      return state;
  }
};
const filterReducer = (state = { sort: "date", text: "" }, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, text: action.text };
    case "SET_SORT":
      return { ...state, sort: action.text };
    default:
      return state;
  }
};

const addExpense = ({
  description,
  amount,
  createdAt = new Date().getTime()
}) => ({
  type: "ADD",
  newExpense: {
    description,
    amount,
    createdAt
  }
});

const editExpense = (id, updates) => ({
  type: "EDIT",
  id,
  updates
});

const removeExpense = id => ({
  type: "REMOVE",
  id
});

const setFilter = text => ({
  type: "SET_FILTER",
  text
});

const setSort = text => ({
  type: "SET_SORT",
  text
});

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

const Expenses = props => {
  return (
    <ul>
      {props.store.getState().expenses.map(expense => (
        <li>
          ID : {expense.id} - Description : {expense.description} Amount :{" "}
          {expense.amount}
        </li>
      ))}
    </ul>
  );
};

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: "HyperMe", amount: 6500 }));
store.dispatch(addExpense({ description: "Drugstore", amount: 32000 }));
const idEdit = store.getState().expenses[0].id;
const idDelete = store.getState().expenses[1].id;
store.dispatch(editExpense(idEdit, { description: "Tavakkoli" }));
//store.dispatch(removeExpense(idDelete));
store.dispatch(setFilter("drug"));
store.dispatch(setSort("amount"));

const Info = props => (
  <div>
    <h2>Hello Dear {props.name}</h2>
    <button onClick={() => { alert(props.name) }}>Who am I ?</button>
  </div>
);

const MakeImportant = Wrapped => {
  return props => {
    return (
      <div>
        <h1>This is very Important Information {props.name} !</h1>
        <Wrapped {...props} />
      </div>
    );
  };
};

const ImportantInfo = MakeImportant(Info);

ReactDOM.render(<ImportantInfo name="BoB" />, document.getElementById("app"));

//ReactDOM.render(<Expenses store={store} />, document.getElementById('app'));
