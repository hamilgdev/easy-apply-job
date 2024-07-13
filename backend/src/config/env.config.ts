export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'development',
  port: process.env.NEST_PORT || '3000',
  cors_origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
});
