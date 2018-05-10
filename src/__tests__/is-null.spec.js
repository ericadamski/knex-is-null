<<<<<<< HEAD
const isnull = require("../is-null");
=======
const isNull = require('../is-null');
>>>>>>> 0f1e368... as returns self reference :selfie:

describe(".null", () => {
  it("should be able to handle a single isNull statement", () => {
    const expectedResult = `ISNULL(Slices of cake,10)`;

<<<<<<< HEAD
    const result = isnull().isNull("Slices of cake", 10);
=======
    const result = isNull('Slices of cake', 10);
>>>>>>> 0f1e368... as returns self reference :selfie:

    expect(result).toEqual(expectedResult);
  });

  it("should be able to handle nested isNull statements", () => {
    const expectedResult =
<<<<<<< HEAD
      "ISNULL(ISNULL(Cake,ISNULL(Pie,0)),ISNULL(Cupcake,0))";
    const result = isnull().isNull(
      isnull().isNull("Cake", isnull().isNull("Pie", 0)),
      isnull().isNull("Cupcake", 0)
=======
      'ISNULL(ISNULL(Cake,ISNULL(Pie,0)),ISNULL(Cupcake,0))';
    const result = isNull(
      isNull('Cake', isNull('Pie', 0)),
      isNull('Cupcake', 0)
>>>>>>> 0f1e368... as returns self reference :selfie:
    );

    expect(result).toEqual(expectedResult);
  });
});
