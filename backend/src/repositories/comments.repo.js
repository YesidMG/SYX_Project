const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
  async findAll() {
    return await prisma.comment.findMany({
      include: {
        complaint: {
          include: {
            entity: true,
          },
        },
      },
      orderBy: {
        creation_date: 'desc',
      },
    })
  },

  async findById(id) {
    return await prisma.comment.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        complaint: true,
      },
    })
  },

  async findByComplaintId(complaintId) {
    return await prisma.comment.findMany({
      where: {
        complaint_id: Number(complaintId),
      },
      orderBy: {
        creation_date: 'desc',
      },
      include: {
        complaint: true,
      },
    })
  },

  async create(data) {
    return await prisma.comment.create({
      data: {
        content: data.content,
        complaint: {
          connect: {
            id: Number(data.complaint_id),
          },
        },
      },
      include: {
        complaint: {
          include: {
            entity: true,
          },
        },
      },
    })
  },

  async delete(id) {
    return await prisma.comment.delete({
      where: {
        id: Number(id),
      },
    })
  },

  async update(id, data) {
    return await prisma.comment.update({
      where: {
        id: Number(id),
      },
      data: {
        content: data.content,
      },
      include: {
        complaint: true,
      },
    })
  },
}
