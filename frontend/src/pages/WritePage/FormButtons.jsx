import PropTypes from 'prop-types'

FormButtons.propTypes = {
  onCancel: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export function FormButtons({ onCancel, submitting }) {
  return (
    <div className="buttons">
      <button className="cancel" type="button" onClick={onCancel}>
        Volver al inicio
      </button>
      <button className="accept" type="submit" disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar'}
      </button>
    </div>
  )
}
