const historyRepo = require('../repositories/history.repo')

class HistoryService {
  async getStateHistory() {
    return await historyRepo.getCompleteStateHistory()
  }

  async getCompletedComplaintsReport() {
    return await historyRepo.getCompletedComplaintsReport()
  }
}

module.exports = new HistoryService()
