require('dotenv').config();
const express = require('express');
const cors = require('cors');
const entitiesRoutes = require('./src/routes/entities');
const complaintsRoutes = require('./src/routes/complaints');
const reportsRoutes = require('./src/routes/reports');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  //De momento para desarrollo
  origin: 'http://localhost:5173'
}));
app.use('/api/entities', entitiesRoutes);
app.use('/api/complaints', complaintsRoutes);
app.use('/api/reports', reportsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});