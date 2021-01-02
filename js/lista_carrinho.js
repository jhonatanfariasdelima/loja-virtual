var banco_carrinho = window.localStorage;

$(document).ready(function() {
    fn_local_mostrar_carrinho();
});

function fn_local_mostrar_carrinho() {
    var array_aux = JSON.parse(banco_carrinho.getItem("produtos_listados"));

    $("#tb_mostrar_carrinho").html("");

    for(var i = 0; i < array_aux.length; i ++) {
        var tab_produtos = "";
        tab_produtos += "<tr>";
        tab_produtos += "<td>" + (i+1) + " - " + array_aux[i][0] + "</td>";
        tab_produtos += "<td>" + "R$" + array_aux[i][1] + "</td>";
        tab_produtos += "</tr>";

        $("#tb_mostrar_carrinho").append(tab_produtos);
    }
}