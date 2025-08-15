import { useEffect, useState } from 'react'
import { getQuejas } from '../services/api'

export default function QuejasPage() {
  const [quejas, setQuejas] = useState([])

  useEffect(() => {
    getQuejas().then(data => setQuejas(data))
  }, [])

  return (
    <div>
      <h1>Lista de Quejas</h1>
      <ul>
        {quejas.map((q, i) => <li key={i}>{q.texto}</li>)}
      </ul>
    </div>
  )
}
