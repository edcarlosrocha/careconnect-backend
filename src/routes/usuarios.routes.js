import express from 'express';
import { create, read, update, remove, list } from '../controllers/usuariosController.js';
import { login, logout } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', remove);

// Rota de login
router.post('/login', login);
router.post('/logout', logout);

export default router;
