CREATE DATABASE IF NOT EXISTS careconnect;

USE careconnect;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  celular VARCHAR(15),
  endereco TEXT,
  perfil ENUM('paciente', 'cuidador') NOT NULL,
  ativo BOOLEAN DEFAULT TRUE,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletado_em TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE notificacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  mensagem TEXT NOT NULL,
  lida BOOLEAN DEFAULT FALSE,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE pagamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  status ENUM('pendente', 'concluido', 'falhou') DEFAULT 'pendente',
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE perfil_paciente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  foto VARCHAR(255),
  nome_completo VARCHAR(255) NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  endereco VARCHAR(255),
  tipo_sanguineo ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
  genero ENUM('masculino', 'feminino', 'outro') NOT NULL,
  data_nascimento DATE NOT NULL,
  horario_necessario ENUM('dia', 'noite') NOT NULL,
  alergias BOOLEAN DEFAULT FALSE,
  diabetes BOOLEAN DEFAULT FALSE,
  altura DECIMAL(5, 2),
  peso DECIMAL(5, 2),
  resumo_cuidados TEXT,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE perfil_cuidador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  foto VARCHAR(255),
  nome_completo VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  genero ENUM('masculino', 'feminino', 'outro') NOT NULL,
  data_nascimento DATE NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  endereco VARCHAR(255),
  especialidade VARCHAR(255),
  disponibilidade VARCHAR(255),
  minhas_qualificacoes TEXT,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE paciente_cuidador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cuidador_id INT NOT NULL,
  paciente_id INT NOT NULL,
  data_associacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cuidador_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (paciente_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
