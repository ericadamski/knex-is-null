const Knex = require('knex');
const Client = Knex.Client.prototype;
const QueryBuilder = require('knex/lib/query/builder');

const isNull = require('./src/is-null');

const ext = {
  isNull(expression, value) {
    return Object.assign(this.client.raw(isNull(expression, value)), {
      as(name) {
        this.sql += ` AS ${name}`;
        return this;
      }
    });
  }
};

Object.assign(QueryBuilder.prototype, ext);
Object.assign(Client, ext);

Client.queryBuilder = function queryBuilder() {
  return new QueryBuilder(this);
};
