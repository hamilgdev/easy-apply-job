import { EnvConfig } from './env.config';

let allowedOrigins: (RegExp | string)[] = [/localhost:\d{4}$/];

export const corsConfig = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Authorization', 'X-Requested-With', 'Content-Type'],
  maxAge: 86400, // NOTICE: 1 day
  credentials: true,
};

if (EnvConfig().cors_origin) {
  allowedOrigins = allowedOrigins.concat(EnvConfig().cors_origin.split(','));
}
