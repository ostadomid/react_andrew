import React from 'react';
import { connect } from 'react-redux';
import { getVisibleExpenses } from '../store/selectors';


const Table = (props) => (
    <table>
        <thead>
            <tr>
                <th>Description</th>    
                <th>Amount</th>    
                <th>Date</th>    
            </tr>    
        </thead>    
        <tbody>
            {
                props.expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.description}</td>    
                        <td>{expense.amount}</td>    
                        <td>{new Date(expense.createdAt).toGMTString()}</td>    
                    </tr>  
                ))
            }    
        </tbody>
    </table>
);

class Home extends React.Component{
    render() {
        return (
            <div>
                <p>Home Page</p>    
                <Table expenses={this.props.expenses}/>
            </div>
        );
    }
} 

const mapStatetoProps = (state) => ({ expenses: getVisibleExpenses(state.expenses, state.filter), filter: state.filter });
export default connect(mapStatetoProps)(Home);