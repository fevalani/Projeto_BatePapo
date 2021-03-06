let usuario;
let contatoSelecionado = "Todos";
let visibilidadeSelecionada = "message";

document
  .querySelector(".texto-usuario")
  .addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      login();
    }
  });

function login() {
  usuario = document.querySelector(".texto-usuario").value;
  const carregando = document.querySelector(".login div:last-child");
  carregando.innerHTML =
    "<img src='./imagens/200.gif' alt='logo bate papo uol'>";

  const respostaLogin = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants",
    { name: usuario }
  );

  respostaLogin.then(loginAceito);
  respostaLogin.catch(erroLogin);
}

function erroLogin(erro) {
  if (erro.response.status === 400) {
    alert("Ihh rapaz, esse nome já está sendo utilizado");
    const loginErrado = document.querySelector(".login div:last-child");

    loginErrado.innerHTML = `
      <input class="texto-usuario" type="text" placeholder="Digite outro nome, usuário já em uso!" name="usuário">
      <input onclick="login()" class="botao-usuario" type="button" value="Entrar"></input>
    `;
  }
}

function loginAceito(respostaLogin) {
  setInterval(estouOnline, 5000);
  setInterval(receberDados, 3000);
  setInterval(receberParticipantes, 10000);
}

function receberDados() {
  const promessa = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages"
  );
  promessa.then(distribuirChat);
}

function receberParticipantes() {
  const participantes = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants"
  );
  participantes.then(distribuirContatos);
}

function estouOnline() {
  const promessa = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/status",
    { name: usuario }
  );
}

function distribuirChat(dados) {
  const mensagens = dados.data;
  const esconder = document.querySelector(".login");
  esconder.classList.add("escondido");
  const chat = document.querySelector(".chat");

  chat.innerHTML = "";

  for (let i = 0; i < mensagens.length; i++) {
    if (
      mensagens[i].type === "private_message" &&
      mensagens[i].to === usuario
    ) {
      chat.innerHTML += `
        <li class="${mensagens[i].type}">
          <span class="hora">
            (${mensagens[i].time})
          </span>
          <span class="texto">
            <strong>${mensagens[i].from}</strong>
            reservadamente para 
            <strong>${mensagens[i].to}</strong>
            :  ${mensagens[i].text}
          </span>
        </li>
      `;
    } else if (mensagens[i].type === "message") {
      chat.innerHTML += `
        <li class="${mensagens[i].type}">
          <span class="hora">
            (${mensagens[i].time})
          </span>
          <span class="texto">
            <strong>${mensagens[i].from}</strong>
             para 
            <strong>${mensagens[i].to}</strong>
            :  ${mensagens[i].text}
          </span>
        </li>
      `;
    } else {
      chat.innerHTML += `
        <li class="${mensagens[i].type}">
          <span class="hora">
            (${mensagens[i].time})
          </span>
          <span class="texto">
            <strong>${mensagens[i].from}</strong>
            ${mensagens[i].text}
          </span>
        </li>
      `;
    }
  }

  const ultimaMensagem = document.querySelector(".chat li:last-child");
  ultimaMensagem.scrollIntoView();
}

function distribuirContatos(participantes) {
  const contatos = participantes.data;
  const perfis = document.querySelector(".contatos");

  perfis.innerHTML = `
    <li onclick="selecionarContato(this)">
      <div>
          <ion-icon name="people"></ion-icon>
          <span class="nome-selecionado">Todos</span>
      </div>
      <ion-icon class="verde escondido" name="checkmark-sharp"></ion-icon>
    </li>
  `;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].name !== usuario) {
      if (contatos[i].name === contatoSelecionado) {
        perfis.innerHTML += `
        <li onclick="selecionarContato(this)">
            <div>
                <ion-icon name="person-circle"></ion-icon>
                <span class="nome-selecionado">${contatos[i].name}</span>
            </div>
            <ion-icon class="verde escondido selecionado" name="checkmark-sharp"></ion-icon>
        </li>
      `;
      } else {
        perfis.innerHTML += `
          <li onclick="selecionarContato(this)">
              <div>
                  <ion-icon name="person-circle"></ion-icon>
                  <span class="nome-selecionado">${contatos[i].name}</span>
              </div>
              <ion-icon class="verde escondido" name="checkmark-sharp"></ion-icon>
          </li>
        `;
      }
    }
  }
}

document.querySelector(".texto-input").addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    adicionarMensagem();
  }
});

function adicionarMensagem() {
  const enviar = document.querySelector(".texto input").value;
  const mensagem = {
    from: usuario,
    to: contatoSelecionado,
    text: enviar,
    type: visibilidadeSelecionada,
  };

  const promessa = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages",
    mensagem
  );
  promessa.then(mensagemEnviada);
  promessa.catch(mensagemErro);

  document.querySelector(".texto input").value = "";
}

function mensagemErro() {
  alert("Usuário offline");
  window.location.reload();
}

function mensagemEnviada() {
  receberDados();
}

function abrirAba() {
  const retirarAba = document.querySelector(".container-contatos");
  retirarAba.classList.toggle("escondido");

  const trocarNome = document.querySelector(".aviso-mensagem");
  if (visibilidadeSelecionada === "message") {
    trocarNome.innerHTML = `Enviando para ${contatoSelecionado} (publicamente)`;
  } else {
    trocarNome.innerHTML = `Enviando para ${contatoSelecionado} (reservadamente)`;
  }
}

function selecionarContato(valor) {
  const mudar = valor.querySelector(".verde");
  const remover = document.querySelector(".selecionado");

  if (remover !== null) {
    if (remover.classList.contains("selecionado")) {
      remover.classList.remove("selecionado");
      mudar.classList.add("selecionado");
    } else {
      mudar.classList.add("selecionado");
    }
  } else {
    mudar.classList.add("selecionado");
  }

  contatoSelecionado =
    mudar.parentNode.querySelector(".nome-selecionado").innerHTML;
}

function selecionarVisibilidade(valor) {
  const mudar = valor.querySelector(".verde");
  const remover = document.querySelector(".selecionar");

  if (remover !== null) {
    if (remover.classList.contains("selecionar")) {
      remover.classList.remove("selecionar");
      mudar.classList.add("selecionar");
    } else {
      mudar.classList.add("selecionar");
    }
  } else {
    mudar.classList.add("selecionar");
  }

  visibilidadeSelecionada =
    mudar.parentNode.querySelector(".nome-visibilidade").innerHTML;
  if (visibilidadeSelecionada === "Público") {
    visibilidadeSelecionada = "message";
  } else {
    visibilidadeSelecionada = "private-message";
  }
}
