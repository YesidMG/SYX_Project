const { Pool } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL  || 'http://localhost:5173';

// Configuración SSL solo para producción
const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

module.exports = {
  DATABASE_URL,
  PORT,
  FRONTEND_URL,
  pool
};