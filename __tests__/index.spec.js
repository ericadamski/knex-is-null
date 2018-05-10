require("../index");

const K = require("knex")({ client: "mssql" });

describe("K.isNull", () => {
  it("should have the case specific methods", () => {
    // when
    expect(K.client.isNull).toBeInstanceOf(Function);
    expect(K.queryBuilder().isNull).toBeInstanceOf(Function);
  });
});
