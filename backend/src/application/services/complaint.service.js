const complaintRepo = require('../../infrastructure/repositories/complaint.repo');

class ComplaintService {
    async getAllComplaints() {
        return await complaintRepo.findAll();
    }

    async getComplaintById(id) {
        if (isNaN(id)) throw { status: 400, message: 'ID inválido' };
        const complaint = await complaintRepo.findById(id);
        if (!complaint) throw { status: 404, message: 'Queja no encontrada' };
        return complaint;
    }

    async getComplaintsByEntity(entityId) {
        if (isNaN(entityId)) throw { status: 400, message: 'ID de entidad inválido' };
        return await complaintRepo.findByEntityId(entityId);
    }

    async createComplaint(data) {
        if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
            throw { status: 400, message: 'El título es obligatorio y debe ser texto' };
        }
        if (!data.description || typeof data.description !== 'string' || data.description.trim() === '') {
            throw { status: 400, message: 'La descripción es obligatoria y debe ser texto' };
        }
        if (!data.entity_id || isNaN(data.entity_id)) {
            throw { status: 400, message: 'El ID de la entidad es obligatorio' };
        }
        if (!data.captcha || data.captcha !== 'valid_captcha_token') {
            throw { status: 400, message: 'Captcha inválido' };
        }else{
            //Falta proceso de validación real de captcha
            console.log("Captcha validado correctamente");
        }
        return await complaintRepo.create({
            entity_id: Number(data.entityId),
            title: data.title.trim(),
            description: data.description.trim(),
        });
    }
}

module.exports = new ComplaintService();