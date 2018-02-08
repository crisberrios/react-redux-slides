import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
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

export default Counter;
