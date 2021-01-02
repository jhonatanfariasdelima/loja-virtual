var array_coment = [];
let usuariologado;

$(document).ready(function() {

    fnc_local_eventos_click();
    verificaUsuarioLogado();
    enviar_coment();
    initMap();

});

function verificaUsuarioLogado(){
    usuariologado = getUsuarioLogado();
    if(usuariologado){
        document.getElementById("btn_usuario").innerHTML = `<button id="bt_login" onclick="logout()"> logout </button>`;

    } else{
        document.getElementById("btn_usuario").innerHTML = `<button id="bt_login" onclick="window.location.href='paginas/login.html'"> Login </button>`;
    }
}

function logout(){
    localStorage.removeItem("usuario_logado");
    localStorage.clear();
    location.reload();
    return false;
}


function getUsuarioLogado(){
    usuariologado; 
    
    if(localStorage.hasOwnProperty("usuario_logado")){
        usuariologado = JSON.parse(localStorage.getItem("usuario_logado"));
    }

    return usuariologado;
}

function fnc_local_eventos_click() {
    $("#bt_ver_mais").click(function() {
        usuariologado = getUsuarioLogado();
        if(usuariologado){
            window.location.href =  "paginas/mais_produtos.html";
        } else {
            alert("Usuario não está logado!");
        }
    });

    $("#bt_menus3").click(function() {
      usuariologado = getUsuarioLogado();
      if(usuariologado){
          window.location.href =  "paginas/compras.html";
      } else {
          alert("Usuario não está logado!");
      }
    });

    $("#bt_menus1").click(function() {
      window.location.href =  "paginas/empresa.html";
    });

    $("#bt_menus2").click(function() {
      window.location.href =  "paginas/blog.html";
    });

    $("#bt_menus4").click(function() {
      window.location.href =  "paginas/contato.html";
    });

    $("#bt_menus10").click(function() {
      window.location.href =  "../paginas/empresa.html";
    });

    $("#bt_menus20").click(function() {
      window.location.href =  "../paginas/blog.html";
    }); 

    $("#bt_menus30").click(function() {
      usuariologado = getUsuarioLogado();
      if(usuariologado){
          window.location.href =  "../paginas/compras.html";
      } else {
          alert("Usuario não está logado!");
      }
    });

    $("#bt_menus40").click(function() {
      window.location.href =  "../paginas/contato.html";
    });      
}


function enviar_coment() {

    $("#enviar_coment").click(function() {

        var comentarios = $("#comentarios").val();
        var nome_usuario = $("#nome_usuario").val();
        document.getElementById('nome_usuario').value = '';
        document.getElementById('comentarios').value = '';
         if (comentarios != "" && nome_usuario != "") {

            array_coment.unshift([comentarios, nome_usuario]);
            mostra_comentario();

         }else{
            alert("nome de usuario ou campo de mensagme vaizio.");
        }

    });   


}

function mostra_comentario(){
    $("#tabela_de_comentarios").html("");

    var conteudo = "";

    for (var i = 0; i < 3 ; i++) {

        conteudo = "";
        
        conteudo += "<tr>";
        conteudo += '<td id="nome"> Usuario: ' + array_coment[i][1] + "</td>";
        conteudo += "</tr>";
        conteudo += "<tr>";
        conteudo += '<td id="comentario_msg"> Mensagem: ' + array_coment[i][0] + "</td>";
        conteudo += "</tr>";
        conteudo += "<tr>";
        conteudo += '<td id="divisao_coment"></td>"';
        conteudo += "</tr>";
        
        $("#tabela_de_comentarios").append(conteudo);
    }
}

var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.45212754, lng: -49.25276682},
    zoom: 12
  }
      
  mapa = new google.maps.Map(document.getElementById('mapa'), configuracoes);

  var marcador1 = new google.maps.Marker({
    position: {lat: -25.477870, lng: -49.292021},
    title: "Viking info  -  Loja Matriz -  3° andar, loja 100",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.423471, lng: -49.270150},
    title: "Viking info  - Filial - 2° andar, loja 120",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.521993, lng: -49.192997},
    title: "Viking info  - estoque principal",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.443135, lng: -49.290131},
    title: "Viking info  - Filial - 1° andar, loja 20",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.441418, lng: -49.277364},
    title: "Viking info  - Filial",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.498308, lng: -49.239188},
    title: "Viking info  - estoque principal",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.462201, lng: -49.233786},
    title: "Viking info  - estoque principal",
    map: mapa
  });

}