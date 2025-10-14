const PASSWORD = 'admin123'

const HTTP_STATUS = {
  BAD_REQUEST: 400,
  INTERNAL_ERROR: 500,
}

const ERROR_MESSAGES = {
  MISSING_PASSWORD: 'La constraseña es requerida.',
  INVALID_PASSWORD: 'La constraseña no es válida.',
  SERVER_ERROR: 'Error interno en la verificación.',
}

async function verifyPassword(password) {
  return password === PASSWORD
}

async function adminVerifyMiddleware(req, res, next) {
  try {
    const { password } = req.body

    if (!password) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR_MESSAGES.MISSING_PASSWORD })
    }

    const isValidPassword = await verifyPassword(password)

    if (!isValidPassword) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR_MESSAGES.INVALID_PASSWORD })
    }

    next()
  } catch (error) {
    console.error('[Captcha] Error en verificación:', error.message)
    return res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error: ERROR_MESSAGES.SERVER_ERROR })
  }
}

module.exports = { adminVerifyMiddleware }
