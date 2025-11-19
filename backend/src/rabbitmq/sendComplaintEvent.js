const amqp = require('amqplib')

async function sendComplaintEvent({ complaintId, description, prevState, newState }) {
  const conn = await amqp.connect(process.env.RABBITMQ_URL)
  const channel = await conn.createChannel()
  const queue = 'status-queque'
  await channel.assertQueue(queue, { durable: true })
  const message = JSON.stringify({
    complaintId,
    description,
    prevState,
    newState,
    changeDate: new Date().toISOString(),
  })
  channel.sendToQueue(queue, Buffer.from(message))
  console.log('[',new Date().toLocaleString(),']: Evento de cambio de estado de queja enviado a RabbitMQ')
  console.log('Mensaje del evento:', message)
  await channel.close()
  await conn.close()
}

module.exports = sendComplaintEvent
