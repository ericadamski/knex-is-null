const isNull = require('../is-null');

describe('.null', () => {
  it('should be able to handle a single isNull statement', () => {
    const expectedResult = `ISNULL(Slices of cake, 10)`;

    const result = isNull('Slices of cake', 10);

    expect(result).toEqual(expectedResult);
  });

  it('should be able to handle nested isNull statements', () => {
    const expectedResult =
      'ISNULL(ISNULL(Cake, ISNULL(Pie, 0)), ISNULL(Cupcake, 0))';

    const result = isNull(
      isNull('Cake', isNull('Pie', 0)),
      isNull('Cupcake', 0)
    );

    expect(result).toEqual(expectedResult);
  });
});
