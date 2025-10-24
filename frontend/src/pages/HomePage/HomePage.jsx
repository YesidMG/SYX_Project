import PropTypes from 'prop-types'
import HomeTitle from '../../components/HomeTitle/HomeTitle'
import ComplaintList from '../../features/complaints/ComplaintList'
import './HomePage.css'
import { useAuth } from '../../context/AuthContext'
import { checkUserStatus } from '../../services/authApi'
import { useNavigate } from 'react-router-dom'

HomePage.propTypes = {
  entityFilter: PropTypes.string,
}

HomePage.defaultProps = {
  entityFilter: '',
}

function HomePage({ entityFilter }) {
  const { user, isGuest } = useAuth()
  const navigate = useNavigate()

  const handleDelete = async (complaintId) => {
    if (!isGuest) {
      const status = await checkUserStatus(user.name)
      if (status !== 'activo') {
        alert('Sesión caducada')
        navigate('/login')
        return
      }
    }
    // ...código para eliminar la queja...
  }

  const handleChangeState = async (complaintId, newState) => {
    if (!isGuest) {
      const status = await checkUserStatus(user.name)
      if (status !== 'activo') {
        alert('Sesión caducada')
        navigate('/login')
        return
      }
    }
    // ...código para cambiar el estado...
  }

  return (
    <div className="home-page">
      <div className="main-content">
        <HomeTitle className="home-title" />
        <ComplaintList className="complaints-container" entityId={entityFilter} />
      </div>
    </div>
  )
}

export default HomePage
