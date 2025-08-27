require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const { PORT, FRONTEND_URL } = require('./src/config/config');

const entitiesRoutes = require('./src/routes/entities');
const complaintsRoutes = require('./src/routes/complaints');
const reportsRoutes = require('./src/routes/reports');

const app = express();

// Middlewares
app.use(express.json());
// CORS configuration
app.use(cors({origin: FRONTEND_URL}));

// API Routes
app.use('/api/entities', entitiesRoutes);
app.use('/api/complaints', complaintsRoutes);
app.use('/api/reports', reportsRoutes);

// Servir static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

//Export app for testing
module.exports = app;

// Solo levantamos el servidor si NO estamos en test
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}