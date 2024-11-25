import express from 'express';
import { associarCuidadorPacienteController, listarPacientesDoCuidadorController, listarCuidadoresDoPacienteController } from '../controllers/pacienteCuidadorController.js';

const router = express.Router();

// Associar cuidador a paciente
router.post('/', associarCuidadorPacienteController);

// Listar pacientes de um cuidador
router.get('/pacientes/:cuidadorId', listarPacientesDoCuidadorController);

// Listar cuidadores de um paciente
router.get('/cuidadores/:pacienteId', listarCuidadoresDoPacienteController);

export default router;
