$(document).ready(function() {

    fn_local_eventos_click();

});

function fn_local_eventos_click() {
    $("#bt_verMais").click(function() {

        window.location.href =  "paginas/mais_produtos.html";
    });   
}

function login(){
    let usuario = document.getElementById("tUsuario").value;
    let senha = document.getElementById("tSenha").value;

    let user = verificarLogin(usuario, senha);
    if(user){
        setUsuarioLogado(user); //usuário encontrado
        alert("Bem vindo " + user.nome);
        window.location.replace("../index.html"); //redireciona o usuário à página inicial, após logar
        return false;

    } else{
        alert("Login ou senha incorretos")//usuário não encontrado
    }

}

function verificarLogin(usuario, senha){
    let usuarios = getListaUsuarios();
    for(let i in usuarios){ //mesma ideia de for(int i, i < size, i++)
        let userTemp = usuarios[i];
        if(userTemp.usuario === usuario && userTemp.senha === senha){
            return userTemp;
        }
    }

    return null; // caso não encontre nada, não retornará nada
}

function getListaUsuarios(){
    let listaUsuarios = new Array(); 
    
    if(localStorage.hasOwnProperty("lista_usuarios")){
        listaUsuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
    }

    return listaUsuarios;
}

function setUsuarioLogado(user){
    localStorage.setItem("usuario_logado", JSON.stringify(user));
}