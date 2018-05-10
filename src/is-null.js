const isNull = (expression, value) => {
  return `ISNULL(${expression}, ${value})`;
};

module.exports = () => ({
  isNull(expression, value) {
    return isNull(expression, value);
  }
});
