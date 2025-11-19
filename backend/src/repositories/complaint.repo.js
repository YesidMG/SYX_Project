const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
  async findAll() {
    return await prisma.complaint.findMany({
      where: {
        state: { not: 'DELETED' },
      },
      include: {
        entity: true,
        comments: {
          select: {
            id: true,
            content: true,
            creation_date: true,
            complaint_id: true,
          },
          orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
        },
      },
      orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
    })
  },

  async findById(id) {
    return await prisma.complaint.findUnique({
      where: { id: Number(id) },
      include: {
        entity: true,
        comments: {
          orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
        },
      },
    })
  },

  async findByEntityId(entityId) {
    return await prisma.complaint.findMany({
      where: {
        entity_id: Number(entityId),
        state: { not: 'DELETED' },
      },
      include: {
        entity: true,
        comments: {
          orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
        },
      },
      orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
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
        },
      },
    })
  },

  async findPaginated({ page = 1, limit = 10, entityId }) {
    const skip = (page - 1) * limit
    const where = {
      AND: [{ state: { not: 'DELETED' } }, ...(entityId ? [{ entity_id: Number(entityId) }] : [])],
    }

    const [total, complaints] = await Promise.all([
      prisma.complaint.count({ where }),
      prisma.complaint.findMany({
        where,
        include: {
          entity: true,
          comments: {
            orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
          },
        },
        orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
        skip,
        take: limit,
      }),
    ])
    return { total, complaints }
  },

  async updateState(id, newState) {
    return await prisma.complaint.update({
      where: { id: Number(id) },
      data: {
        state: newState,
      },
      include: {
        entity: true,
        comments: {
          orderBy: [{ creation_date: 'desc' }, { id: 'desc' }],
        },
      },
    })
  },
}
