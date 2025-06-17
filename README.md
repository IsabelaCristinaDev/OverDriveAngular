OverDrive - Frontend

Este é o frontend do projeto OverDrive, uma interface web feita em Angular para gerenciamento de oficinas mecânicas.

  Objetivo

Permitir o cadastro, consulta e gerenciamento de:

- Clientes
- Veículos
- Ordens de Serviço
-Serviços
-Peças

 Tecnologias

- Angular 17.0.10
- PrimeNG
- Node.js

  Como rodar o projeto

1. Clone o repositório:
   
   git clone https://github.com/IsabelaCristinaDev/OverDriveAngular.git
   

2. Acesse a pasta do projeto:
   
   cd Frontend-Angular
   

3. Instale as dependências:
   
   npm install
   

4. Inicie o servidor:
   
   ng serve
   

5. Acesse:
   
   https//localhost:4200
   

 Estrutura


src/
├── app/
│   ├── components/       → Componentes de tela
│   ├── services/         → Consumo da API
├── angular.json          → Configurações do projeto
├── package.json          → Dependências


  Contribuição


1. Crie uma branch:
   
   git checkout -b feature/nome-da-feature
   
2. Commit e push:
   
   git add .
   git commit -m "Descrição da feature"
   git push origin feature/nome-da-feature
   
3. Crie um Pull Request para a branch `main`.