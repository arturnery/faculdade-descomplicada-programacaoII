Disciplina - Programação II

Este repositório tem como principal objetivo armazenar os códigos das aulas práticas da disciplina, com o intuito de aprimorar minhas habilidades em diversos tópicos. Isso inclui a criação e consumo de APIs com controle de autenticação utilizando Node.js, MongoDB como banco de dados, Postman para testar e desenvolver APIs, e boas práticas de programação e mercado.
📚 Organização do Repositório

A pasta MediApp contém o projeto desenvolvido nesta disciplina. Na raiz, você encontrará o diagrama de entidade e relacionamento do projeto, que visa administrar um consultório médico.
💻 Projeto da Disciplina

O projeto tem a finalidade de simular um consultório médico, onde o médico é o administrador das consultas. As consultas podem incluir prescrições (receitas) e têm um relacionamento com o médico. Abaixo está o diagrama de entidade-relacionamento do projeto para um melhor entendimento da estrutura.

![ConsultorioMedico-drawio](https://github.com/user-attachments/assets/fe42f047-5401-4672-a05f-6408ddb3c447)


ℹ️ Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

    Instalou a versão mais recente do Node.js de acordo com seu sistema operacional (para a aula, foi utilizado Windows 10/11).
    Instalou uma IDE da sua preferência (para a aula, foi utilizado o VSCode).
    Instalou um navegador de sua escolha (para a aula, foi utilizado o Google Chrome).
    Instalou o MongoDB Compass para trabalhar com MongoDB e assistiu ao módulo 3.
    Criou sua conta para utilizar o Postman. A instalação do Postman Desktop é opcional, pois você pode utilizar a versão web.

❗️ Estrutura

A estrutura básica do projeto está organizada da seguinte forma:

markdown

└── **RAIZ** MediApp/
    ├── **FRONTEND** medi-app/
    └── **BACKEND** src/

🚀 Execução do Projeto
Backend

Para iniciar o backend, navegue até a pasta src e execute:

bash

node index.js

Ou utilize o plugin CodeRunner, conforme fizemos em aula.
Frontend

Para iniciar o frontend, navegue até a pasta medi-app e execute:

bash

npm run dev

Nota: Para executar ambas as partes do projeto, você precisará de terminais e portas diferentes.
ATENÇÃO

Nas coleções de validação da aplicação via Postman, lembre-se de verificar (ou criar) o arquivo de ambiente (environment) e ajustar as configurações conforme necessário.

Sinta-se à vontade para fazer ajustes adicionais conforme suas necessidades específicas! Se precisar de mais ajuda ou tiver outras perguntas, estou aqui para ajudar.
