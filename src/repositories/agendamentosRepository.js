import db from '../database/connection.js';

// Criar agendamento
export const createAgendamento = async (pacienteId, cuidadorId, dataAgendamento) => {
  const query = `
    INSERT INTO agendamentos (paciente_id, cuidador_id, data_agendamento)
    VALUES (?, ?, ?)
  `;
  const values = [pacienteId, cuidadorId, dataAgendamento];
  const [result] = await db.promise().query(query, values);

  return {
    id: result.insertId,
    paciente_id: pacienteId,
    cuidador_id: cuidadorId,
    data_agendamento: dataAgendamento,
    status: 'pendente',
    criado_em: new Date(),
  };
};

// Listar agendamentos de um paciente
export const getAgendamentosByPaciente = async (pacienteId) => {
  const query = 'SELECT * FROM agendamentos WHERE paciente_id = ?';
  const [rows] = await db.promise().query(query, [pacienteId]);
  return rows;
};

// Atualizar status de agendamento
export const updateStatusAgendamento = async (agendamentoId, status) => {
  const query = 'UPDATE agendamentos SET status = ? WHERE id = ?';
  const [result] = await db.promise().query(query, [status, agendamentoId]);

  return result.affectedRows > 0;
};

// Cancelar agendamento
export const cancelAgendamento = async (agendamentoId) => {
  const query = 'UPDATE agendamentos SET status = "cancelado" WHERE id = ?';
  const [result] = await db.promise().query(query, [agendamentoId]);

  return result.affectedRows > 0;
};
