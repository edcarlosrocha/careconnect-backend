import * as perfilPacienteRepository from '../repositories/perfilPacienteRepository.js';

// Criar perfil do paciente
export const createPerfilPacienteController = async (req, res) => {
  const { usuarioId, foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero, dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados } = req.body;

  if (!usuarioId || !foto || !nomeCompleto || !cpf || !dataNascimento || !tipoSanguineo || !genero || !horarioNecessario) {
    return res.status(400).json({ message: 'Campos obrigatórios não fornecidos.' });
  }

  try {
    const perfilPaciente = await perfilPacienteRepository.createPerfilPaciente(
      usuarioId, foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero,
      dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados
    );
    return res.status(201).json(perfilPaciente);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar perfil do paciente.' });
  }
};

// Atualizar perfil do paciente
export const updatePerfilPacienteController = async (req, res) => {
  const { usuarioId } = req.params;
  const { foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero, dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados } = req.body;

  try {
    const result = await perfilPacienteRepository.updatePerfilPaciente(
      usuarioId, foto, nomeCompleto, cpf, endereco, tipoSanguineo, genero,
      dataNascimento, horarioNecessario, alergias, diabetes, altura, peso, resumoCuidados
    );
    if (result) {
      return res.status(200).json({ message: 'Perfil do paciente atualizado.' });
    }
    return res.status(404).json({ message: 'Perfil do paciente não encontrado.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar perfil do paciente.' });
  }
};

// Obter perfil do paciente
export const getPerfilPacienteController = async (req, res) => {
  const { usuarioId } = req.params;

  try {
    const perfilPaciente = await perfilPacienteRepository.getPerfilPaciente(usuarioId);
    if (perfilPaciente) {
      return res.status(200).json(perfilPaciente);
    }
    return res.status(404).json({ message: 'Perfil do paciente não encontrado.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar perfil do paciente.' });
  }
};
