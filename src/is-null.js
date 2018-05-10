const isNull = (expression, value) => {
  return `ISNULL(${expression}, ${value})`;
};

module.exports = function(expression, value) {
  return isNull(expression, value);
};
