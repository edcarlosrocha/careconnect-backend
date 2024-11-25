import * as perfilCuidadorRepository from '../repositories/perfilCuidadorRepository.js';

// Criar perfil do cuidador
export const createPerfilCuidadorController = async (req, res) => {
  const { usuarioId, foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes } = req.body;

  if (!usuarioId || !foto || !nomeCompleto || !email || !cpf || !dataNascimento || !genero) {
    return res.status(400).json({ message: 'Campos obrigatórios não fornecidos.' });
  }

  try {
    const perfilCuidador = await perfilCuidadorRepository.createPerfilCuidador(
      usuarioId, foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes
    );
    return res.status(201).json(perfilCuidador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar perfil do cuidador.' });
  }
};

// Atualizar perfil do cuidador
export const updatePerfilCuidadorController = async (req, res) => {
  const { usuarioId } = req.params;
  const { foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes } = req.body;

  try {
    const result = await perfilCuidadorRepository.updatePerfilCuidador(
      usuarioId, foto, nomeCompleto, email, genero, dataNascimento, cpf, endereco, especialidade, disponibilidade, minhasQualificacoes
    );
    if (result) {
      return res.status(200).json({ message: 'Perfil do cuidador atualizado.' });
    }
    return res.status(404).json({ message: 'Perfil do cuidador não encontrado.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar perfil do cuidador.' });
  }
};

// Obter perfil do cuidador
export const getPerfilCuidadorController = async (req, res) => {
  const { usuarioId } = req.params;

  try {
    const perfilCuidador = await perfilCuidadorRepository.getPerfilCuidador(usuarioId);
    if (perfilCuidador) {
      return res.status(200).json(perfilCuidador);
    }
    return res.status(404).json({ message: 'Perfil do cuidador não encontrado.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar perfil do cuidador.' });
  }
};
