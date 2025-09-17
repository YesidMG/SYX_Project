const request = require('supertest');
const app = require('../src/app');

jest.mock("node-fetch", () => jest.fn());

const fetch = require("node-fetch");

describe('Complaints API', () => {

  beforeAll(() => {
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true })
      })
    );
  });

  describe("POST /complaints", () => {
    it("Debe crear una queja válida asociada a una entidad existente", async () => {
      // Tomamos una entidad existente
      const entitiesRes = await request(app).get("/entities");
      const entityId = entitiesRes.body[0].id;

      const newComplaint = {
        description: "Esperé más de 30 minutos para ser atendido",
        entity_id: entityId,
        captcha: "fake",
      };

      const res = await request(app).post("/complaints").send(newComplaint);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("description", newComplaint.description);
      expect(res.body).toHaveProperty("entity_id", entityId);
    });

    it("Debe retornar 400 si falta 'description'", async () => {
      const entitiesRes = await request(app).get("/entities");
      const entityId = entitiesRes.body[0].id;

      const res = await request(app)
        .post("/complaints")
        .send({ entity_id: entityId, captcha: "fake" });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si falta 'entity_id'", async () => {
      const res = await request(app)
        .post("/complaints")
        .send({ description: "No se especifica a qué entidad", captcha: "fake" });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si falta 'captcha'", async () => {
      const entitiesRes = await request(app).get("/entities");
      const entityId = entitiesRes.body[0].id;

      const res = await request(app)
        .post("/complaints")
        .send({ description: "Debe fallar", entity_id: entityId });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si el 'entity_id' no existe", async () => {
      const res = await request(app)
        .post("/complaints")
        .send({ entity_id: 999999, captcha: "fake" });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });
  });

  describe("GET /complaints", () => {
    let testEntity;
    let testComplaint;

    beforeEach(async () => {
      // Tomamos una entidad existente
      const entitiesRes = await request(app).get("/entities");
      testEntity = entitiesRes.body[0];

      fetch.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ success: true }) // válido por defecto
        })
      );

      // Creamos una queja de prueba
      const newComplaint = {
        description: "Esperé más de 30 minutos para ser atendido",
        entity_id: testEntity.id,
        captcha: "fake",
      };
      const complaintRes = await request(app).post("/complaints").send(newComplaint);
      expect(complaintRes.statusCode).toBe(201);

      testComplaint = complaintRes.body;
    });

    it("Debe retornar todas las quejas", async () => {
      const res = await request(app).get("/complaints/");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("description");
      expect(res.body[0]).toHaveProperty("entity_name");
    });

    it("Debe retornar una queja por ID válido", async () => {
      const res = await request(app).get(`/complaints/${testComplaint.id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("id", testComplaint.id);
      expect(res.body).toHaveProperty("description", testComplaint.description);
      expect(res.body).toHaveProperty("entity_id", testEntity.id);
    });

    it("Debe retornar 404 si la queja no existe", async () => {
      const res = await request(app).get("/complaints/999999");
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si el ID no es válido", async () => {
      const res = await request(app).get("/complaints/abc");
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

  });

});