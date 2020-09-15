import caesar from './caesar_cipher';

test('It should do a simple shift', () => {
  expect(caesar('abc', 1)).toBe('bcd');
});

test('It should do a negative shift', () => {
  expect(caesar('bcd', -1)).toBe('abc');
});

test('It should do a wrap-around shift', () => {
  expect(caesar('abc', -1)).toBe('zab');
});

test('It should do a shift keeping the same case', () => {
  expect(caesar('YBc', 2)).toBe('ADe');
});

test('It shouldn\'t shift of non-alphabetic characters', () => {
  expect(caesar('ABc!.]', 2)).toBe('CDe!.]');
});