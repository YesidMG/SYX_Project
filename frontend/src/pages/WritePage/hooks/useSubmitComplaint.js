import { useState } from 'react'
import { postComplaint } from '../../../services/api'

export function useSubmitComplaint() {
  const [submitting, setSubmitting] = useState(false)

  const submitComplaint = async ({ entity_id, description }) => {
    setSubmitting(true)
    try {
      await postComplaint({ entity_id, description })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setSubmitting(false)
    }
  }

  return { submitComplaint, submitting }
}
