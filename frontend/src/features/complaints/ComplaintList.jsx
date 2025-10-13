import PropTypes from 'prop-types'
import { ComplaintComponent } from './ComplaintComponent'
import { Message } from '../../components/Message'
import { useComplaints } from './hooks/useComplaints'
import { Pagination } from './components/Pagination'
import './ComplaintList.css'

const PAGE_SIZE = 10

const ComplaintList = ({ entityId }) => {
  const { complaints, page, setPage, loading, error, totalPages, refresh } = useComplaints(
    entityId,
    PAGE_SIZE
  )

  if (loading) {
    return <Message type="loading">Cargando reportes...</Message>
  }

  if (error) {
    return <Message type="error">⚠️ {error}</Message>
  }

  return (
    <div className="list-container">
      {complaints.length === 0 && <p>No hay quejas registradas.</p>}
      {complaints.map(complaint => (
        <ComplaintComponent key={complaint.id} complaint={complaint} onStateChange={refresh} />
      ))}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

ComplaintList.propTypes = {
  entityId: PropTypes.number.isRequired,
}

export default ComplaintList
