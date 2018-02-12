import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = reducer(undefined, {});
  }

  dispatch = (action) => {
    this.setState((prevState) => reducer(prevState, action));
  }

  handleIncrement = () => {
    this.dispatch({ type: 'INCREMENT' });
  }

  handleDecrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div className="container">
        <h1>Count: {this.state.count}</h1>
        <Button
          color="primary"
          onClick={this.handleIncrement}
        >Add One
        </Button>
        <span> </span>
        <Button
          color="secondary"
          onClick={this.handleDecrement}
        >Subtract One
        </Button>
      </div>
    );
  }
}

export default App;
