import React from 'react';
import moment from 'moment';

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            description: '',
            createdAt: moment().valueOf(),
            isSubmitted: false
        };
    }
    submitHandler = (e) => { 
        e.preventDefault();
        this.setState((prevState) => {
            return ({ isSubmitted: true });
        })
    };
    amountChangeHandler = (e) => { 
        //e.persist()
        const amount = e.target.value;
        this.setState((preState) => {
            return ({
                amount 
            });
         });
    };
    render(props) {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="number" value={this.state.amount} onChange={this.amountChangeHandler} />
                <input type="submit" value="Add"/>
            </form>
        );
    }
}