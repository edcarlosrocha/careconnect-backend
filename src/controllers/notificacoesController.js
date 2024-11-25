import * as notificacoesRepository from '../repositories/notificacoesRepository.js';

// Criar uma notificação
export const createNotificacaoController = async (req, res) => {
  const { usuarioId, mensagem } = req.body;

  if (!usuarioId || !mensagem) {
    return res.status(400).json({ message: 'UsuarioId e mensagem são obrigatórios.' });
  }

  try {
    const notificacao = await notificacoesRepository.createNotificacao(usuarioId, mensagem);
    return res.status(201).json(notificacao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar notificação.' });
  }
};

// Listar notificações do usuário
export const getNotificacoesController = async (req, res) => {
  const { usuarioId } = req.params;

  try {
    const notificacoes = await notificacoesRepository.getNotificacoesByUsuario(usuarioId);
    return res.status(200).json(notificacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao listar notificações.' });
  }
};

// Marcar uma notificação como lida
export const markNotificacaoAsLidaController = async (req, res) => {
  const { notificacaoId } = req.params;

  try {
    const result = await notificacoesRepository.markNotificacaoAsLida(notificacaoId);
    if (result) {
      return res.status(200).json({ message: 'Notificação marcada como lida.' });
    }
    return res.status(404).json({ message: 'Notificação não encontrada.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao marcar notificação como lida.' });
  }
};
