import express from 'express';
import { createPerfilPacienteController, updatePerfilPacienteController, getPerfilPacienteController } from '../controllers/perfilPacienteController.js';

const router = express.Router();

// Criar perfil do paciente
router.post('/', createPerfilPacienteController);

// Atualizar perfil do paciente
router.put('/:usuarioId', updatePerfilPacienteController);

// Obter perfil do paciente
router.get('/:usuarioId', getPerfilPacienteController);

export default router;
