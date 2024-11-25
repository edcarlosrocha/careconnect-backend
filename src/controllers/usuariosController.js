// src/controllers/usuariosController.js

import { createUsuario, getUsuarioById, updateUsuario, deleteUsuario, getAllUsuarios } from '../repositories/usuariosRepository.js';

// Função para criar o usuário (já existente)
export const create = async (req, res) => {
  try {
    const { nome, email, senha, celular, endereco, perfil } = req.body;
    const usuarioData = { nome, email, senha, celular, endereco, perfil };

    // Chama a função do repository para criar o usuário
    const usuario = await createUsuario(usuarioData);

    // Retorna a resposta com os dados do usuário
    res.status(201).json({
      message: 'Usuário criado com sucesso!',
      usuario,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

// Função para listar todos os usuários
export const list = async (req, res) => {
  try {
    const usuarios = await getAllUsuarios();

    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar usuários' });
  }
};

// Função para obter um usuário por ID
export const read = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await getUsuarioById(id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter usuário' });
  }
};

// Função para atualizar o usuário
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioData = req.body;

    const usuarioAtualizado = await updateUsuario(id, usuarioData);

    if (!usuarioAtualizado) {
      return res.status(404).json({ message: 'Usuário não encontrado ou erro ao atualizar' });
    }

    res.status(200).json({
      message: 'Usuário atualizado com sucesso!',
      usuario: usuarioAtualizado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar usuário' });
  }
};

// Função para deletar o usuário
export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioDeletado = await deleteUsuario(id);

    if (!usuarioDeletado) {
      return res.status(404).json({ message: 'Usuário não encontrado ou erro ao deletar' });
    }

    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar usuário' });
  }
};
