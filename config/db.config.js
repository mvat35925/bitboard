module.exports = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || '',
  DB_USERNAME: process.env.DB_USERNAME || 'root',
  DB_USERNAME_PASSWORD: process.env.DB_USERNAME_PASSWORD || 'root',
  DB_NAME: process.env.DB_NAME || 'project',
};