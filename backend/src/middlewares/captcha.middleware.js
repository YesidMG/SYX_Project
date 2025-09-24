const fetch = require('node-fetch')

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

const HTTP_STATUS = {
  BAD_REQUEST: 400,
  INTERNAL_ERROR: 500,
}

const ERROR_MESSAGES = {
  MISSING_CAPTCHA: 'El captcha es requerido.',
  INVALID_CAPTCHA: 'El captcha no es válido.',
  SERVER_ERROR: 'Error interno en la verificación del captcha.',
}

if (!RECAPTCHA_SECRET) {
  throw new Error('Falta la variable de entorno: RECAPTCHA_SECRET_KEY')
}

// Función para verificar el captcha con la API de Google
async function verifyCaptcha(captchaResponse) {
  const params = new URLSearchParams()
  5
  params.append('secret', RECAPTCHA_SECRET)
  params.append('response', captchaResponse)

  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  })

  const data = await response.json()
  return data.success
}

// Middleware para verificar el captcha en las solicitudes entrantes
async function captchaMiddleware(req, res, next) {
  try {
    const { captcha } = req.body

    if (!captcha) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR_MESSAGES.MISSING_CAPTCHA })
    }

    if (process.env.NODE_ENV === 'development') {
      console.info('[Captcha] Bypass en desarrollo')
      return next()
    }

    const isValidCaptcha = await verifyCaptcha(captcha)

    if (!isValidCaptcha) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR_MESSAGES.INVALID_CAPTCHA })
    }

    next()
  } catch (error) {
    console.error('[Captcha] Error en verificación:', error.message)
    return res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error: ERROR_MESSAGES.SERVER_ERROR })
  }
}

module.exports = { captchaMiddleware }
