export function translateStateToSpanish(state) {
  if (!state) return ''
  switch (state.toUpperCase()) {
    case 'OPEN':
      return 'Abierta'
    case 'UNDER_REVIEW':
      return 'En revisión'
    case 'CLOSED':
      return 'Cerrada'
    case 'DELETED':
      return 'Eliminada'
    default:
      return state
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/(^|\s)\S/g, s => s.toUpperCase())
  }
}
