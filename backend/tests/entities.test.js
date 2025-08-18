const request = require('supertest');
const app = require('../server'); // Import de la app Express
const pool = require('../src/config/config');

describe("Entities API", () => {

    describe("GET /api/entities", () => {
        it("Debe retornar listado de todas las entidades", async () => {
            const res = await request(app).get("/api/entities");

            // Verifica que responde 200 OK
            expect(res.statusCode).toBe(200);
            // Verifica que retorne un Array
            expect(Array.isArray(res.body)).toBe(true);
            // Verifica que haya al menos una entidad
            expect(res.body.length).toBeGreaterThan(0);
            // Verifica estructura correcta de los campos en la primera entidad
            const entity = res.body[0];
            expect(entity).toHaveProperty("id");
            expect(entity).toHaveProperty("name");
            expect(entity).toHaveProperty("logo");
        });
    });

    describe("GET /api/entities/:id", () => {
        it("Debe retornar una entidad por ID válido", async () => {
            // Primero obtenemos la lista de entidades
            const all = await request(app).get("/api/entities");
            const testEntity = all.body[0];

            // Ahora probamos obtener una entidad específica
            const res = await request(app).get(`/api/entities/${testEntity.id}`);

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty("id", testEntity.id);
            expect(res.body).toHaveProperty("name", testEntity.name);
            expect(res.body).toHaveProperty("logo", testEntity.logo);
        });

        it("Debe retornar 404 si la entidad no existe", async () => {
            const res = await request(app).get("/api/entities/999999"); // ID que no existe
            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty("error");
        });

        it("Debe retornar 400 si el ID no es válido", async () => {
            const res = await request(app).get("/api/entities/abc"); // ID inválido
            expect(res.statusCode).toBe(400);
            expect(res.body).toHaveProperty("error");
        });
    });

});

//Cerrar la conexión a la base de datos después de tests
afterAll(async () => {
    await pool.end();
});