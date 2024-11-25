import db from '../database/connection.js';

// Criar perfil do paciente
export const createPerfilPaciente = async (usuarioId, foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero, dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados) => {
  const query = `
    INSERT INTO perfil_paciente (
      usuario_id, foto, nome_completo, cpf, endereco, tipo_sanguineo, genero,
      data_nascimento, horario_necessario, alergias, diabetes, altura, peso, resumo_cuidados
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [usuarioId, foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero, dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados];
  const [result] = await db.promise().query(query, values);

  return {
    id: result.insertId,
    usuario_id: usuarioId,
    foto,
    nome_completo: nomeCompleto,
    cpf,
    endereco,
    tipo_sanguineo: tipoSanguineo,
    genero,
    data_nascimento: dataNascimento,
    horario_necessario: horarioNecessario,
    alergias,
    diabetes,
    altura,
    peso,
    resumo_cuidados: resumoCuidados,
    criado_em: new Date(),
  };
};

// Atualizar perfil do paciente
export const updatePerfilPaciente = async (usuarioId, foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero, dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados) => {
  const query = `
    UPDATE perfil_paciente
    SET foto = ?, nome_completo = ?, cpf = ?, endereco = ?, tipo_sanguineo = ?, genero = ?,
    data_nascimento = ?, horario_necessario = ?, alergias = ?, diabetes = ?, altura = ?, peso = ?, resumo_cuidados = ?
    WHERE usuario_id = ?
  `;
  const values = [foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero, dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados, usuarioId];
  const [result] = await db.promise().query(query, values);

  return result.affectedRows > 0;
};

// Obter perfil do paciente
export const getPerfilPaciente = async (usuarioId) => {
  const query = 'SELECT * FROM perfil_paciente WHERE usuario_id = ?';
  const [rows] = await db.promise().query(query, [usuarioId]);
  return rows[0];  // Retorna o primeiro registro, já que usuario_id é único
};
