import express from 'express';
import usuariosRoutes from './usuarios.routes.js';
import notificacoesRoutes from './notificacoes.routes.js';


const router = express.Router();

// Rotas base
router.get('/', (req, res) => {
  res.status(200).json({ message: 'API funcionando corretamente' });
});

router.use('/usuarios', usuariosRoutes);
router.use('/notificacoes', notificacoesRoutes);

export default router;
