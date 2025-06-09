import { parse } from 'pg-connection-string';

const config = parse(process.env.DATABASE_URL || '');

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: Number(config.port),
      user: config.user,
      password: config.password,
      database: config.database,
      ssl: {
        rejectUnauthorized: false, // Render PostgreSQL では必要
      },
    },
  },
});