window.addEventListener('load', comecar); // Chama a função comecar() ao iniciar a página

var tarefa = null; //Variavel para pegar nome da tarefa
var globalTarefa = []; //Matriz? que receberá as tarefas
var id = 1; //contador das tarefas que servirá como id
var inp = document.querySelector('#tarefa').id; //colocando o input de texto dentro de uma variavel

function comecar() { //função comecar
    tarefa = document.querySelector('#tarefa');// atribuindo o input à variavel tarefa
    submit(); //chamando a função submit
    input(); //chamando a função input
}

function submit() { //função submit
    var form = document.querySelector('form'); // atribuindo a tag formulário à variavel form
    form.addEventListener('submit', cadastro); //executando a função cadastro quando o evento click for acionado

    function cadastro(evento) {//função cadastro
        evento.preventDefault();//impedindo o formulário de atualizar ao clicar enter ou em um botão
    }
}

function input() {//função input
    tarefa.focus();//dando foco no input de texto
    tarefa.addEventListener('keyup', escreveu);//executando a função escreveu quando o evento keyup for acionado

    function escreveu(evento) {//função escreveu
        console.log(evento);//console.log mostrando o paramentro da função
        if(evento.key == 'Enter' && tarefa.value != '') {//if para verificar se Enter foi apertado e se o input não está vazio
            insertName(evento.target.value);//chamando a função insertName mandando o texto do input de parametro
        }
    }

    function insertName(newName) {//função insertName
        globalTarefa.push(newName);//empilhando o nome da tarefa na Matriz?
        adicionar(newName);//chamando a função adicionar e mandando o nome da tarefa de paramentro
    }

    function adicionar(novo) {//função adicionar
        var dia = document.querySelector('#dia').value;//pegando o item escolhido na comboBox
        var tabela = null;//criando uma variavel para receber as linhas de cada tarefa da semana
        var linha = '<li id="id'+id+'">'+tarefa.value+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onclick="apagar('+id+')"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onclick="editar('+id+')"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></li>';
        // Linha acima: variavel linha recebendo o HTML da nova tarefa com os ids definidos e o nome da tarefa
        id++; //adicionando +1 ao id para que o próximo tenha um número diferente
        switch(dia) {//fazendo um switch no dia da semana escolhido
            case "segunda"://caso segunda
                tabela = document.getElementById("segunda");//atribuindo a coluna "segunda" à variavel tabela
                tabela.innerHTML += linha;//adicionando a tarefa na coluna
            break;//fim do caso
            case "terca"://caso terca
                tabela = document.getElementById("terca");//atribuindo a coluna "terca" à variavel tabela
                tabela.innerHTML += linha;//adicionando a tarefa na coluna
            break;//fim do caso
            case "quarta"://caso quarta
                tabela = document.getElementById("quarta");//atribuindo a coluna "quarta" à variavel tabela
                tabela.innerHTML += linha;//adicionando a tarefa na coluna
            break;//fim do caso
            case "quinta"://caso quinta
                tabela = document.getElementById("quinta");//atribuindo a coluna "quinta" à variavel tabela
                tabela.innerHTML += linha;//adicionando a tarefa na coluna
            break;//fim do caso
            case "sexta"://caso sexta
                tabela = document.getElementById("sexta");//atribuindo a coluna "sexta" à variavel tabela
                tabela.innerHTML += linha;//adicionando a tarefa na coluna
            break;//fim do caso
            case "sabado"://caso sabado
                tabela = document.getElementById("sabado");//atribuindo a coluna "sabado" à variavel tabela
                tabela.innerHTML += linha;//adicionando a tarefa na coluna
            break;//fim do caso
            case "domingo"://caso domingo
                tabela = document.getElementById("domingo");//atribuindo a coluna "domingo" à variavel tabela
                tabela.innerHTML += linha;//adicionando a tarefa na coluna
            break;//fim do caso
        }
    }
}

function apagar(index) {//função apagar
    cod = "id" + index;//criando o codigo da tarefa atribuindo a palavra "id" com o número do parametro
    document.getElementById(cod).style.display = "none";//ajustando o display da tarefa para none (isso deixa a tarefa invisivel na lista)
    var indice = index - 1;//atribuindo o indice da tarefa para o parametro - 1 (num vetor, começamos do 0, ou seja, uma tarefa de número 2 estaria no vetor como 1)
    globalTarefa.splice(indice, 1)//retirando a tarefa da Matriz? a partir do indice
}

function editar(index) {//função editar
    var divEditar = document.querySelector("#editarDiv").style.display = "block";
    editado = document.querySelector("#editado");

    editado.addEventListener('keyup', editou);//executando a função editou quando o evento keyup for acionado

    function editou(evento) {//função editou
        if(evento.key == 'Enter' && editado.value != '') {//if para verificar se Enter foi apertado e se o input não está vazio
            updateName(evento.target.value, index);
        }
    }

    function updateName(atualizar, index) {//função updateName
        indexFinal = "#id" + id;
        divEditar = document.querySelector("#editarDiv").style.display = "none";

        var linhaAlterar = document.querySelectorAll(indexFinal)[0];
        var linha2 = '<li id="id'+index+'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onclick="apagar("'+index+'"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onclick="editar("'+index+'")><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></li>';
    }
}