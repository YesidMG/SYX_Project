import PropTypes from 'prop-types'

ComplaintDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export function ComplaintDescription({ description }) {
  return (
    <div className="description">
      <p>{description}</p>
    </div>
  )
}
