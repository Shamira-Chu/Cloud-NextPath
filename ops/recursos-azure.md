# Recursos Criados no Microsoft Azure

## 1. Resource Group
- Nome: rg-nextpath
- Local: East US
- Finalidade: Agrupar todos os recursos do projeto.

## 2. Azure Static Web App
- Nome: nextpath-web
- Uso: Hospedagem do site NextPath
- Deploy automático via GitHub Actions

## 3. Azure SQL Database
- Nome: nextpath-db
- Modelo: SQL Server + Database (DTU FREE/MINIMO)
- Tabela utilizada: CarreirasDoFuturo

## 4. GitHub Actions
- Automação de CI/CD ativada automaticamente pela criação do Static Web App
- Build e deploy do front-end
