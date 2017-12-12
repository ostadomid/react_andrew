import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Edit from './Edit';
import ExpenseForm from './ExpenseForm';
import NotFound from './NotFound';

export default class AppRouter extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>    
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/edit/:id" component={Edit} />
                        <Route path="/add" component={ExpenseForm}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>    
            </BrowserRouter>
        );
    }
}