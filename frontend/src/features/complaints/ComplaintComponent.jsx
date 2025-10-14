import PropTypes from 'prop-types'
import { ComplaintHeader } from './components/ComplaintHeader'
import { ComplaintsOptionsMenu } from './components/ComplaintOptionsMenu'
import { ComplaintDescription } from './components/ComplaintDescription'
import CommentSection from './CommentSection'
import DeleteModal from '../../components/DeleteModal/DeleteModal'
import StateChangeModal from '../../components/StateChangeModal/StateChangeModal'
import PasswordConfirmModal from '../../components/PasswordConfirmModal/PasswordConfirmModal'
import { useComplaintActions } from './hooks/useComplaintActions'
import './ComplaintComponent.css'

export function ComplaintComponent({ complaint, onStateChange }) {
  const actions = useComplaintActions(complaint.id, onStateChange)

  return (
    <div className="complaint-wrapper">
      <div className="container">
        <ComplaintHeader
          entity_name={complaint.entity_name}
          logo={complaint.logo}
          creation_date={complaint.creation_date}
          state={complaint.state}
          optionsMenu={
            <ComplaintsOptionsMenu
              showMenu={actions.showMenu}
              onMenuClick={e => {
                e.stopPropagation()
                actions.setShowMenu(!actions.showMenu)
              }}
              onStateChange={() => {
                actions.setShowMenu(false)
                actions.setShowStateModal(true)
              }}
              onDelete={() => {
                actions.setShowMenu(false)
                actions.setShowDeleteModal(true)
              }}
              menuRef={actions.menuRef}
              buttonRef={actions.buttonRef}
            />
          }
        />
        <ComplaintDescription description={complaint.description} />
      </div>
      <CommentSection complaintId={complaint.id} />
      <StateChangeModal
        open={actions.showStateModal}
        onClose={() => actions.setShowStateModal(false)}
        onConfirm={selectedState => {
          actions.setNewState(selectedState)
          actions.setPendingAction('changeState')
          actions.setShowPasswordModal(true)
          actions.setShowStateModal(false)
        }}
      />
      <DeleteModal
        open={actions.showDeleteModal}
        onClose={() => actions.setShowDeleteModal(false)}
        onConfirm={() => {
          actions.setPendingAction('delete')
          actions.setShowPasswordModal(true)
          actions.setShowDeleteModal(false)
        }}
      />
      <PasswordConfirmModal
        open={actions.showPasswordModal}
        onClose={() => {
          actions.setShowPasswordModal(false)
          actions.setPendingAction(null)
          actions.setNewState('')
        }}
        onConfirm={actions.handleSecureAction}
      />
    </div>
  )
}

ComplaintComponent.propTypes = {
  complaint: PropTypes.shape({
    id: PropTypes.number.isRequired,
    entity_name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onStateChange: PropTypes.func.isRequired,
}
