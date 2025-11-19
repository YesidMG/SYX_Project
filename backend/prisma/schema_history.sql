// Entrar a la base de datos y ejecutar el siguiente SQL
// para mover la tabla complaint_history al esquema history

CREATE SCHEMA IF NOT EXISTS history;
ALTER TABLE public."complaint_history" SET SCHEMA history;