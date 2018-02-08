import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('Square component', () => {
  let props;
  let shallowSquare;
  const noOp = () => {};

  const square = () => {
    if (!shallowSquare) {
      shallowSquare = shallow(<Square {...props} />);
    }
    return shallowSquare;
  };

  beforeEach(() => {
    props = {
      value: null,
      onClick: noOp,
    };
    shallowSquare = undefined;
  });

  it('always renders a div', () => {
    const div = square().find('div');
    // console.log(div.debug());
    expect(div.length).toBe(1);
  });

  it('displays the value of the "value" prop', () => {
    square().setProps({ value: 'X' });
    const actual = square().text();
    const expected = 'X';

    expect(actual).toBe(expected);
  });
});
