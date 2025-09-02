const entityRepo = require('../../infrastructure/repositories/entity.repo');

class EntityService {
  async getAllEntities() {
    return await entityRepo.findAll();
  }

  async getEntityById(id) {
    if (isNaN(id)) throw { status: 400, message: 'ID inválido' };
    const entity = await entityRepo.findById(id);
    if (!entity) throw { status: 404, message: 'Entidad no encontrada' };
    return entity;
  }

  async createEntity(data) {
    if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
      throw { status: 400, message: 'El nombre es obligatorio y debe ser texto' };
    }
    return await entityRepo.create({ name: data.name.trim(), logo: data.logo });
  }
}

module.exports = new EntityService();