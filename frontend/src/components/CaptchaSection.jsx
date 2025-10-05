import PropTypes from 'prop-types'
import ReCAPCHA from 'react-google-recaptcha'

CaptchaSection.propTypes = {
  recaptchaRef: PropTypes.object.isRequired,
  sitekey: PropTypes.string.isRequired,
}

export function CaptchaSection({ recaptchaRef, sitekey }) {
  return <ReCAPCHA className="rechaptcha" ref={recaptchaRef} sitekey={sitekey} />
}
