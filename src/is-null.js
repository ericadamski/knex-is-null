const isNull = (expression, value) => {
  return `ISNULL(${expression}, ${formatValue(value)})`;
};

const formatValue = v => {
  if (typeof v === 'string') {
    if (v.includes('ISNULL')) return v;

    return `'${v}'`;
  }

  return v;
};

module.exports = function(expression, value) {
  return isNull(expression, value);
};
