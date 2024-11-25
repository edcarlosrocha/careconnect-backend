import express from 'express';
import { createNotificacaoController, getNotificacoesController, markNotificacaoAsLidaController } from '../controllers/notificacoesController.js';

const router = express.Router();

// Criar uma notificação
router.post('/', createNotificacaoController);

// Listar notificações de um usuário
router.get('/:usuarioId', getNotificacoesController);

// Marcar notificação como lida
router.put('/lida/:notificacaoId', markNotificacaoAsLidaController);

export default router;
