import React from 'react';

export default class One extends React.Component{
    clickHandler = () => { 
        console.log(this.props.store);
    };
    render() {
        return (
            <button onClick={this.clickHandler}>Clik me</button>
        );
    }
}