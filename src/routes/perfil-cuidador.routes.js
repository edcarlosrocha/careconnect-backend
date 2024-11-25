import express from 'express';
import { createPerfilCuidadorController, updatePerfilCuidadorController, getPerfilCuidadorController } from '../controllers/perfilCuidadorController.js';

const router = express.Router();

// Criar perfil do cuidador
router.post('/', createPerfilCuidadorController);

// Atualizar perfil do cuidador
router.put('/:usuarioId', updatePerfilCuidadorController);

// Obter perfil do cuidador
router.get('/:usuarioId', getPerfilCuidadorController);

export default router;
