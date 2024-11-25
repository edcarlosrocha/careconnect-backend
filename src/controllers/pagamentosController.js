import * as pagamentosRepository from '../repositories/pagamentosRepository.js';

// Criar um pagamento
export const createPagamentoController = async (req, res) => {
  const { usuarioId, valor } = req.body;

  if (!usuarioId || !valor) {
    return res.status(400).json({ message: 'UsuárioId e valor são obrigatórios.' });
  }

  try {
    const pagamento = await pagamentosRepository.createPagamento(usuarioId, valor);
    return res.status(201).json(pagamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar pagamento.' });
  }
};

// Listar pagamentos de um usuário
export const getPagamentosController = async (req, res) => {
  const { usuarioId } = req.params;

  try {
    const pagamentos = await pagamentosRepository.getPagamentosByUsuario(usuarioId);
    return res.status(200).json(pagamentos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao listar pagamentos.' });
  }
};

// Atualizar o status de um pagamento
export const updateStatusPagamentoController = async (req, res) => {
  const { pagamentoId } = req.params;
  const { status } = req.body;

  if (!status || !['pendente', 'concluido', 'falhou'].includes(status)) {
    return res.status(400).json({ message: 'Status inválido.' });
  }

  try {
    const result = await pagamentosRepository.updateStatusPagamento(pagamentoId, status);
    if (result) {
      return res.status(200).json({ message: 'Status de pagamento atualizado.' });
    }
    return res.status(404).json({ message: 'Pagamento não encontrado.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar status de pagamento.' });
  }
};
