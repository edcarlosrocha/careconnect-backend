import express from 'express';

const router = express.Router();

// Rotas base
router.get('/', (req, res) => {
  res.status(200).json({ message: 'API funcionando corretamente' });
});

export default router;
