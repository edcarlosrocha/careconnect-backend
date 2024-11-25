import db from '../database/connection.js';

// Criar perfil do cuidador
export const createPerfilCuidador = async (usuarioId, foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes) => {
  const query = `
    INSERT INTO perfil_cuidador (
      usuario_id, foto, nome_completo, email, genero, data_nascimento, cpf, endereco,
      especialidade, disponibilidade, minhas_qualificacoes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [usuarioId, foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes];
  const [result] = await db.promise().query(query, values);

  return {
    id: result.insertId,
    usuario_id: usuarioId,
    foto,
    nome_completo: nomeCompleto,
    email,
    genero,
    data_nascimento: dataNascimento,
    cpf,
    endereco,
    especialidade,
    disponibilidade,
    minhas_qualificacoes: minhasQualificacoes,
    criado_em: new Date(),
  };
};

// Atualizar perfil do cuidador
export const updatePerfilCuidador = async (usuarioId, foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes) => {
  const query = `
    UPDATE perfil_cuidador
    SET foto = ?, nome_completo = ?, email = ?, genero = ?, data_nascimento = ?, cpf = ?, endereco = ?,
    especialidade = ?, disponibilidade = ?, minhas_qualificacoes = ?
    WHERE usuario_id = ?
  `;
  const values = [foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes, usuarioId];
  const [result] = await db.promise().query(query, values);

  return result.affectedRows > 0;
};

// Obter perfil do cuidador
export const getPerfilCuidador = async (usuarioId) => {
  const query = 'SELECT * FROM perfil_cuidador WHERE usuario_id = ?';
  const [rows] = await db.promise().query(query, [usuarioId]);
  return rows[0];  // Retorna o primeiro registro, já que usuario_id é único
};
