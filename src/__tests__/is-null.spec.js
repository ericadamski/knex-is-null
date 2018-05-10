<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const isnull = require("../is-null");
=======
const isNull = require('../is-null');
>>>>>>> 0f1e368... as returns self reference :selfie:
=======
const isnull = require("../is-null");
>>>>>>> 9225c53... changed tests
=======
const isnull = require('../is-null');
>>>>>>> 7090b02... bump to v1.0.1

describe('.null', () => {
  it('should be able to handle a single isNull statement', () => {
    const expectedResult = `ISNULL(Slices of cake,10)`;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const result = isnull().isNull("Slices of cake", 10);
=======
    const result = isNull('Slices of cake', 10);
>>>>>>> 0f1e368... as returns self reference :selfie:
=======
    const result = isnull().isNull("Slices of cake", 10);
>>>>>>> 9225c53... changed tests
=======
    const result = isnull().isNull('Slices of cake', 10);
>>>>>>> 7090b02... bump to v1.0.1

    expect(result).toEqual(expectedResult);
  });

  it('should be able to handle nested isNull statements', () => {
    const expectedResult =
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9225c53... changed tests
      "ISNULL(ISNULL(Cake,ISNULL(Pie,0)),ISNULL(Cupcake,0))";
    const result = isnull().isNull(
      isnull().isNull("Cake", isnull().isNull("Pie", 0)),
      isnull().isNull("Cupcake", 0)
<<<<<<< HEAD
=======
      'ISNULL(ISNULL(Cake,ISNULL(Pie,0)),ISNULL(Cupcake,0))';
    const result = isNull(
      isNull('Cake', isNull('Pie', 0)),
      isNull('Cupcake', 0)
>>>>>>> 0f1e368... as returns self reference :selfie:
=======
>>>>>>> 9225c53... changed tests
=======
      'ISNULL(ISNULL(Cake,ISNULL(Pie,0)),ISNULL(Cupcake,0))';
    const result = isnull().isNull(
      isnull().isNull('Cake', isnull().isNull('Pie', 0)),
      isnull().isNull('Cupcake', 0)
>>>>>>> 7090b02... bump to v1.0.1
    );

    expect(result).toEqual(expectedResult);
  });
});
