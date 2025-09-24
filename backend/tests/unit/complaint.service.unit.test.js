const ComplaintService = require('../../src/services/complaint.service')
const complaintRepo = require('../../src/repositories/complaint.repo')

jest.mock('../../src/repositories/complaint.repo')

describe('ComplaintService', () => {
  afterEach(() => jest.clearAllMocks())

  it('getAllComplaints retorna todas las quejas', async () => {
    const mockComplaints = [{ id: 1, description: 'Test' }]
    complaintRepo.findAll.mockResolvedValue(mockComplaints)
    const result = await ComplaintService.getAllComplaints()
    expect(result).toEqual(mockComplaints)
  })

  it('getComplaintById retorna la queja si existe', async () => {
    complaintRepo.findById.mockResolvedValue({ id: 1, description: 'Test' })
    const result = await ComplaintService.getComplaintById(1)
    expect(result).toEqual({ id: 1, description: 'Test' })
  })

  it('getComplaintById lanza error si no existe', async () => {
    complaintRepo.findById.mockResolvedValue(null)
    await expect(ComplaintService.getComplaintById(999)).rejects.toHaveProperty('status', 404)
  })

  it('getComplaintsByEntity retorna quejas de la entidad', async () => {
    const mockComplaints = [{ id: 1, entity_id: 2 }]
    complaintRepo.findByEntityId.mockResolvedValue(mockComplaints)
    const result = await ComplaintService.getComplaintsByEntity(2)
    expect(result).toEqual(mockComplaints)
  })

  it('createComplaint lanza error si falta descripción', async () => {
    await expect(
      ComplaintService.createComplaint({ entity_id: 1, description: '' })
    ).rejects.toHaveProperty('status', 400)
  })

  it('createComplaint lanza error si falta entity_id', async () => {
    await expect(ComplaintService.createComplaint({ description: 'Test' })).rejects.toHaveProperty(
      'status',
      400
    )
  })

  it('createComplaint crea una queja válida', async () => {
    const data = { entity_id: 1, description: 'Test' }
    complaintRepo.create.mockResolvedValue({ id: 1, ...data })
    const result = await ComplaintService.createComplaint(data)
    expect(result).toEqual({ id: 1, ...data })
  })

  it('getComplaintsPaginated retorna quejas paginadas', async () => {
    const mockPaginated = { total: 1, complaints: [{ id: 1 }] }
    complaintRepo.findPaginated.mockResolvedValue(mockPaginated)
    const result = await ComplaintService.getComplaintsPaginated({
      page: 1,
      limit: 10,
      entityId: 1,
    })
    expect(result).toEqual(mockPaginated)
  })
})
