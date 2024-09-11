ProgramaçaoII

Esse repositório tem como principal objetivo guardar os códigos das aulas práticas da disciplina para aprimorar suas habilidades em vários tópicos, incluindo:

- Utilização de **Node.js**
- **MongoDB** como banco de dados
- Criação e consumo de APIs com autenticação
- **Postman** para testes e desenvolvimento de APIs
- Boas práticas de programação e mercado

📚 Organização desse repositório

A pasta Medi-App contém o projeto construindo nessa disciplina. Na raiz, temos o diagrama de entidade e relacionamento do projeto construído que tem a intenção de administrar um consultório médico.

💻 Projeto da Disciplina

O projeto da disciplina tem a intenção de simular um consultório médico onde o médico é o administrador da consulta. A consulta pode ter prescrições (receitas) além do relacionamento com o médico. Abaixo temos o diagrama de entidade-relacionamento do projeto para melhor entendimento da estrutura.

![ConsultorioMedico-drawio](https://github.com/user-attachments/assets/94c96a92-5994-41b9-96fd-a4c2896dbcf0)

ℹ️ Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

    Instalou a versão mais recente do <Node.js> de acordo com seu sistema operacional;
    Instalou uma IDE da sua preferência;
    Instalou o navegador da sua preferência;
    Instalou o Mongo DBCompass para trabalhar com MongoDB;
    Criou sua conta para utilizar o Postman. A instalação do Postman Desktop é opcional, pois você pode utilizar no navegador.

❗️Estrutura

A estrutura básica do projeto está separada da seguinte forma:

└── **RAIZ** MediApp/
  ├── **FRONTEND** medi-app/
  └── **BACKEND** src/

🚀 Execução do Projeto

Explicacao:

    no backend é subir um projeto node padrão, node index.js na raiz da pasta do backend ou utilizar o plugin CodeRunner.
    e no frontend utilizando o comando npm run dev na raiz da pasta do frontend.

    Lembrando que para subir as duas partes, você precisará de terminais e portas diferentes.

ATENÇÃO: nas coleções de validação da aplicação via Postman, lembre-se de verificar (ou criar) o arquivo de ambiente (environment) e verificar a porta que sua aplicação está sendo disponibilizada. Implemente as requisições extras que você precisar.

"📷 Capturas de Tela do Projeto"

Tela de Loguin
![Screenshot-1](https://github.com/user-attachments/assets/b9c4cc61-b92f-409f-b1f7-b1d29bc60e28)

Home
![Screenshot-3](https://github.com/user-attachments/assets/96b9e91d-55da-4dfc-a8e0-b155cb585aaa)

Medico (Registrar e listar)

![Screenshot-10](https://github.com/user-attachments/assets/6fc146ff-4f26-4a2f-9058-5afe585b6c0c)
![Screenshot-12](https://github.com/user-attachments/assets/87d8b5f9-7398-452d-af1b-a40b08804298)

Paciente (Registrar e listar)
![Screenshot-14](https://github.com/user-attachments/assets/4ef6db1b-677f-4820-baff-3fda1c115db6)
![Screenshot-16](https://github.com/user-attachments/assets/6d57fc42-b198-4d3c-becf-3c16cd8bc2cd)

Consulta (Registrar e listar)
![Screenshot-18](https://github.com/user-attachments/assets/f97a4e40-4ca0-4267-9d4b-bd8fe2418eb5)
![Screenshot-20](https://github.com/user-attachments/assets/b29885ae-56a7-48ce-bba6-2a80c70610a9)

