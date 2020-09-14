import calculator from './calculator';

test('It should return a simple sum of two numbers', () => {
  expect(calculator.add(10, 12)).toBe(22);
});

test('It should return a sum of two negative numbers', () => {
  expect(calculator.add(-5, -33)).toBe(-38);
});

test('It should return the difference between two numbers', () => {
  expect(calculator.subtract(12, 9)).toBe(3);
});

test('It should return the negative difference between two numbers', () => {
  expect(calculator.subtract(9, 12)).toBe(-3);
});

test('It should return a simple quotient between two numbers', () => {
  expect(calculator.divide(42, 5)).toBe(8.4);
});

test('It should return a negative quotient between two numbers', () => {
  expect(calculator.divide(42, -5)).toBe(-8.4);
});

test('It should return a simple product between two numbers', () => {
  expect(calculator.multiply(4, 32)).toBe(128);
});

test('It should return a negative product between two numbers', () => {
  expect(calculator.multiply(4, -32)).toBe(-128);
});
