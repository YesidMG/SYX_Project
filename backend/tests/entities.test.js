const request = require('supertest')
const app = require('../src/app')

describe('Entities API', () => {
  describe('GET /entities', () => {
    it('Debe retornar listado de todas las entidades', async () => {
      const res = await request(app).get('/entities')

      // Verifica que responde 200 OK
      expect(res.statusCode).toBe(200)
      // Verifica que retorne un Array
      expect(Array.isArray(res.body)).toBe(true)
      // Verifica que haya al menos una entidad
      expect(res.body.length).toBeGreaterThan(0)
      // Verifica estructura correcta de los campos en la primera entidad
      const entity = res.body[0]
      expect(entity).toHaveProperty('id')
      expect(entity).toHaveProperty('name')
      expect(entity).toHaveProperty('logo')
    })
  })

  describe('GET /entities/:id', () => {
    it('Debe retornar una entidad por ID válido', async () => {
      // Primero obtenemos la lista de entidades
      const all = await request(app).get('/entities')
      const testEntity = all.body[0]

      // Ahora probamos obtener una entidad específica
      const res = await request(app).get(`/entities/${testEntity.id}`)

      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('id', testEntity.id)
      expect(res.body).toHaveProperty('name', testEntity.name)
      expect(res.body).toHaveProperty('logo', testEntity.logo)
    })

    it('Debe retornar 404 si la entidad no existe', async () => {
      const res = await request(app).get('/entities/999999') // ID que no existe
      expect(res.statusCode).toBe(404)
      expect(res.body).toHaveProperty('error')
    })

    it('Debe retornar 400 si el ID no es válido', async () => {
      const res = await request(app).get('/entities/abc') // ID inválido
      expect(res.statusCode).toBe(400)
      expect(res.body).toHaveProperty('error')
    })
  })
})
