import express from 'express';
import { createPagamentoController, getPagamentosController, updateStatusPagamentoController } from '../controllers/pagamentosController.js';

const router = express.Router();

// Criar um pagamento
router.post('/', createPagamentoController);

// Listar pagamentos de um usuário
router.get('/:usuarioId', getPagamentosController);

// Atualizar status de pagamento
router.put('/:pagamentoId', updateStatusPagamentoController);

export default router;
