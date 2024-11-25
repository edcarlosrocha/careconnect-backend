import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../database/connection.js';

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verificar se o usuário existe
    const query = 'SELECT * FROM usuarios WHERE email = ? AND deletado_em IS NULL';
    db.query(query, [email], async (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      if (results.length === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      const usuario = results[0];

      // Verificar se a senha está correta
      const isMatch = await bcrypt.compare(senha, usuario.senha);

      if (!isMatch) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }

      // Gerar o token JWT
      const payload = { id: usuario.id, email: usuario.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ message: 'Login bem-sucedido', token });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para logout
export const logout = (req, res) => {
  // Para a API sem estado, não há necessidade de invalidar o JWT no servidor
  // O cliente deve remover o token armazenado

  return res.status(200).json({ message: 'Logout bem-sucedido' });
};
