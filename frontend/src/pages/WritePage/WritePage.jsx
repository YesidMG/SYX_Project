import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { getEntities, postComplaint } from '../../services/api';
import ReCAPTCHA from "react-google-recaptcha";
import './WritePage.css'

export default function WritePage() {

  const navigate = useNavigate();
  const [entity, setEntity] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const recaptchaRef = useRef();

  useEffect(() => {
    const controller = new AbortController();

    getEntities(controller.signal)
      .then(data => setEntities(data))
      .catch(err => {
        if (err.name !== "AbortError") {
          setEntities([]);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Por favor, verifica el captcha.");
      return;
    }
    try {
      await postComplaint({
        entity_id: parseInt(entity, 10),
        title,
        description,
        captcha: token,
      });

      alert('¡Queja enviada exitosamente!');
      setEntity('');
      setTitle('');
      setDescription('');
      recaptchaRef.current.reset();
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
        <div className="description-form">
          <label>Descripción y detalles</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={1500}
            placeholder="Escribe la descripción de la queja"
            required
          />
          <p className="chars_counter">{description.length}/1500</p>
        </div>
        <ReCAPTCHA className="recaptcha"
          ref={recaptchaRef}
          sitekey="6LfEW6orAAAAAAUIw3B0k13R7CZatIljI2YYR1nO"
        />
        <div className="buttons">
          <button className="cancel" type="button"
            onClick={() => navigate('/')}
          >Volver al inicio</button>
          <button className="accept" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}