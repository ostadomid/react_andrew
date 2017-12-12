import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component{
    render() {
        return (
            <div>
                <h3>404 ! Return to <Link to="/">home</Link></h3>
            </div>
        );
    }
}