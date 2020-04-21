import { ConnectionOptions } from 'typeorm';

export interface AppConfiguration {
  serverPort: number;
  redis?: {
    host: string,
    port: number,
    enabled: boolean | string,
  };
  database: ConnectionOptions;
}

export const config: AppConfiguration = {
  serverPort: Number(process.env.SERVER_PORT) || 3000,
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: Number(process.env.REDIS_PORT) || 6379,
    enabled: process.env.REDIS_ENABLED || false
  },
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST         || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB       || 'crm_db',
    // database: process.env.POSTGRES_DB       || 'salespartner',   // to polaczenie działa, ale kasuje kolumny z SP i tworzy na wzor tych, nie pozwala robic update i inne problemy
    entities: [`${__dirname}/**/entities/*.{js,ts}`],
    synchronize: true,
    replication: process.env.DB_MASTER_URL && process.env.DB_REPLICAS_URL ? {
      master: {
        url:  process.env.DB_MASTER_URL,
      },
      slaves: process.env.DB_REPLICAS_URL ? [
        {url: process.env.DB_REPLICAS_URL},
      ] : [],
    } : null,
  },
};
