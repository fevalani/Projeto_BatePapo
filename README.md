<h1 align="center">
    Projeto_BatePapo
</h1>

<p align="center"> <a href="https://github.com/">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/fevalani/Projeto_BatePapo?style=for-the-badge">
  </a>
</p>

<h4 align="center"> 
	 Status: Entregue.
</h4>

## Sobre

Quinto projeto realizado durante o **Bootcamp Responde Aí** do [Responde Aí](https://page.respondeai.com.br/bootcamp). <br>

Terceiro projeto com JavaScript foi a implementação de um bate-papo totalmente funcional, inspirado no saudoso Bate-Papo UOL.

---

## Requisitos

- Chat
    - [x]  Ao entrar no site, este deve carregar as mensagens do servidor e exibi-las conforme layout fornecido
    
    - [x]  Existem 3 tipos de mensagem:
        - Mensagens de status (**Entrou** ou **Saiu** da sala): deve ter o fundo cinza
        - Mensagens reservadas (**Reservadamente**): deve ter o fundo rosa
        - Mensagens normais: devem ter o fundo branco
        
    - [x]  A cada 3 segundos o site deve re-carregar as mensagens do servidor para manter sempre atualizado
    
    - [x]  O chat deverá ter rolagem automática por padrão, ou seja, sempre que novas mensagens forem adicionadas ao final do chat ele deve scrollar para o final

    - [x]  As mensagens com **Reservadamente** só devem ser exibidas se o nome do destinatário for igual ao nome do usuário que está usando o chat (ou senão ele poderia ver as mensagens reservadas para outras pessoas)


- Entrada na sala
    - [x]  Ao entrar no site, o usuário deverá ser perguntado com um `prompt` ****seu lindo nome
    
    - [x]  Após inserção do nome, este deve ser enviado para o servidor pra cadastrar o usuário
        - Caso o servidor responda com sucesso, o usuário poderá entrar na sala
        - Caso o servidor responda com erro, deve-se pedir para o usuário digitar outro nome, pois este já está em uso
    
    - [x]  Enquanto o usuário estiver na sala, a cada 5 segundos o site deve avisar ao servidor que o usuário ainda está presente, ou senão será considerado que "Saiu da sala"


- Envio de mensagem
    - [x]  Ao enviar uma mensagem, esta deve ser enviada para o servidor
        - Caso o servidor responda com sucesso, você deve obter novamente as mensagens do servidor e atualizar o chat
        - Caso o servidor responda com erro, significa que esse usuário não está mais na sala e a página deve ser atualizada (e com isso voltando pra etapa de pedir o nome)

    - [x]  Nesse envio, deve ser informado o remetente, o destinatário e se a mensagem é reservada ou não.
        - Escolher um destinário e se a mensagem é reservada ou pública é um **requisito bônus** (ver abaixo). Logo, se você não implementar o bônus, sempre envie destinatário como **Todos** e a mensagem como **pública**.
---

## Layout

O layout da aplicação se encontra no Figma:

<a href="https://www.figma.com/file/eviXSw3MnQVphvpalRT78c/Chat-UOL?node-id=0%3A1">
  <img alt="Project Figma" src="https://img.shields.io/badge/%20Layout%20-Figma-%2304D361?style=for-the-badge&logo=appveyor">
</a>


### Mobile


<p align="center">
  <img alt="Desktop Homepage" title="#Homepage" src="imagens/readme.png" width="200px" height="355px">
  <img alt="Desktop Homepage" title="#Homepage" src="imagens/readme2.png" width="200px" height="355px">
</p>
<p align="center">
  <img alt="Mobile Homepage" title="#Homepage" src="imagens/readme3.png" width="200px" height="355px">
  <img alt="Mobile Homepage" title="#Homepage" src="imagens/readme4.png" width="200px" height="355px">
</p>

## Tech Used

Foram usadas as seguintes ferramentas para o desenvolvimento do projeto:

- **[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html5.org/)**
- **[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)**
- **[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)**

#### **Utilities**

- Prototype: **[Figma](https://www.figma.com/)** → **[Protótipo (Bate-Papo UOL)](https://www.figma.com/file/eviXSw3MnQVphvpalRT78c/Chat-UOL?node-id=0%3A1)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fonts: **[Roboto](https://fonts.google.com/specimen/Roboto)**

---

## Authors

<p>
<a style="border-radius: 50px;" width="100px;" href="https://github.com/fevalani">
 <img style="border-radius: 50px;" src="https://avatars.githubusercontent.com/u/81244714?v=4" width="100px;" alt="Fernando Valani"/>
 <br />
 <sub><b>Fernando Valani</b></sub></a>
 <br />

## </p>

## License

👋🏽 Get in Touch!

---
