const analyze = (array) => (
  {
    average: array.reduce((x, y) => x + y, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
);

export default analyze;