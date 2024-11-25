import * as pacienteCuidadorRepository from '../repositories/pacienteCuidadorRepository.js';

// Associar um cuidador a um paciente
export const associarCuidadorPacienteController = async (req, res) => {
  const { cuidadorId, pacienteId } = req.body;

  if (!cuidadorId || !pacienteId) {
    return res.status(400).json({ message: 'Campos obrigatórios não fornecidos.' });
  }

  try {
    const associacaoId = await pacienteCuidadorRepository.associarCuidadorPaciente(cuidadorId, pacienteId);
    return res.status(201).json({ id: associacaoId, cuidador_id: cuidadorId, paciente_id: pacienteId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao associar cuidador a paciente.' });
  }
};

// Listar pacientes de um cuidador
export const listarPacientesDoCuidadorController = async (req, res) => {
  const { cuidadorId } = req.params;

  try {
    const pacientes = await pacienteCuidadorRepository.listarPacientesDoCuidador(cuidadorId);
    return res.status(200).json(pacientes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao listar pacientes do cuidador.' });
  }
};

// Listar cuidadores de um paciente
export const listarCuidadoresDoPacienteController = async (req, res) => {
  const { pacienteId } = req.params;

  try {
    const cuidadores = await pacienteCuidadorRepository.listarCuidadoresDoPaciente(pacienteId);
    return res.status(200).json(cuidadores);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao listar cuidadores do paciente.' });
  }
};
