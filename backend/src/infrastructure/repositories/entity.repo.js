const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async findAll() {
    return await prisma.entity.findMany();
  },

  async findById(id) {
    return await prisma.entity.findUnique({ where: { id: Number(id) } });
  },

  async create(data) {
    return await prisma.entity.create({ data });
  }
};