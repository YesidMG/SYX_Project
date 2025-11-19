require('dotenv').config()
const amqp = require('amqplib')

/**
 * Publica un evento de email en RabbitMQ usando un exchange fanout.
 */
async function sendEmailEvent({ to, userName, reportName, generatedAt }) {
  const conn = await amqp.connect(process.env.RABBITMQ_URL)
  const channel = await conn.createChannel()
  const queue = 'email_queue'

  const exchange = 'email_events'

  // Exchange durable para que la cola vinculada permanezca aunque no haya consumidores.
  await channel.assertExchange(exchange, 'fanout', {
    durable: true,
  })

  const message = JSON.stringify({
    to,
    userName,
    reportName,
    generatedAt: new Date(generatedAt || Date.now()).toISOString(),
  })

  // Publicar mensaje marcado como persistente; la cola durable conservará su existencia
  // y el mensaje será almacenado hasta que un consumidor lo consuma (y confirme).
  channel.publish(exchange, '', Buffer.from(message), { persistent: true })

  console.log('Evento EMAIL publicado en RabbitMQ:', message)

  await channel.close()
  await conn.close()
}

module.exports = sendEmailEvent
