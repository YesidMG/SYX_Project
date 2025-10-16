import PropTypes from 'prop-types'
import HomeTitle from '../../components/HomeTitle/HomeTitle'
import ComplaintList from '../../features/complaints/ComplaintList'
import './HomePage.css'

HomePage.propTypes = {
  entityFilter: PropTypes.string,
}

HomePage.defaultProps = {
  entityFilter: '',
}

export default function HomePage({ entityFilter }) {
  return (
    <div className="home-page">
      <div className="main-content">
        <HomeTitle className="home-title" />
        <ComplaintList className="complaints-container" entityId={entityFilter} />
      </div>
    </div>
  )
}
