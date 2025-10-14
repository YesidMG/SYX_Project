import { useState, useEffect, useRef } from 'react'
import { useEntityReport } from './hooks/useEntityReport'
import { CaptchaSection } from './CaptchaSection'
import { ReportsTable } from './ReportsTable'
import { Message } from '../../components/Message'
import './ReportsPage.css'

const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_KEY

export default function ReportsPage() {
  const recaptchaRef = useRef(null)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [needsVerification, setNeedsVerification] = useState(false)
  const { data, loading, error, fetchReport } = useEntityReport()

  useEffect(() => {
    if (!captchaToken) return
    const controller = new AbortController()
    fetchReport(captchaToken, controller.signal)
    return () => controller.abort()
  }, [captchaToken, fetchReport])

  const handleCaptchaChange = token => {
    setCaptchaToken(token)
    setNeedsVerification(false)
  }

  const handleCaptchaExpire = () => {
    setCaptchaToken(null)
    setNeedsVerification(true)
    if (recaptchaRef.current) recaptchaRef.current.reset()
  }

  if (!captchaToken || needsVerification) {
    return (
      <CaptchaSection
        recaptchaRef={recaptchaRef}
        sitekey={RECAPTCHA_KEY}
        onChange={handleCaptchaChange}
        onExpired={handleCaptchaExpire}
        error={error}
      />
    )
  }

  if (loading) {
    return <Message type="loading">Cargando reportes...</Message>
  }

  if (error) {
    return <Message type="error">⚠️ {error}</Message>
  }

  return (
    <div className="reports-page">
      <header>
        <h1>TABLA DE REPORTES</h1>
      </header>
      <ReportsTable data={data} />
    </div>
  )
}
