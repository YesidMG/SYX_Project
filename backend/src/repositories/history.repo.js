const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  async getCompleteStateHistory() {
    return await prisma.complaintHistory.findMany({
      select: {
        id: true,
        complaint_id: true,
        prev_state: true,
        new_state: true,
        change_date: true,
      },
    });
  }

}
