import capitalize from './capitalize';

test('It should return a capitalized string', () => {
  expect(capitalize('my first test')).toBe('My first test');
});

test('It should return a capitalized string', () => {
  expect(capitalize('2nd test')).toBe('2nd test');
});
