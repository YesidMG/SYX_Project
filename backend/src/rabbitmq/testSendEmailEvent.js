require('dotenv').config()
const amqp = require('amqplib')

async function testSend() {
  const conn = await amqp.connect(process.env.RABBITMQ_URL + "?heartbeat=30")
  const channel = await conn.createChannel()
  const queue = 'email-queue'

  await channel.assertQueue(queue, { durable: true })

  const message = JSON.stringify({
    to: "dannaxiomaramerchan@gmail.com",
    userName: "tester",
    reportName: "Test Report",
    generatedAt: new Date().toISOString()
  })

  channel.sendToQueue(queue, Buffer.from(message))

  console.log("Mensaje de prueba enviado:", message)

  await channel.close()
  await conn.close()
}

testSend().catch(console.error)
