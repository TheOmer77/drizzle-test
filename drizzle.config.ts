import type { Config } from 'drizzle-kit';

const config = {
  schema: './src/db/schema',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: { connectionString: process.env.DB_URL! },
} satisfies Config;

export default config;
