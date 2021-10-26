import { Pool } from 'pg';

import config from '../../../config/enviroment';

class PgConnection {
  public static instance: PgConnection;
  public pool!: Pool;

  constructor() {
    if (PgConnection.instance) return PgConnection.instance;

    PgConnection.instance = this;
    const {
      user, host, database, password, port,
    } = config.pgSql;
    this.pool = new Pool({
      user,
      host,
      database,
      password,
      port: Number(port),
    });
  }
}

export default PgConnection;
