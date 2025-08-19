CREATE TABLE entities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    logo VARCHAR(255)
);

CREATE TABLE complaints (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER REFERENCES entities(id),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(1500) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO entities (name, logo) VALUES 
('Empresa de Energía de Boyacá (EBSA)', 'ebsa.png'),
('Dirección de Impuestos y Aduanas Nacionales (DIAN)', 'dian.png'),
('Gobernación de Boyacá', 'gobo.png'),
('Instituto Colombiano de Bienestar Familiar (ICBF)', 'icbf.png'),
('SENA Regional Boyacá', 'sena.png');

INSERT INTO complaints (entity_id, title, description) VALUES
(1, 'Demora en trámites', 'He experimentado demoras en los trámites administrativos del SENA.'),
(2, 'Falta de información', 'No hay suficiente información sobre los cursos disponibles en la página web.'),
(1, 'Problemas con la plataforma', 'La plataforma del SENA no está funcionando correctamente, lo que dificulta el acceso a los cursos.'),
(2, 'Atención al cliente deficiente', 'El servicio de atención al cliente del ICBF no responde adecuadamente a las consultas.');