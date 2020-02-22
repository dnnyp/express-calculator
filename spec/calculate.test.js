var calculate = require('./../lib/calculate')

test('adds 1 + 2 to equal 3', () => {
  expect(calculate('addition', 1, 2)).toBe(3);
});

test('subtract 6 - 2 to equal 4', () => {
  expect(calculate('subtraction', 6, 2)).toBe(4);
});

test('multiply 4 * 7 to equal 28', () => {
  expect(calculate('multiplication', 4, 7)).toBe(28);
});

test('divide 18 / 2 to equal 9', () => {
  expect(calculate('division', 18, 2)).toBe(9);
});

test('incorrect operator', () => {
  expect(calculate('asdfghjkl', 1, 2)).toBe('Sorry, please enter a valid operator!');
});

test('incorrect operator', () => {
  expect(calculate('asdfghjkdawfawfawl', 1, 2)).toBe('Sorry, please enter a valid operator!');
});
