import reverseString from './reverse_string';

test('It should return a reversed string', () => {
  expect(reverseString('My test')).toBe('tset yM');
});
