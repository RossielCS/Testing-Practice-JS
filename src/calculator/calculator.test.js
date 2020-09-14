import calculator from './calculator';

test('It should return the sum of two numbers', () => {
  expect(calculator.add(10, 12)).toBe(22);
});

test('It should return the subtraction between two numbers', () => {
  expect(calculator.subtract(9, 12)).toBe(-3);
});

test('It should return the division between two numbers', () => {
  expect(calculator.divide(42, 5)).toBe(8.4);
});

test('It should return the multiplication between two numbers', () => {
  expect(calculator.multiply(4, 32)).toBe(128);
});
