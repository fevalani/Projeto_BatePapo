const mensagens = [
  {
    remetente: "Maria",
    destinatario: "João",
    status: "todos",
    hora: "09:10:38",
    texto: "Oi João :)",
  },
  {
    remetente: "Jorge",
    destinatario: "Maria",
    status: "reservado",
    hora: "09:15:48",
    texto: "Oi gatinha quer tc?",
  },
  {
    remetente: "Soares",
    destinatario: "Todos",
    status: "aviso",
    hora: "09:22:48",
    texto: "sai da sala...",
  },
];

const contatos = [
  {
    nome: "Maria",
    status: "online"
  },
  {
    nome: "João",
    status: "online"
  },
  {
    nome: "Marcos",
    status: "offline"
  },
  {
    nome: "Fernando",
    status: "online"}
];

let usuario;
//distribuirChat();

function login(){
  usuario = document.querySelector(".texto-usuario").value;
  const carregando = document.querySelector(".login div:last-child");

  console.log(usuario);
  if(usuario !== null && usuario !== ''){
    carregando.innerHTML = "<img src='./imagens/200.gif' alt='logo bate papo uol'>";
    setTimeout(distribuirChat, 1000);
  }

}

function distribuirChat(){
  const esconder = document.querySelector(".login");
  esconder.classList.add('escondido');
  const chat = document.querySelector(".chat");

  //enviar aviso entrar na sala

  for (let i = 0; i < mensagens.length; i++) {
    if(mensagens[i].status === 'reservado'){
      chat.innerHTML += `
        <li class="${mensagens[i].status}">
          <span class="hora">
            (${mensagens[i].hora})
          </span>
          <span class="texto">
            <strong>${mensagens[i].remetente}</strong>
             reservadamente para 
            <strong>${mensagens[i].destinatario}</strong>
            :  ${mensagens[i].texto}
          </span>
        </li>
      `;
    }else if(mensagens[i].status === 'todos'){
      chat.innerHTML += `
        <li class="${mensagens[i].status}">
          <span class="hora">
            (${mensagens[i].hora})
          </span>
          <span class="texto">
            <strong>${mensagens[i].remetente}</strong>
             para 
            <strong>${mensagens[i].destinatario}</strong>
            :  ${mensagens[i].texto}
          </span>
        </li>
      `;
    }else{
      chat.innerHTML += `
        <li class="${mensagens[i].status}">
          <span class="hora">
            (${mensagens[i].hora})
          </span>
          <span class="texto">
            <strong>${mensagens[i].remetente}</strong>
            ${mensagens[i].texto}
          </span>
        </li>
      `;
    }
  }
  distribuirContatos();
}

function distribuirContatos(){
  const perfis = document.querySelector(".contatos");
  for (let i = 0; i < contatos.length; i++) {
    if(contatos[i].status === 'online'){
      perfis.innerHTML += `
        <li onclick="selecionarContato(this)">
            <div>
                <ion-icon name="person-circle"></ion-icon>
                <span>${contatos[i].nome}</span>
            </div>
            <ion-icon class="verde escondido" name="checkmark-sharp"></ion-icon>
        </li>
      `;
    }
  }
}

function adicionarMensagem(){
  const enviar = document.querySelector(".texto input").value;
  const chat = document.querySelector(".chat");

  chat.innerHTML += `
    <li class="todos">
      <span class="hora">
        (09:22:48)
      </span>
      <span class="texto">
        <strong>${usuario}</strong>: 
        ${enviar}
      </span>
    </li>
  `;

}

function abrirAba(){
    const retirar = document.querySelector(".container-contatos");
    retirar.classList.toggle('escondido');
}

function selecionarContato(valor){
    const mudar = valor.querySelector(".verde");
    const remover = document.querySelector(".selecionado");
    
    if(remover !== null){
      if(remover.classList.contains('selecionado')){
        remover.classList.remove('selecionado');
        mudar.classList.add('selecionado');
      }else{
        mudar.classList.add('selecionado');
      }
    }else{
      mudar.classList.add('selecionado');
    }

    //retornar quem esta selecionado
    
}

function selecionarVisibilidade(valor){
  const mudar = valor.querySelector(".verde");
  const remover = document.querySelector(".selecionar");

  if(remover !== null){
    if(remover.classList.contains('selecionar')){
      remover.classList.remove('selecionar');
      mudar.classList.add('selecionar');
    }else{
      mudar.classList.add('selecionar');
    }
  }else{
    mudar.classList.add('selecionar');
  }

  //retornar o selecionado
}