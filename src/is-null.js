const isNull = (expression, value) => {
<<<<<<< HEAD
  return `ISNULL(${expression}, ${value})`;
};

module.exports = isNull;
=======
  return `ISNULL(${expression},${value})`;
};

module.exports = () => ({
  isNull(expression, value) {
    return isNull(expression, value);
  }
});
>>>>>>> 7090b02... bump to v1.0.1
