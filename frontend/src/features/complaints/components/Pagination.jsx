import PropTypes from 'prop-types'

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Anterior
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          className={page === i + 1 ? 'active' : ''}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>
        Siguiente
      </button>
    </div>
  )
}
