import React from 'react';
import { Button } from 'reactstrap';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
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

  handleClick = () => {
    this.dispatch({ type: 'INCREMENT' });
  }

  render() {
    return (
      <div className="container">
        <h1>Count: {this.state.count}</h1>
        <Button
          color="primary"
          onClick={this.handleClick}
        >
          Add One
        </Button>
      </div>
    );
  }
}

export default App;
