import { calculateWinner } from './Board';

test('returns null if no winner', () => {
  const squares = [
    'X', 'O', 'X',
    null, 'O', null,
    'X', null, 'X',
  ];
  const actual = calculateWinner(squares);
  const expected = null;

  expect(actual).toBe(expected);
});

test('returns X when X has won', () => {
  const squares = [
    'X', 'O', 'X',
    'O', 'X', null,
    'X', 'O', 'O',
  ];
  const actual = calculateWinner(squares);
  const expected = 'X';

  expect(actual).toBe(expected);
});

test('returns O when O has won', () => {
  const squares = [
    'X', 'O', 'X',
    'O', 'O', null,
    'X', 'O', 'X',
  ];
  const actual = calculateWinner(squares);
  const expected = 'O';

  expect(actual).toBe(expected);
});
