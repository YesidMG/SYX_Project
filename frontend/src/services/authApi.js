const AUTH_API = import.meta.env.VITE_AUTH_API 

export async function checkUserStatus(name) {
  const res = await fetch(`${AUTH_API}/status`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })
  const data = await res.json()
  return data.status
}
