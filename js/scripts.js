const mensagem = [
      {
        remetente: "Maria",
        destinatario: "João",
        status: "public",
        hora: "09:22:38",
        texto: "Oi João :)",
      },
      {
        remetente: "João",
        destinatario: "Maria",
        status: "restricted",
        hora: "09:22:48",
        texto: "Oi gatinha quer tc?",
      },
      {
        remetente: "Maria",
        destinatario: "Todos",
        status: "status",
        hora: "09:22:48",
        text0: "Sai da sala...",
      },
    ];

//const login = prompt("Digite o seu usuário: ");

function abrirAba(){
    const retirar = document.querySelector(".container-contatos");
    retirar.classList.toggle('escondido');
}

function selecionarContato(valor){
    const mudar = valor.querySelector(".verde");
    const remover = document.querySelector(".selecionado");
    if(valor.classList.contains('selecionado')){
        remover.classList.remove('selecionado');
        mudar.classList.add('selecionado');
    }else{
        mudar.classList.add('selecionado');
    }
    

}