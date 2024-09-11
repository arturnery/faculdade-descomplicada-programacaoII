Disciplina - ProgramaçaoII

Esse repositório tem como principal objetivo guardar os códigos das aulas práticas da disciplina para aprimorar minhas habilidades em vários tópicos, incluindo a criação e consumo de APIs com controle de autenticação utilizando NodeJS e utilizando boas práticas de programação e mercado.
📚 Organização desse repositório

A pasta Medi-App contém o projeto construindo nessa disciplina. Na raiz, temos o diagrama de entidade e relacionamento do projeto construído que tem a intenção de administrar um consultório médico.

💻 Projeto da Disciplina

O projeto da disciplina tem a intenção de simular um consultório médico onde o médico é o administrador da consulta. A consulta pode ter prescrições (receitas) além do relacionamento com o médico. Abaixo temos o diagrama de entidade-relacionamento do projeto para melhor entendimento da estrutura.


![ConsultorioMedico-drawio](https://github.com/user-attachments/assets/fe42f047-5401-4672-a05f-6408ddb3c447)

    Clique na imagem para visualizar em tamanho original.

ℹ️ Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

    Instalou a versão mais recente do <Node.js> de acordo com seu sistema operacional;
        para aula, foi utilizado o Windows 10/11
    Instalou uma IDE da sua preferência;
        para aula, foi utilizado o VSCode
    Instalou o navegador da sua preferência;
        para aula, foi utilizado o Google Chrome;
    Instalou o Mongo DBCompass para trabalhar com MongoDB (e assistiu o módulo 3);
    Criou sua conta para utilizar o Postman. A instalação do Postman Desktop é opcional, pois você pode utilizar no navegador.

❗️Estrutura

A estrutura básica do projeto está separada da seguinte forma:

└── **RAIZ** MediApp/
  ├── **FRONTEND** medi-app/
  └── **BACKEND** src/

🚀 Execução do Projeto

Explicacao:

    o backend é subir um projeto node padrão, node index.js na raiz da pasta do backend ou utilizar o plugin CodeRunner como fizemos em aula;
    e no frontend utilizando o comando npm run dev na raiz da pasta do frontend.

    Lembrando que para subir as duas partes, você precisará de terminais e portas diferentes.

ATENÇÃO: nas coleções de validação da aplicação via Postman, lembre-se de verificar (ou criar) o arquivo de ambiente (environment) e verificar a 
