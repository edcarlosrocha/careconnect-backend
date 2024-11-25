import db from '../database/connection.js';

// Criar pagamento
export const createPagamento = async (usuarioId, valor) => {
  const query = `
    INSERT INTO pagamentos (usuario_id, valor)
    VALUES (?, ?)
  `;
  const values = [usuarioId, valor];
  const [result] = await db.promise().query(query, values);

  return {
    id: result.insertId,
    usuario_id: usuarioId,
    valor,
    status: 'pendente',
    criado_em: new Date(),
  };
};

// Listar pagamentos de um usuário
export const getPagamentosByUsuario = async (usuarioId) => {
  const query = 'SELECT * FROM pagamentos WHERE usuario_id = ?';
  const [rows] = await db.promise().query(query, [usuarioId]);
  return rows;
};

// Atualizar status de um pagamento
export const updateStatusPagamento = async (pagamentoId, status) => {
  const query = 'UPDATE pagamentos SET status = ? WHERE id = ?';
  const [result] = await db.promise().query(query, [status, pagamentoId]);

  return result.affectedRows > 0;
};
