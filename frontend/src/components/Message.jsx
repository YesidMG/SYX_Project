import PropTypes from 'prop-types'

Message.propTypes = {
  type: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}

export function Message({ type, children }) {
  return (
    <div className={`message ${type}`}>
      <h3>{children}</h3>
    </div>
  )
}
