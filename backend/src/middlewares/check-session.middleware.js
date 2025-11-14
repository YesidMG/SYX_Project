  const HTTP_STATUS = {
    BAD_REQUEST: 400,
    INTERNAL_ERROR: 500,
  }

  const ERROR_MESSAGES = {
    MISSING_USERNAME: 'El username es requerido.',
    INVALID_USERNAME: 'El username no es válido.',
    INVALID_SESSION: 'La sesión no es válida.',
    SERVER_ERROR: 'Error interno en la verificación.',
  }

  async function verifySessionStatus(userName) {
    console.log('Veifying session for user:', userName)
    // Lógica para verificar la existencia del usuario
    // Lógica para verificar el estado de la sesión del usuario
    return true // Ejemplo: siempre devuelve true
  }

  async function checkSessionMiddleware(req, res, next) {
    try {
      const { userName } = req.body

      if (!userName) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR_MESSAGES.MISSING_USERNAME })
      }

      const isValidSession = await verifySessionStatus(userName)

      if (!isValidSession) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR_MESSAGES.INVALID_USERNAME })
      }

      next()
    } catch (error) {
      console.error('[Session] Error de sesión :', error.message)
      return res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error: ERROR_MESSAGES.SERVER_ERROR })
    }
  }

  module.exports = { checkSessionMiddleware }
