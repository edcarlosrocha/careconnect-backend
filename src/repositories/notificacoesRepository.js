import db from '../database/connection.js';

// Criar notificação
export const createNotificacao = async (usuarioId, mensagem) => {
  const query = `
    INSERT INTO notificacoes (usuario_id, mensagem)
    VALUES (?, ?)
  `;
  const values = [usuarioId, mensagem];
  const [result] = await db.promise().query(query, values);

  return {
    id: result.insertId,
    usuario_id: usuarioId,
    mensagem,
    lida: false,
    criado_em: new Date(),
  };
};

// Listar notificações do usuário
export const getNotificacoesByUsuario = async (usuarioId) => {
  const query = 'SELECT * FROM notificacoes WHERE usuario_id = ? AND lida = FALSE';
  const [rows] = await db.promise().query(query, [usuarioId]);
  return rows;
};

// Marcar notificação como lida
export const markNotificacaoAsLida = async (notificacaoId) => {
  const query = 'UPDATE notificacoes SET lida = TRUE WHERE id = ?';
  const [result] = await db.promise().query(query, [notificacaoId]);

  return result.affectedRows > 0;
};
