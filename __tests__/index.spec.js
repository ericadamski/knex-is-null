require('../index');

const K = require('knex')({ client: 'mssql' });

describe('K.isNull', () => {
  it('should have the case specific methods', () => {
    // when
    expect(K.client.isNull).toBeInstanceOf(Function);
    expect(K.queryBuilder().isNull).toBeInstanceOf(Function);
  });

  it('should be able to handle a single isNull statement', () => {
    const expectedResult = `ISNULL(Slices of cake, 10)`;

    const result = K.queryBuilder()
      .isNull('Slices of cake', 10)
      .toQuery();

    expect(result).toEqual(expectedResult);
  });

  it('should be able to handle nested isNull statements', () => {
    const expectedResult =
      'ISNULL(ISNULL(Cake, ISNULL(Pie, 0)), ISNULL(Cupcake, 0))';
    const result = K.queryBuilder()
      .isNull(
        K.queryBuilder().isNull('Cake', K.queryBuilder().isNull('Pie', 0)),
        K.queryBuilder().isNull('Cupcake', 0)
      )
      .toQuery();

    expect(result).toEqual(expectedResult);
  });

  it('should be able to alias statements', () => {
    const expectedResult = `ISNULL(S.O.Cake, 10) AS CAKEEEEEEEEEE`;

    const result = K.queryBuilder()
      .isNull('S.O.Cake', 10)
      .as('CAKEEEEEEEEEE')
      .toQuery();

    expect(result).toEqual(expectedResult);
  });

  describe('value formatting', () => {
    it('should be able to handle string as a value', async () => {
      const expectedResult = `ISNULL(Slices of cake, 'none')`;

      const result = K.queryBuilder()
        .isNull('Slices of cake', 'none')
        .toQuery();

      expect(result).toEqual(expectedResult);
    });

    it('should be able to handle an empty string as a value', async () => {
      const expectedResult = `ISNULL(Slices of cake, '')`;

      const result = K.queryBuilder()
        .isNull('Slices of cake', '')
        .toQuery();

      expect(result).toEqual(expectedResult);
    });

    it('should be able to handle non-string values', () => {
      const expectedResult = 'ISNULL(Slices of cake, 10)';

      const result = K.queryBuilder()
        .isNull('Slices of cake', 10)
        .toQuery();

      expect(result).toEqual(expectedResult);
    });
  });
});
