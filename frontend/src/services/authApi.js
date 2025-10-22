const AUTH_API = 'http://localhost:4000' // Cambia por la URL real de tu microservicio

export async function checkUserStatus(name) {
  const res = await fetch(`${AUTH_API}/status`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })
  const data = await res.json()
  return data.status // "activo", "inactivo" o "error"
}