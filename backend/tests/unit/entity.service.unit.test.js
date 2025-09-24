const EntityService = require('../../src/services/entity.service')
const entityRepo = require('../../src/repositories/entity.repo')

jest.mock('../../src/repositories/entity.repo')

describe('EntityService', () => {
  afterEach(() => jest.clearAllMocks())

  it('getAllEntities retorna todas las entidades', async () => {
    const mockEntities = [{ id: 1, name: 'Alcaldía' }]
    entityRepo.findAll.mockResolvedValue(mockEntities)
    const result = await EntityService.getAllEntities()
    expect(result).toEqual(mockEntities)
  })

  it('getEntityById retorna la entidad si existe', async () => {
    entityRepo.findById.mockResolvedValue({ id: 1, name: 'Alcaldía' })
    const result = await EntityService.getEntityById(1)
    expect(result).toEqual({ id: 1, name: 'Alcaldía' })
  })

  it('getEntityById lanza error si no existe', async () => {
    entityRepo.findById.mockResolvedValue(null)
    await expect(EntityService.getEntityById(999)).rejects.toHaveProperty('status', 404)
  })

  it('createEntity lanza error si falta nombre', async () => {
    await expect(EntityService.createEntity({ logo: 'logo.png' })).rejects.toHaveProperty(
      'status',
      400
    )
  })

  it('createEntity crea una entidad válida', async () => {
    const data = { name: 'Alcaldía', logo: 'logo.png' }
    entityRepo.create.mockResolvedValue({ id: 1, ...data })
    const result = await EntityService.createEntity(data)
    expect(result).toEqual({ id: 1, ...data })
  })

  it('getEntitiesWithComplaintCount retorna entidades con conteo', async () => {
    const mockEntities = [{ id: 1, name: 'Alcaldía', complaintCount: 5 }]
    entityRepo.findWithComplaintCount.mockResolvedValue(mockEntities)
    const result = await EntityService.getEntitiesWithComplaintCount()
    expect(result).toEqual(mockEntities)
  })
})
