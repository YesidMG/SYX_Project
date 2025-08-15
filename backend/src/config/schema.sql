CREATE TABLE entidades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    logo VARCHAR(255)
);

CREATE TABLE quejas (
    id SERIAL PRIMARY KEY,
    entidad_id INTEGER REFERENCES entidades(id),
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(1500) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO entidades (nombre, logo) VALUES ('SENA', 'img/logo_entidades/sena.png');
INSERT INTO quejas (entidad_id, titulo, descripcion) VALUES
(1, 'Demora en trámites', 'He experimentado demoras en los trámites administrativos del SENA.'),
(1, 'Falta de información', 'No hay suficiente información sobre los cursos disponibles en la página web.');