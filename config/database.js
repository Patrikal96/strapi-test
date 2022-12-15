module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.xvdscpbutfsugjricbme.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '3dRhyH0V3zKOQY7k'),
      ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
    },
  },
});
