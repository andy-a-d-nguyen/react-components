// TODO
var GroceryList = (props) => (
  <div>
    <h1>Grocery List</h1>
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
    };
  }

  onListItemHover(event) {
    // console.log(event);
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this, event)} onMouseLeave={this.onListItemHover.bind(this, event)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList items={['Potatoes', 'Chicken']}/>, document.getElementById('app'));

// var Potatoes = () => (
//   <li>Potatoes</li>
// );

// var Chicken = () => (
//   <li>Chicken</li>
// );

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// );

/* <GroceryListItem items={['Potatoes', 'Chicken']}/> */