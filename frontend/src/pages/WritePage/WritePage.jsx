import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEntities } from './hooks/useEntities'
import { useSubmitComplaint } from './hooks/useSubmitComplaint'
import { EntitySelect } from './EntitySelect'
import { DescriptionInput } from './DescriptionInput'
import { FormButtons } from './FormButtons'
import './WritePage.css'

export default function WritePage() {
  const navigate = useNavigate()
  const [entity, setEntity] = useState('')
  const [description, setDescription] = useState('')
  const { entities, loading } = useEntities()
  const { submitComplaint, submitting } = useSubmitComplaint()

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await submitComplaint({
      entity_id: parseInt(entity, 10),
      description,
    })
    if (result.success) {
      alert('Su queja ha sido enviada con exito')
      setEntity('')
      setDescription('')
    } else {
      alert(result.error)
    }
  }

  return (
    <div className="write-page">
      <header>
        <h1>REDACTAR NUEVA QUEJA</h1>
      </header>
      <form className="form-section" onSubmit={handleSubmit}>
        <EntitySelect
          entities={entities}
          value={entity}
          onChange={e => setEntity(e.target.value)}
          loading={loading}
        />
        <DescriptionInput value={description} onChange={e => setDescription(e.target.value)} />
        <FormButtons onCancel={() => navigate('/')} submitting={submitting} />
      </form>
    </div>
  )
}
