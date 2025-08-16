require('dotenv').config();
const express = require('express');
const entidadesRoutes = require('./src/routes/entidades');
const quejasRoutes = require('./src/routes/quejas');
const reportesRoutes = require('./src/routes/reportes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use('/api/entidades', entidadesRoutes);
app.use('/api/quejas', quejasRoutes);
app.use('/api/reportes', reportesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});