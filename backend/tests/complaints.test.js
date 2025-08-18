const request = require('supertest');
const app = require('../server'); // Import de la app Express
const pool = require('../src/config/config');

describe('Complaints API', () => {

  // Limpiar tabla antes de cada test
  beforeEach(async () => {
    await pool.query("TRUNCATE complaints RESTART IDENTITY CASCADE");
  });

  afterAll(async () => {
    await pool.end();
  });

  describe("POST /api/complaints", () => {
    it("Debe crear una queja válida asociada a una entidad existente", async () => {
      // Tomamos una entidad existente
      const entitiesRes = await request(app).get("/api/entities");
      const entityId = entitiesRes.body[0].id;

      const newComplaint = {
        title: "El servicio fue muy lento",
        description: "Esperé más de 30 minutos para ser atendido",
        entity_id: entityId,
      };

      const res = await request(app).post("/api/complaints").send(newComplaint);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("title", newComplaint.title);
      expect(res.body).toHaveProperty("description", newComplaint.description);
      expect(res.body).toHaveProperty("entity_id", entityId);
    });

    it("Debe retornar 400 si falta 'title'", async () => {
      const entitiesRes = await request(app).get("/api/entities");
      const entityId = entitiesRes.body[0].id;

      const res = await request(app)
        .post("/api/complaints")
        .send({ entity_id: entityId, description: "No se especifica título" });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si falta 'description'", async () => {
      const entitiesRes = await request(app).get("/api/entities");
      const entityId = entitiesRes.body[0].id;

      const res = await request(app)
        .post("/api/complaints")
        .send({ title: "Falta el ID de entidad", entity_id: entityId });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si falta 'entity_id'", async () => {
      const res = await request(app)
        .post("/api/complaints")
        .send({ title: "Falta el ID de entidad", description: "No se especifica a qué entidad" });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si el 'entity_id' no existe", async () => {
      const res = await request(app)
        .post("/api/complaints")
        .send({ title: "Entidad inexistente", entity_id: 999999 });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });
  });

  describe("GET /api/complaints", () => {
    let testEntity;
    let testComplaint;

    beforeEach(async () => {
      // Tomamos una entidad existente
      const entitiesRes = await request(app).get("/api/entities");
      testEntity = entitiesRes.body[0];

      // Creamos una queja de prueba
      const newComplaint = {
        title: "El servicio fue muy lento",
        description: "Esperé más de 30 minutos para ser atendido",
        entity_id: testEntity.id,
      };
      const complaintRes = await request(app).post("/api/complaints").send(newComplaint);
      testComplaint = complaintRes.body;
    });

    afterAll(async () => {
      if (testComplaint?.id) {
        await pool.query("DELETE FROM complaints WHERE id = $1", [testComplaint.id]);
      }
    });

    it("Debe retornar todas las quejas", async () => {
      const res = await request(app).get("/api/complaints");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("title");
      expect(res.body[0]).toHaveProperty("description");
      expect(res.body[0]).toHaveProperty("entity_id");
    });

    it("Debe retornar una queja por ID válido", async () => {
      const res = await request(app).get(`/api/complaints/${testComplaint.id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("id", testComplaint.id);
      expect(res.body).toHaveProperty("title", testComplaint.title);
      expect(res.body).toHaveProperty("description", testComplaint.description);
      expect(res.body).toHaveProperty("entity_id", testEntity.id);
    });

    it("Debe retornar 404 si la queja no existe", async () => {
      const res = await request(app).get("/api/complaints/999999");
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("error");
    });

    it("Debe retornar 400 si el ID no es válido", async () => {
      const res = await request(app).get("/api/complaints/abc");
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

  });

});