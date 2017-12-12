import React from 'react';

export default class Edit extends React.Component{
    constructor(props) {
        super(props);
        window.h = this.props.history;
    }
    render() {
        return (
            <div>
                <h3>Id : {this.props.match.params.id}</h3>
                <p>Edit Page</p>    
            </div>
        );
    }
} 