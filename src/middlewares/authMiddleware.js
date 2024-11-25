import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Middleware para verificar se o usuário está autenticado
export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // 'Bearer token'

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido.' });
    }
    req.user = user;
    next();
  });
};
