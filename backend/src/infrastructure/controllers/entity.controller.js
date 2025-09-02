const entityService = require('../../application/services/entity.service');

exports.getAll = async (req, res, next) => {
  try {
    const entities = await entityService.getAllEntities();
    res.json(entities);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const entity = await entityService.getEntityById(Number(req.params.id));
    res.json(entity);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const entity = await entityService.createEntity(req.body);
    res.status(201).json(entity);
  } catch (err) {
    next(err);
  }
};