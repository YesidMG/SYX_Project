const request = require('supertest');
const app = require('../src/app');

jest.mock("node-fetch", () => jest.fn());

const fetch = require("node-fetch");

describe("Reports API", () => {
  let testEntity;

  beforeAll(async () => {
    // Crear entidad usando la API
    const res = await request(app)
      .post("/entities")
      .send({ name: "Entidad de Reporte", logo: "logo.png" });

    testEntity = res.body;
  });

  beforeEach(() => {
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true })
      })
    );
  });

  afterAll(async () => {
    // Borrar las quejas de esa entidad
    const complaintsRes = await request(app).get(`/complaints?entity_id=${testEntity.id}`);
    for (const c of complaintsRes.body) {
      await request(app).delete(`/complaints/${c.id}`);
    }
    // Borrar la entidad
    await request(app).delete(`/entities/${testEntity.id}`);
  });

  it("Debe retornar todas las entidades con campo count (cantidad de quejas)", async () => {
    const res = await request(app).get("/reports");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const entityReport = res.body.find((r) => r.id === testEntity.id);
    expect(entityReport).toBeDefined();
    expect(entityReport).toHaveProperty("complaints");
    expect(typeof entityReport.complaints).toBe("number");
  });

  it("Debe retornar las entidades sin quejas con count 0", async () => {
    const res = await request(app).get("/reports");

    const entityReport = res.body.find((r) => r.id === testEntity.id);
    expect(entityReport).toBeDefined();
    expect(entityReport.complaints).toBe(0);
  });

  it("Después de insertar nuevas quejas, el conteo debe reflejarse correctamente", async () => {
    await request(app)
      .post("/complaints")
      .send({ title: "Primera queja", description: "Texto 1", entity_id: testEntity.id, captcha: "fake" });

    await request(app)
      .post("/complaints")
      .send({ title: "Segunda queja", description: "Texto 2", entity_id: testEntity.id, captcha: "fake" });

    const res = await request(app).get("/reports");
    const entityReport = res.body.find((r) => r.id === testEntity.id);

    expect(entityReport).toBeDefined();
    expect(entityReport.complaints).toBe(2);
  });
});