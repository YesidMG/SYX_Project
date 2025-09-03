const API_URL = import.meta.env.VITE_API_URL;

// Obtener todas las quejas
export async function getComplaints(entityName, signal) {
  let url = `${API_URL}/complaints`;
  if (entityName && entityName !== "Todas") {
    url += `?entity_name=${encodeURIComponent(entityName)}`;
  }
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error('Error al obtener quejas');
  return res.json();
}

// Obtener todas las entidades
export async function getEntities(signal) {
  const res = await fetch(`${API_URL}/entities`, { signal });
  if (!res.ok) throw new Error('Error al obtener entidades');
  return res.json();
}

// Obtener reportes de entidades
export async function getEntityReport(captcha, signal) {
  const res = await fetch(`${API_URL}/entities/report`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ captcha }),
    signal
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Error al obtener el reporte de entidades');
  }

  return res.json();
}

// Enviar una nueva queja
export async function postComplaint({ entity_id, title, description, captcha }) {
  const res = await fetch(`${API_URL}/complaints`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entity_id, title, description, captcha }),
  });
  if (!res.ok) throw new Error('Error al enviar la queja');
  return res.json();
}
