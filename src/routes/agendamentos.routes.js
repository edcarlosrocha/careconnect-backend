import express from 'express';
import { createAgendamentoController, getAgendamentosController, updateStatusAgendamentoController, cancelAgendamentoController } from '../controllers/agendamentosController.js';

const router = express.Router();

// Criar agendamento
router.post('/', createAgendamentoController);

// Listar agendamentos de um paciente
router.get('/:pacienteId', getAgendamentosController);

// Atualizar status de agendamento
router.put('/:agendamentoId', updateStatusAgendamentoController);

// Cancelar agendamento
router.put('/cancelar/:agendamentoId', cancelAgendamentoController);

export default router;
