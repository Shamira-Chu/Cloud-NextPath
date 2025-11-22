# Global Solution - Cloud Computing & DevOps

**Tema:** O Futuro do Trabalho com Inteligência Artificial
**Trilha Escolhida:** Trilha B - Deploy no Azure (Web App + Banco de Dados) [cite: 155, 170]

## 👨‍💻 Integrantes
* **Nome:** [Denise Shamira Chuquimia] - RM: [563714]
* **Nome:** [Guilherme Naoki Hirayama] - RM: [563727]
* **Nome:** [Tandara Sartore Perez de Azevedo] - RM: [566455]
* **Nome:** [Thiago Alves Bassi Silva] - RM: [562304]
* **Turma:** [1TWDPF]


## 📝 Descrição da Solução
Este projeto consiste no deploy de uma Single Page Application (SPA) desenvolvida para a disciplina de *Responsive Web Design*. A aplicação apresenta um "mapa digital das profissões do futuro", destacando carreiras impulsionadas por IA.

A infraestrutura na nuvem foi provisionada utilizando **Microsoft Azure**, separando a aplicação frontend (App Service) do banco de dados (Azure SQL).

## 🏗️ Arquitetura da Solução
*(Insira aqui o diagrama de arquitetura exportado do draw.io)*

**Fluxo:**
1. **Usuário** acessa a URL pública via Navegador.
2. **Azure App Service** entrega a aplicação estática (SPA).
3. **Azure SQL Database** armazena os dados de carreiras e competências (provisionado para demonstração).

## 🚀 Passo a Passo do Deploy

### 1. Configuração do Ambiente (Resource Group)
Todos os recursos foram agrupados em um Resource Group exclusivo para facilitar o gerenciamento e exclusão posterior.

### 2. Banco de Dados (Azure SQL)
* Foi criado um **SQL Server** e um **SQL Database**.
* Regras de firewall configuradas para permitir acesso do IP local e serviços Azure.
* Os scripts de criação (`schema.sql`) e população (`seed.sql`) encontram-se na pasta `/db` deste repositório.

### 3. Aplicação Web (Azure App Service)
* Serviço criado utilizando a stack **Node/Web** (para servir arquivos estáticos).
* **Application Insights** habilitado para monitoramento.
* Deploy realizado via **Deployment Center** conectado a este repositório GitHub (ou VS Code Extension).

## 🧪 Como Validar a Aplicação

### Acesso ao Frontend
Acesse a URL pública da aplicação:
>[A URL DO SITE AZURE - https://white-dune-0eb4cdd0f.3.azurestaticapps.net/]

### Validação do Banco de Dados
Para validar a criação das tabelas e inserção dos dados:
1. Acesse o recurso **SQL Database** no portal Azure.
2. Clique em **Query editor (preview)** no menu lateral.
3. Faça login com as credenciais de administrador.
4. Execute a query de teste:
   ```sql
   SELECT * FROM Carreirasdofuturo;