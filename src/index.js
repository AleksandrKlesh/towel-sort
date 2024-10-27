
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  return matrix.reduce((acc, value, index) => {
    if (index !== 0 && index % 2 !== 0) {
      acc.concat(value.reverse());
    }
    return acc.concat(value);
  },[]);
}
