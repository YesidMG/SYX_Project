const historyRepo = require('../repositories/history.repo')

class HistoryService {
  async getStateHistory() {
    return await historyRepo.getCompleteStateHistory()
  }
}

module.exports = new HistoryService()
