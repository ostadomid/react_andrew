import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux';



const Home = () => (
    <div>
        <h1>Home Page</h1>    
    </div>
);

const Items = (props) => (
    <div>
        <h1>Items:</h1>    
        <ul>
            {props.items.map((item, index) => (<li key={index}>{item}</li>))}    
        </ul>
        <input type="text" id="newItem" />
        <button onClick={
            () => {
                const value = document.getElementById('newItem').value;
                value && props.addNewItem(value);
            }
        }   
        >Add</button>
    </div>
);

const mapStateToProps = (state) => ({
    items : state
});
const mapDispatchToProps = (dispatch) => ({ 
    addNewItem: (item) => {
        dispatch({ type: 'ADD', newItem: item });
    }
});

const HocItems = connect(mapStateToProps,mapDispatchToProps)(Items);



const reducer = (state=['Ali','Reza','Sina'], action) => { 
    switch (action.type) {
        case 'ADD':
            return [...state, action.newItem];
        default:
            return state;    
    }
};
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const routes = (

    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/items" component={HocItems}/>
            </Switch>    
        </BrowserRouter>    
    </Provider>
    
);

ReactDOM.render(routes, document.getElementById('app'));