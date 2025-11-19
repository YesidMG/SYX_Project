import { useReport } from './useReport'
import { getEntityReport, getCompletedComplaintsReport } from '../../../services/api'

export function useEntityReport() {
  return useReport(getEntityReport, [])
}

export function useCompletedComplaintsReport() {
  return useReport(getCompletedComplaintsReport, [])
}

export function useReportByType(type = '', userName = '') {
  const fetcher = signal =>
    type === 'complaints-by-entity'
      ? getEntityReport(signal, userName)
      : getCompletedComplaintsReport(signal, userName)
  return useReport(fetcher, [type, userName], Boolean(type))
}
