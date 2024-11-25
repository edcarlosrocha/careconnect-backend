import express from 'express';
import usuariosRoutes from './usuarios.routes.js';
import notificacoesRoutes from './notificacoes.routes.js';
import pagamentosRoutes from './pagamentos.routes.js';
import agendamentosRoutes from './agendamentos.routes.js';
import perfilPacienteRoutes from './perfil-paciente.routes.js';


const router = express.Router();

// Rotas base
router.get('/', (req, res) => {
  res.status(200).json({ message: 'API funcionando corretamente' });
});

router.use('/usuarios', usuariosRoutes);
router.use('/notificacoes', notificacoesRoutes);
router.use('/pagamentos', pagamentosRoutes);
router.use('/agendamentos', agendamentosRoutes);
router.use('/perfil-paciente', perfilPacienteRoutes);


export default router;
