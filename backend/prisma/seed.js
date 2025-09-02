const { PrismaClient } = require('../src/generated/prisma/client');
const prisma = new PrismaClient();

async function main() {

    await prisma.complaint.deleteMany({});
    await prisma.entity.deleteMany({});

    // Entidades públicas base
    const entitiesData = [
        {
            name: 'Empresa de Energía de Boyacá (EBSA)',
            logo: 'ebsa.png'
        },
        {
            name: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
            logo: 'dian.png'
        },
        {
            name: 'Gobernación de Boyacá',
            logo: 'gobo.png'
        },
        {
            name: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
            logo: 'icbf.png'
        },
        {
            name: 'SENA Regional Boyacá',
            logo: 'sena.png'
        }
    ];

    // Inserta entidades y guarda los IDs
    const createdEntities = [];
    for (const entity of entitiesData) {
        const created = await prisma.entity.create({ data: entity });
        createdEntities.push(created);
    }

    // Quejas de ejemplo
    await prisma.complaint.createMany({
        data: [
            {
                title: 'Demora en trámites',
                description: 'He experimentado demoras en los trámites administrativos del SENA.',
                entity_id: createdEntities[4].id, // SENA Regional Boyacá
                creation_date: new Date(),
            },
            {
                title: 'Falta de información',
                description: 'No hay suficiente información sobre los cursos disponibles en la página web.',
                entity_id: createdEntities[2].id, // Gobernación de Boyacá
                creation_date: new Date(),
            },
            {
                title: 'Problemas con la plataforma',
                description: 'La plataforma del SENA no está funcionando correctamente, lo que dificulta el acceso a los cursos.',
                entity_id: createdEntities[4].id, // SENA Regional Boyacá
                creation_date: new Date(),
            },
            {
                title: 'Atención al cliente deficiente',
                description: 'El servicio de atención al cliente del ICBF no responde adecuadamente a las consultas.',
                entity_id: createdEntities[3].id, // ICBF
                creation_date: new Date(),
            }
        ],
        skipDuplicates: true,
    });

    const complaints = await prisma.complaint.findMany({
        include: {
            entity: true // Esto incluye los datos de la entidad
        }
    });

    const formatted = complaints.map(c => ({
        ...c,
        logo: c.entity.logo,
        entity_name: c.entity.name
    }));
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());