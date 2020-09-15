import caesarCipher from './caesar_cipher';

test('It should do a simple shift', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('It should do a negative shift', () => {
  expect(caesarCipher('bcd', -1)).toBe('abc');
});

test('It should do a wrap-around shift', () => {
  expect(caesarCipher('abc', -1)).toBe('zab');
});

test('It should do a shift keeping the same case', () => {
  expect(caesarCipher('YBc', 2)).toBe('ADe');
});

test('It shouldn\'t shift of non-alphabetic characters', () => {
  expect(caesarCipher('ABc!.]', 2)).toBe('CDe!.]');
});