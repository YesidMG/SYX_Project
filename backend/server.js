require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');


const entitiesRoutes = require('./src/routes/entities');
const complaintsRoutes = require('./src/routes/complaints');
const reportsRoutes = require('./src/routes/reports');

const app = express();

// Middlewares
app.use(express.json());
// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

// API Routes
app.use('/api/entities', entitiesRoutes);
app.use('/api/complaints', complaintsRoutes);
app.use('/api/reports', reportsRoutes);

// Servir static files
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//Export app for testing
module.exports = app;

// Solo levantamos el servidor si NO estamos en test
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}