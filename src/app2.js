import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpenseAction, setFilter, setSort } from './store/actions';

import 'normalize.css/normalize.css';
import './styles/mystyles.scss';

import faker from 'faker';



faker.name.firstName();


const store = configureStore();
for (let i = 0; i < 10; i++){
    let description = faker.name.firstName() + ' ' + faker.name.lastName();
    let amount = faker.finance.amount(100, 30000,0);

    store.dispatch(addExpenseAction({ description, amount }));

}


window.store = store;
const jsx = (
    <Provider store={store}>
        <AppRouter/>    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));






//import List from './List';
// class Bork{
//     name = "Ali";
//     getName = () => { 
//         return this.name;
//     };
// }


// let bork = new Bork;
// console.log(bork.getName());

// import ReactModal from 'react-modal';



// class Account extends React.Component{
//     state = { visible: false };
//     toggle = () => this.setState((prevState) => ({ visible: !prevState.visible }));
    

//     render() {
//         return (
//             <div>
//                 <ReactModal isOpen={this.state.visible} contentLabel="" onRequestClose={this.toggle}>
//                     <h3>Hi there !</h3>    
//                 </ReactModal>
//                 <button onClick={this.toggle }>Toggle</button>    
//             </div>
//         );
//     }
// }






