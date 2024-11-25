import * as agendamentosRepository from '../repositories/agendamentosRepository.js';

// Criar agendamento
export const createAgendamentoController = async (req, res) => {
  const { pacienteId, cuidadorId, dataAgendamento } = req.body;

  if (!pacienteId || !cuidadorId || !dataAgendamento) {
    return res.status(400).json({ message: 'PacienteId, CuidadorId e DataAgendamento são obrigatórios.' });
  }

  try {
    const agendamento = await agendamentosRepository.createAgendamento(pacienteId, cuidadorId, dataAgendamento);
    return res.status(201).json(agendamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar agendamento.' });
  }
};

// Listar agendamentos de um paciente
export const getAgendamentosController = async (req, res) => {
  const { pacienteId } = req.params;

  try {
    const agendamentos = await agendamentosRepository.getAgendamentosByPaciente(pacienteId);
    return res.status(200).json(agendamentos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao listar agendamentos.' });
  }
};

// Atualizar status de agendamento
export const updateStatusAgendamentoController = async (req, res) => {
  const { agendamentoId } = req.params;
  const { status } = req.body;

  if (!status || !['pendente', 'confirmado', 'concluido', 'cancelado'].includes(status)) {
    return res.status(400).json({ message: 'Status inválido.' });
  }

  try {
    const result = await agendamentosRepository.updateStatusAgendamento(agendamentoId, status);
    if (result) {
      return res.status(200).json({ message: 'Status de agendamento atualizado.' });
    }
    return res.status(404).json({ message: 'Agendamento não encontrado.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar status de agendamento.' });
  }
};

// Cancelar agendamento
export const cancelAgendamentoController = async (req, res) => {
  const { agendamentoId } = req.params;

  try {
    const result = await agendamentosRepository.cancelAgendamento(agendamentoId);
    if (result) {
      return res.status(200).json({ message: 'Agendamento cancelado.' });
    }
    return res.status(404).json({ message: 'Agendamento não encontrado.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao cancelar agendamento.' });
  }
};
