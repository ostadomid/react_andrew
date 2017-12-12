import React, { Component } from 'react';

export default class List extends Component{
    constructor(props) {
        super(props);
        this.state={items:props.items}
    }
    render() {
        return (
            <ul>
                {this.state.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
        );
    }
}
List.defaultProps = { items: [1, 2, 3, 4] };