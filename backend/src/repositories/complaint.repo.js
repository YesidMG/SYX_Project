const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
  async findAll() {
    return await prisma.complaint.findMany({
      include: {
        entity: true,
        comments: {
          select: {
            id: true,
            content: true,
            creation_date: true,
            complaint_id: true,
          },
          orderBy: {
            creation_date: 'desc',
          },
        },
      },
      orderBy: { creation_date: 'desc' },
    })
  },

  async findById(id) {
    return await prisma.complaint.findUnique({
      where: { id: Number(id) },
      include: {
        entity: true,
        comments: {
          orderBy: {
            creation_date: 'desc',
          },
        },
      },
    })
  },

  async findByEntityId(entityId) {
    return await prisma.complaint.findMany({
      where: { entity_id: Number(entityId) },
      include: {
        entity: true,
        comments: {
          orderBy: {
            creation_date: 'desc',
          },
        },
      },
      orderBy: { creation_date: 'desc' },
    })
  },

  async create(data) {
    return await prisma.complaint.create({
      data,
      include: {
        entity: true,
        comments: {
          select: {
            id: true,
            content: true,
            creation_date: true,
            complaint_id: true,
          },
          orderBy: {
            creation_date: 'desc',
          },
        },
      },
    })
  },

  async findPaginated({ page = 1, limit = 10, entityId }) {
    const skip = (page - 1) * limit
    const where = entityId ? { entity_id: Number(entityId) } : {}

    const [total, complaints] = await Promise.all([
      prisma.complaint.count({ where }),
      prisma.complaint.findMany({
        where,
        include: {
          entity: true,
          comments: {
            orderBy: { creation_date: 'desc' },
          },
        },
        orderBy: { creation_date: 'desc' },
        skip,
        take: limit,
      }),
    ])
    return { total, complaints }
  },
}
