import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { getCommentsByComplaint, createComment } from '../../services/api'
import './Complaint.css'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export default function CommentSection({ complaintId }) {
  const [showComments, setShowComments] = useState(false)
  const [showCommentForm, setShowCommentForm] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getCommentsByComplaint(complaintId)
        setComments(fetchedComments)
      } catch (error) {
        console.error('Error fetching comments:', error)
      } finally {
        setLoading(false)
      }
    }

    if (showComments) {
      fetchComments()
    }
  }, [complaintId, showComments])

  const handleAddComment = async () => {
    if (commentText.trim()) {
      setLoading(true)
      setError(null)
      try {
        const newComment = await createComment({
          content: commentText.trim(),
          complaint_id: complaintId,
        })

        setComments((prevComments) => [...prevComments, newComment])
        setCommentText('')
        setShowCommentForm(false)
        setShowComments(true)
      } catch (error) {
        setError('Error al crear el comentario')
        console.error('Error creating comment:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleToggleComments = () => {
    setShowComments((prev) => !prev)
    setShowCommentForm(false)
  }

  const handleToggleCommentForm = () => {
    setShowCommentForm((prev) => !prev)
    setShowComments(false)
  }

  const handleCancelComment = () => {
    setCommentText('')
    setShowCommentForm(false)
  }

  return (
    <>
      <div className="complaint-actions">
        {!showComments && !showCommentForm && (
          <>
            <button className="view-comments" onClick={handleToggleComments} disabled={loading}>
              Ver comentarios
            </button>
            <button className="add-comment" onClick={handleToggleCommentForm} disabled={loading}>
              Comentar
            </button>
          </>
        )}
        {showComments && (
          <>
            <button className="close-comments" onClick={handleToggleComments}>
              Cerrar comentarios
            </button>
            <button className="add-comment" onClick={handleToggleCommentForm}>
              Comentar
            </button>
          </>
        )}
        {showCommentForm && (
          <div className="comment-form">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Escribe tu comentario..."
              rows={3}
              maxLength={500}
            />
            <div className="comment-form-buttons">
              <button className="cancel" onClick={handleCancelComment}>
                Cancelar
              </button>
              <button className="submit" onClick={handleAddComment}>
                Comentar
              </button>
            </div>
          </div>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}

      {showComments && (
        <div className="comments-list">
          {loading && <p>Cargando comentarios...</p>}
          {!loading && comments.length === 0 && <p>No hay comentarios.</p>}
          {!loading &&
            comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <span className="comment-date">{formatDate(comment.creation_date)}</span>
                <span className="comment-content">{comment.content}</span>
              </div>
            ))}
        </div>
      )}
    </>
  )
}

CommentSection.propTypes = {
  complaintId: PropTypes.number.isRequired,
}
