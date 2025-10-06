import PropTypes from 'prop-types'
import ReCAPCHA from 'react-google-recaptcha'

CaptchaSection.propTypes = {
  recaptchaRef: PropTypes.object.isRequired,
  sitekey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onExpired: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
}

export function CaptchaSection({ recaptchaRef, sitekey, onChange, onExpired, error }) {
  return (
    <div className="captcha-container">
      <h3>Por favor valide el captcha para ver los reportes:</h3>
      <ReCAPCHA
        className="rechaptcha"
        ref={recaptchaRef}
        sitekey={sitekey}
        onChange={onChange}
        onExpired={onExpired}
        onErrored={() => onExpired()}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  )
}
