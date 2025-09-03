const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async findAll() {
        return await prisma.complaint.findMany({ 
            orderBy: { creation_date: 'desc' } 
        });
    },

    async findById(id) {
        return await prisma.complaint.findUnique({ 
            where: {id: Number(id)}
        });
    },

    async findByEntityId(entityId) {
        return await prisma.complaint.findMany( {
            where: { entity_id: Number(entityId) },
            orderBy: { creation_date: 'desc' }
        });
    },

    async create(data) {
        return await prisma.complaint.create({ data });
    }
}
