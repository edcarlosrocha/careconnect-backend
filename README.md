# CareConnect

A nossa plataforma tem como objetivo facilitar a conexão entre cuidadores de idosos com as famílias que buscam profissionais confiáveis, oferecendo um ambiente intuitivo para busca e contratação de cuidadores, garantindo ao mesmo tempo a segurança e a qualidade do serviço prestado.
Com essa abordagem, as famílias poderão buscar e comparar cuidadores de maneira prática e rápida, economizando tempo e esforço. Isso é fundamental para proporcionar a atenção e assistência que a fase da vida exige.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript no backend.
- **Express**: Framework para criação da API.
- **MySQL2**: Biblioteca para conexão com o banco de dados MySQL.
- **dotenv**: Para gerenciamento de variáveis de ambiente.

## Instalação

### 1. Clone o repositório
Clone este repositório para sua máquina local.

```bash
git clone git@github.com:edcarlosrocha/careconnect-backend.git
cd careconnect-backend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configuração do banco de dados

Execute o script SQL contido em dump.sql para criar o banco de dados e as tabelas:

```bash
mysql -u root -p < dump.sql
```

### 4. Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione a configuração de variáveis necessárias:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua-senha
DB_NAME=careconnect
```

## Execução
Após a instalação das dependências e configuração do ambiente, inicie o servidor:

```bash
npm run dev
```

A API estará disponível no endereço http://localhost:5000.

## Contribuições
Contribuições são bem-vindas! Se você encontrou algum problema ou tem sugestões de melhoria, abra uma issue ou envie um pull request.

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
