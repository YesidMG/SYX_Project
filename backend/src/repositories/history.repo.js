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
    })
  },

  async getCompletedComplaintsReport() {
    return await prisma.$queryRaw`
        SELECT 
          c.id AS complaint_id,
          c.creation_date,
          ch.latest_change_date AS completion_date,
          AGE(ch.latest_change_date, c.creation_date)::text AS time_to_complete
        FROM public.complaints c
        LEFT JOIN (
          SELECT 
            complaint_id,
            MAX(change_date) AS latest_change_date
          FROM history.complaint_history
          WHERE new_state = 'CLOSED'
          GROUP BY complaint_id
        ) ch ON ch.complaint_id = c.id
        ORDER BY c.id;
      `
  },
}
