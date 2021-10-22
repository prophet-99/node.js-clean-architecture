import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {
  NODE_ENV, PORT, HOST, BASE_API,
  HOST_PG_DB, PORT_PG_DB, USER_PG_DB,
  NAME_PG_DB, PASSWORD_PG_DB,
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

const config = {
  nodeEnv: NODE_ENV,
  port: PORT,
  host: HOST,
  baseApi: BASE_API,
  pgSql: {
    host: HOST_PG_DB,
    port: PORT_PG_DB,
    user: USER_PG_DB,
    database: NAME_PG_DB,
    password: PASSWORD_PG_DB,
  },
};

export default config;
