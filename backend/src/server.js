require('dotenv').config()

const app = require('./app')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000

async function main() {
  try {
    await prisma.$connect()
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Error conectando a la base de datos:', error)
    process.exit(1)
  }
}

main()
