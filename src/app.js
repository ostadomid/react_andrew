
class ListItem extends React.Component{
    constructor(props) {
        super(props);
        this.removeHandler = this.removeHandler.bind(this);
    }

    removeHandler(e) {
        this.props.removeHandler(this.props.index);
    }

    render() {
        return (
            <li>
                <button className="remove" onClick={ this.removeHandler  }>X</button>
                {this.props.text}
            </li>
        );
    }
}

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = { items: ['Ali', 'Bob', 'Sina', 'Mina','Mahtab'] };
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(index /*e*/) {
        //let index = e.target.getAttribute('no');
        this.state.items.splice(index, 1);
        this.setState((prevState) => { 
            return ({
                items: prevState.items
            });
        });
    }

    render() {
        return (
            <ul>
                {this.state.items.map((item, index) => <ListItem key={index} text={item} index={index} removeHandler={this.removeItem} />) }    
            </ul>
        );
    }
}



ReactDOM.render(<List/>, document.getElementById('app'));