const request = require('supertest');
const app = require('../server'); // Import de la app Express
const pool = require('../src/config/config');

describe('Complaints API', () => {
  it('Debería devolver lista de quejas', async () => {
    const res = await request(app).get('/api/complaints');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

it('Debería devolver solo quejas de SENA', async () => {
  const res = await request(app).get('/api/complaints?entity_name=SENA');
  expect(res.statusCode).toBe(200);
  expect(res.body.every(c => c.entity_name === 'SENA')).toBe(true);
});

it('Debería crear una nueva queja', async () => {
  const newComplaint = {
    entity_id: 1,
    title: "Test Entity",
    description: "Esta es una queja de prueba"
  };

  const res = await request(app)
    .post('/api/complaints')
    .send(newComplaint);

  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe(newComplaint.title);

  // Verificamos que aparece en GET
  const list = await request(app).get('/api/complaints');
  expect(list.body.some(c => c.title === "Test Entity")).toBe(true);
});

beforeEach(async () => {
  await pool.query('TRUNCATE complaints RESTART IDENTITY CASCADE');
});

afterAll(async () => {
  await pool.end(); //Cerrar la conexión a la base de datos después de tests
});
