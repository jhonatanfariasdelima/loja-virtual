window.onload = function () {
    let formCadastro = document.querySelector(".formCadastro");
    formCadastro.addEventListener('submit', cadastrar);

function cadastrar(event){

    event.preventDefault();

    console.log("Iniciando cadastro");

    let nome = document.getElementById("tNome").value; 
    let sobrenome = document.getElementById("tSobrenome").value;
    let email = document.getElementById("tEmail").value;
    let usuario = document.getElementById("tUsuario").value;
    let senha = document.getElementById("tSenha").value;
    let confirmarSenha = document.getElementById("tConfirmarSenha").value;

    let novoUsuario = {
        nome: nome, 
        sobrenome: sobrenome,
        email: email,
        usuario: usuario,
        senha: senha,
        carrinho: []
    }

    if(validaUsuario(novoUsuario, confirmarSenha)){
        //Cadastro permitido
        executarCadastro(novoUsuario);
        alert("Usuário cadastrado com sucesso.");
        window.location.replace("../paginas/login.html"); //redireciona o usuário à página de login, após cadastrar
        return false;
        
    }

}

function validaUsuario(novoUsuario, confirmarSenha){
    if(validaSenha(novoUsuario.senha, confirmarSenha)){

    }else{
        alert("Senha errada");
        return false;
    } //eu poderia colocar apenas um ! na frente do validaSenha, q iria fazer a mesma função

    if(validaDadosEmBranco(novoUsuario)){

    }else{
        alert("Campos em branco");
        return false;
    }

    if(validaCadastroDuplicado(novoUsuario)){

    } else{
        alert("Usuário já cadastrado");
        return false;
    } 

    return true;
}


function validaSenha(senha, confirmarSenha){

    console.log("Analisando senha");
    console.log("Senha", senha);
    console.log("Confirmar senha", confirmarSenha);

    if(senha === confirmarSenha){
        return true;
    
    }

    return false;

}

function validaDadosEmBranco(novoUsuario){
    if(novoUsuario.nome.trim().length === 0){ //a função trim tira todos os espaços em branco; Remove whitespace from both sides of a string
        return false;
    }

    if(novoUsuario.sobrenome.trim().length === 0){
        return false;
    }

    if(novoUsuario.email.trim().length === 0){
        return false;
    }

    if(novoUsuario.usuario.trim().length === 0){
        return false;
    }

    if(novoUsuario.senha.trim().length === 0){
        return false;
    }

    return true;
}

function validaCadastroDuplicado(novoUsuario){
    //comparar novoUsuario.email com dados da lista
    //comparar novoUsuario.usuario com dados da lista
    //caso tudo certo: return true; caso contrário: return false

    let listaUsuarios = new Array(); 
    
    if(localStorage.hasOwnProperty("lista_usuarios")){
        listaUsuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
    }   
    
    for(let i = 0; i < listaUsuarios.length; i++ ){
        if(listaUsuarios[i].email === novoUsuario.email){
            alert("Email já cadastrado");
            return false;
        }

        if(listaUsuarios[i].usuario === novoUsuario.usuario){
            alert("Usuário já cadastrado");
            return false;
        }
    }

    return true;

}

function executarCadastro(novoUsuario){

    let listaUsuarios = new Array(); 
    
    if(localStorage.hasOwnProperty("lista_usuarios")){
        listaUsuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
    }

    listaUsuarios.push(novoUsuario);

    localStorage.setItem("lista_usuarios", JSON.stringify(listaUsuarios));

}

};