# Passo a Passo do Deploy no Azure

## 1. Criar Resource Group
- Nome: rg-nextpath

## 2. Criar Azure Static Web App
- Selecionar GitHub como origem do código
- Selecionar branch "main"
- Framework: HTML
- Output: app/dist

## 3. Criar Banco de Dados SQL
- Criar SQL Server
- Criar Database
- Habilitar firewall para permitir acesso da sua máquina
- Criar tabela CarreirasDoFuturo
- Inserir registros de exemplo

## 4. Publicar Front-End no GitHub
- Push do código para o repositório
- GitHub Actions executa e publica automaticamente

## 5. Acessar URL pública
Exemplo:
https://white-dune-0eb4cdd0f.3.azurestaticapps.net
