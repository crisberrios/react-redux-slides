import React from 'react';
import PropTypes from 'prop-types';

class Square extends React.Component {
  constructor() {
    super();

    this.state = {
      value: null,
    };
  }

  handleClick = () => {
    this.setState({
      value: 'X',
    });
  }

  render() {
    return (
      <div
        className="square"
        onClick={this.handleClick}
      >
        {this.state.value}
      </div>
    );
  }
}

export default Square;
