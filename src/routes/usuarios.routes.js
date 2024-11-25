import express from 'express';
import { create, read, update, remove, list } from '../controllers/usuariosController.js';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
