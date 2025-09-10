const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async findAll() {
    return await prisma.entity.findMany({ orderBy: { name: 'asc' } });
  },

  async findById(id) {
    return await prisma.entity.findUnique({ where: { id: Number(id) } });
  },

  async create(data) {
    return await prisma.entity.create({ data });
  },

  async getEntitiesWithComplaintCount() {
    return await prisma.entity.findMany({
      select: {
        id: true,
        name: true,
        complaints: {
          select: { id: true }
        }
      },
      orderBy: { id: 'asc' }
    });
  }
};