import analyze from './array_analysis';

test('It should return an object', () => {
  expect(analyze([1, 2, 3, 4])).toMatchObject({
    average: 2.5, min: 1, max: 4, length: 4,
  });
});
