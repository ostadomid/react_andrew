import React from 'react';
import ReactDOM from 'react-dom';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class Picker extends React.Component{
    state={focused:false, date:null};
    render(){
        return(
            <div>
                <SingleDatePicker
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                />    
            </div>
        );
    }
}

ReactDOM.render(<Picker />, document.getElementById('app'));
