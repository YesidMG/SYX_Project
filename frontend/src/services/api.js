const API_URL = import.meta.env.VITE_API_URL

// Obtener todas las quejas
export async function getComplaints(entityId, signal) {
  let url = `${API_URL}/complaints`
  if (entityId) {
    url += `?entity_id=${encodeURIComponent(entityId)}`
  }
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error('Error al obtener quejas')
  return res.json()
}

// Obtener todas las entidades
export async function getEntities(signal) {
  const res = await fetch(`${API_URL}/entities`, { signal })
  if (!res.ok) throw new Error('Error al obtener entidades')
  return res.json()
}

// Obtener reportes de entidades
export async function getEntityReport(captcha, signal) {
  const res = await fetch(`${API_URL}/entities/report`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ captcha }),
    signal,
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.error || 'Error al obtener el reporte de entidades')
  }

  return res.json()
}

// Enviar una nueva queja
export async function postComplaint({ entity_id, description, captcha }) {
  const res = await fetch(`${API_URL}/complaints`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entity_id, description, captcha }),
  })
  if (!res.ok) throw new Error('Error al enviar la queja')
  return res.json()
}

// Obtener todos los comentarios de una queja
export async function getCommentsByComplaint(complaintId, signal) {
  const res = await fetch(`${API_URL}/comments/complaint/${complaintId}`, { signal })
  if (!res.ok) throw new Error('Error al obtener comentarios')
  return res.json()
}

// Crear un nuevo comentario
export async function createComment(data) {
  const res = await fetch(`${API_URL}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Error al crear el comentario')
  return res.json()
}

// Actualizar un comentario
export async function updateComment(id, data) {
  const res = await fetch(`${API_URL}/comments/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Error al actualizar el comentario')
  return res.json()
}

// Eliminar un comentario
export async function deleteComment(id) {
  const res = await fetch(`${API_URL}/comments/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Error al eliminar el comentario')
  return res.status === 204 ? null : res.json()
}
