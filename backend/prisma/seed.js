const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.comment.deleteMany({})
  await prisma.complaint.deleteMany({})
  await prisma.entity.deleteMany({})

  // Entidades públicas base
  const entitiesData = [
    {
      name: 'Empresa de Energía de Boyacá (EBSA)',
      logo: 'ebsa.png',
    },
    {
      name: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      logo: 'dian.png',
    },
    {
      name: 'Gobernación de Boyacá',
      logo: 'gobo.png',
    },
    {
      name: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      logo: 'icbf.png',
    },
    {
      name: 'SENA Regional Boyacá',
      logo: 'sena.png',
    },
  ]

  // Inserta entidades y guarda los IDs
  const createdEntities = []
  for (const entity of entitiesData) {
    const created = await prisma.entity.create({ data: entity })
    createdEntities.push(created)
  }

  // Quejas de ejemplo
  await prisma.complaint.createMany({
    data: [
      {
        description: 'Demoras en trámites del SENA.',
        entity_id: createdEntities[4].id, // SENA
        creation_date: new Date(),
      },
      {
        description:
          'No hay suficiente información sobre los cursos disponibles en la página web oficial de la Gobernación de Boyacá, lo que dificulta que los ciudadanos encuentren rápidamente lo que necesitan.',
        entity_id: createdEntities[2].id, // Gobernación
        creation_date: new Date(),
      },
      {
        description: 'La plataforma del SENA no funciona correctamente.',
        entity_id: createdEntities[4].id, // SENA
        creation_date: new Date(),
      },
      {
        description: 'Atención deficiente del ICBF.',
        entity_id: createdEntities[3].id, // ICBF
        creation_date: new Date(),
      },
      {
        description:
          'Facturas de EBSA con cobros dudosos en consumo de energía, lo que genera preocupación entre los usuarios que sienten que están pagando más de lo que corresponde.',
        entity_id: createdEntities[0].id, // EBSA
        creation_date: new Date(),
      },
      {
        description: 'Frecuentes cortes de energía en veredas cercanas a Tunja.',
        entity_id: createdEntities[0].id, // EBSA
        creation_date: new Date(),
      },
      {
        description: 'Atención lenta en la DIAN.',
        entity_id: createdEntities[1].id, // DIAN
        creation_date: new Date(),
      },
      {
        description:
          'El sistema en línea de la DIAN se cae constantemente, especialmente en fechas clave para la presentación de impuestos, lo que causa retrasos y multas a muchos contribuyentes.',
        entity_id: createdEntities[1].id, // DIAN
        creation_date: new Date(),
      },
      {
        description:
          'La Gobernación no publica información actualizada sobre proyectos de infraestructura vial.',
        entity_id: createdEntities[2].id, // Gobernación
        creation_date: new Date(),
      },
      {
        description: 'Asignación de recursos poco clara.',
        entity_id: createdEntities[2].id, // Gobernación
        creation_date: new Date(),
      },
      {
        description: 'La línea de atención del ICBF siempre está ocupada.',
        entity_id: createdEntities[3].id, // ICBF
        creation_date: new Date(),
      },
      {
        description:
          'Los programas de nutrición infantil del ICBF no llegan de manera oportuna a todas las comunidades rurales, dejando a muchos niños sin acceso a este apoyo fundamental.',
        entity_id: createdEntities[3].id, // ICBF
        creation_date: new Date(),
      },
      {
        description: 'Instructores del SENA incumplen horarios.',
        entity_id: createdEntities[4].id, // SENA
        creation_date: new Date(),
      },
      {
        description: 'Equipos en mal estado en talleres del SENA.',
        entity_id: createdEntities[4].id, // SENA
        creation_date: new Date(),
      },
      {
        description: 'Cargos extra en facturas de EBSA.',
        entity_id: createdEntities[0].id, // EBSA
        creation_date: new Date(),
      },
      {
        description: 'Falta acompañamiento en facturación electrónica.',
        entity_id: createdEntities[1].id, // DIAN
        creation_date: new Date(),
      },
      {
        description:
          'Oficinas de la Gobernación sin señalización adecuada para orientar a los usuarios, lo que provoca pérdida de tiempo y confusión en quienes necesitan realizar trámites.',
        entity_id: createdEntities[2].id, // Gobernación
        creation_date: new Date(),
      },
      {
        description: 'Demora en programas de apoyo familiar del ICBF.',
        entity_id: createdEntities[3].id, // ICBF
        creation_date: new Date(),
      },
      {
        description: 'Confirmación tardía de inscripciones en cursos del SENA.',
        entity_id: createdEntities[4].id, // SENA
        creation_date: new Date(),
      },
      {
        description: 'Suspensiones de energía sin aviso previo.',
        entity_id: createdEntities[0].id, // EBSA
        creation_date: new Date(),
      },
    ],
    skipDuplicates: true,
  })

  const complaints = await prisma.complaint.findMany({
    include: {
      entity: true, // Esto incluye los datos de la entidad
    },
  })

  const formatted = complaints.map(c => ({
    ...c,
    logo: c.entity.logo,
    entity_name: c.entity.name,
  }))

  await prisma.comment.createMany({
    data: [
      {
        complaint_id: complaints[0].id,
        content: 'Estoy totalmente de acuerdo con esta queja.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[1].id,
        content:
          'A mí me pasó lo mismo con la plataforma, y tuve que ir presencialmente a resolverlo. Fue un desgaste enorme.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[2].id,
        content:
          'Pienso que el servicio debería mejorar pronto, ya que afecta a muchas personas que dependen de estos trámites.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[3].id,
        content: 'Esto sucede desde hace meses, deberían dar una solución definitiva.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[4].id,
        content:
          'En mi caso, llamé al servicio al cliente y no me dieron respuesta clara, solo me pidieron esperar.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[5].id,
        content: 'El problema no es nuevo, ya lo había reportado y sigue igual.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[6].id,
        content:
          'La atención en la oficina principal es un poco mejor, pero en línea sigue siendo pésima.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[7].id,
        content:
          'Esto afecta directamente mi trabajo, porque necesito entregar reportes y la plataforma no ayuda.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[8].id,
        content:
          'Deberían abrir un canal de WhatsApp o algo más ágil, porque por teléfono nunca responden.',
        creation_date: new Date(),
      },
      {
        complaint_id: complaints[9].id,
        content: 'Gracias por reportarlo, pensé que era el único con este problema.',
        creation_date: new Date(),
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
