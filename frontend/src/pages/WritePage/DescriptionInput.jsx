import PropTypes from 'prop-types'

DescriptionInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export function DescriptionInput({ value, onChange }) {
  return (
    <div className="description-form">
      <label>Descripción y detalles:</label>
      <textarea
        value={value}
        onChange={onChange}
        maxLength={1500}
        placeholder="Escribe la descripción de la queja"
        required
      >
        <p className="chars_counter">{value.lenght}/1500</p>
      </textarea>
    </div>
  )
}
