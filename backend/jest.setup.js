// Carga las variables de entorno específicas para test
require('dotenv').config({ path: './.env.test' })

process.env.NODE_ENV = process.env.NODE_ENV || 'test'

if (!process.env.RECAPTCHA_SECRET_KEY) {
  process.env.RECAPTCHA_SECRET_KEY = 'fake-secret-for-tests'
}
