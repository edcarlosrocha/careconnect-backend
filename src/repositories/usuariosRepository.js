import db from '../database/connection.js';

export const createUsuario = async (usuarioData) => {
  const { nome, email, senha, celular, endereco, perfil } = usuarioData;

  const query = `
    INSERT INTO usuarios (nome, email, senha, celular, endereco, perfil, criado_em)
    VALUES (?, ?, ?, ?, ?, ?, NOW())
  `;

  const values = [nome, email, senha, celular, endereco, perfil];
  const [result] = await db.promise().query(query, values);

  return {
    id: result.insertId,
    nome,
    email,
    celular,
    endereco,
    perfil,
    ativo: true,
  };
};

// Função para listar todos os usuários
export const getAllUsuarios = async () => {
  const query = 'SELECT * FROM usuarios WHERE deletado_em IS NULL';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Função para obter um usuário por ID
export const getUsuarioById = async (id) => {
  const query = 'SELECT * FROM usuarios WHERE id = ? AND deletado_em IS NULL';
  const [rows] = await db.promise().query(query, [id]);
  return rows[0];
};


export const updateUsuario = async (id, usuarioData) => {
  const { nome, email, senha, celular, endereco, perfil } = usuarioData;

  const query = `
    UPDATE usuarios
    SET nome = ?, email = ?, senha = ?, celular = ?, endereco = ?, perfil = ?, atualizado_em = NOW()
    WHERE id = ? AND deletado_em IS NULL
  `;

  const values = [nome, email, senha, celular, endereco, perfil, id];
  const [result] = await db.promise().query(query, values);

  return result.affectedRows > 0 ? { id, nome, email, celular, endereco, perfil } : null;
};

// Função para deletar um usuário (soft delete)
export const deleteUsuario = async (id) => {
  const query = 'UPDATE usuarios SET deletado_em = NOW() WHERE id = ? AND deletado_em IS NULL';
  const [result] = await db.promise().query(query, [id]);

  return result.affectedRows > 0;
};
