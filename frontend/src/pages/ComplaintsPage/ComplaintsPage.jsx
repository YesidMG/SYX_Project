import PropTypes from 'prop-types'
import HomeTitle from '../../components/HomeTitle/HomeTitle'
import ComplaintList from '../../features/complaints/ComplaintList'
import './ComplaintsPage.css'

ComplaintsPage.propTypes = {
  entityFilter: PropTypes.string,
}

ComplaintsPage.defaultProps = {
  entityFilter: '',
}

function ComplaintsPage({ entityFilter }) {
  return (
    <div className="main-content">
      <HomeTitle className="home-title" />
      <ComplaintList className="complaints-container" entityId={entityFilter} />
    </div>
  )
}

export default ComplaintsPage
