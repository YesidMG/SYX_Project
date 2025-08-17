// Obtener todas las quejas
export async function getComplaints(entityName, signal) {
  let url = '/api/complaints';
  if (entityName && entityName !== "Todas") {
    url += `?entity_name=${encodeURIComponent(entityName)}`;
  }
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error('Error al obtener quejas');
  return res.json();
}

// Obtener todas las entidades
export async function getEntities(signal) {
  const res = await fetch('/api/entities', { signal });
  if (!res.ok) throw new Error('Error al obtener entidades');
  return res.json();
}

// Obtener reportes de entidades
export async function getReports(signal) {
  const res = await fetch('/api/reports', { signal });
  if (!res.ok) throw new Error('Error al obtener reportes');
  return res.json();
}

// Enviar una nueva queja
export async function postComplaint({ entity_id, title, description }) {
  const res = await fetch('/api/complaints', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entity_id, title, description }),
  });
  if (!res.ok) throw new Error('Error al enviar la queja');
  return res.json();
}
