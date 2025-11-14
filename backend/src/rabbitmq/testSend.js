require('dotenv').config()
const amqp = require('amqplib')

async function testSend() {
  const conn = await amqp.connect(process.env.RABBITMQ_URL)
  const channel = await conn.createChannel()
  const queue = 'status-queque'
  await channel.assertQueue(queue, { durable: true })
  const message = JSON.stringify({ test: true, timestamp: new Date().toISOString() })
  channel.sendToQueue(queue, Buffer.from(message))
  console.log('Mensaje de prueba enviado')
  await channel.close()
  await conn.close()
}

testSend()