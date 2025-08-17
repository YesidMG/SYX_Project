import { useEffect, useState } from 'react';
import { getEntities, postComplaint } from '../services/api';
import './WritePage.css'

export default function WritePage() {

  // Listado provisional de entidades
  const provisionalEntities = [
    { id: 1, name: "SENA" },
    { id: 2, name: "Gobernación de Boyacá" }
  ];

  const [entity, setEntity] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [entities, setEntities] = useState(provisionalEntities);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    getEntities(controller.signal)
      .then(data => setEntities(data))
      .catch(err => {
        if (err.name !== "AbortError") {
          setEntities(provisionalEntities);
        }
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postComplaint({
        entity_id: entity,
        title,
        description,
      });

      alert('¡Queja enviada exitosamente!');
      setEntity('');
      setTitle('');
      setDescription('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="write-page">
      <header><h1>REDACTAR NUEVA QUEJA</h1></header>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="entity-form">
          <label>Entidad</label>
          {loading ? (
            <span>Cargando entidades...</span>
          ) : (
            <select
              value={entity}
              onChange={e => setEntity(e.target.value)}
              required
            >
              <option value="">Seleccione una entidad</option>
              {entities.map(ent => (
                <option key={ent.id} value={ent.id}>{ent.name}</option>
              ))}
            </select>
          )}
        </div>
        <div className="title-form">
          <label>Título de la queja</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="description-form">
          <label>Descripción y detalles</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button className="accept" type="submit">Aceptar</button>
          <button className="cancel" type="button">Cancelar</button>
        </div>
      </form>
    </div>
  )
}