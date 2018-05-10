const Knex = require("knex");
const Client = Knex.Client.prototype;
const QueryBuilder = require("knex/lib/query/builder");

const isnull = require("./src/null");

const ext = {};

Object.assign(QueryBuilder.prototype, ext);
Object.assign(Client, ext);

Client.queryBuilder = function queryBuilder() {
  return new QueryBuilder(this);
};
