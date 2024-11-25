import db from '../database/connection.js';

// Associar cuidador a um paciente
export const associarCuidadorPaciente = async (cuidadorId, pacienteId) => {
  const query = `
    INSERT INTO paciente_cuidador (cuidador_id, paciente_id)
    VALUES (?, ?)
  `;
  const values = [cuidadorId, pacienteId];
  const [result] = await db.promise().query(query, values);

  return result.insertId;
};

// Listar pacientes de um cuidador
export const listarPacientesDoCuidador = async (cuidadorId) => {
  const query = `
    SELECT usuarios.*
    FROM usuarios
    JOIN paciente_cuidador ON paciente_cuidador.paciente_id = usuarios.id
    WHERE paciente_cuidador.cuidador_id = ?
  `;
  const [rows] = await db.promise().query(query, [cuidadorId]);
  return rows;
};

// Listar cuidadores de um paciente
export const listarCuidadoresDoPaciente = async (pacienteId) => {
  const query = `
    SELECT usuarios.*
    FROM usuarios
    JOIN paciente_cuidador ON paciente_cuidador.cuidador_id = usuarios.id
    WHERE paciente_cuidador.paciente_id = ?
  `;
  const [rows] = await db.promise().query(query, [pacienteId]);
  return rows;
};
