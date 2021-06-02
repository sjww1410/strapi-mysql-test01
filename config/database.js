odule.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-54-243-92-68.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dctkgf8h194tjm'),
        username: env('DATABASE_USERNAME', 'aqdbltopzjzknw'),
        password: env('DATABASE_PASSWORD', 'b03571cf9c5094f45a7ca0fea4aa559976d48de8346b023191a1645fa75781dd'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {},
    },
  },
});
