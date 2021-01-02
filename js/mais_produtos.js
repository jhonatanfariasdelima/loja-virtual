var banco_produtos = [['produto04.jpg','PC GAMER FROST INTEL I5 9400F/ 8GB/ GTX1650/ SSD 240GB','1900,00', false], ['produto05.jpg','PC GAMER BETA RYZEN 5 3400g 3,4GHZ/ 8GB/ 1050/ SSD240GB', '2000,00', false], ['produto06.jpg', 'FONTE ATX CORSAIR VS550 550W 80P WHITE', '500,00', false], ['produto07.jpg', 'PLACA DE VIDEO PCI-E 2GB AFOX R5 220 64B DDR3 AFR5220-2048D3', '650,00', false], ['produto08.jpg', 'PLACA MAE GIGABYTE A520M H DDR4 DVI/ HDMI AM4', '700,00', false], ['produto09.jpg', 'HD SSD M.2 500GB WESTERN DIG BLACK NVME WDS500G3XH', '500,00', false], ['produto10.jpg', 'MOUSE USB HAYOM GAMER MU2909 PTO', '220,00', false], ['produto11.jpg', 'FONE DE OUVIDO C/ MIC HP H100 GAMER PRETO', '300,00', false], ['produto12.jpg', 'TECLADO USB HAYOM TC3205 PRETO', '310,00', false], ['produto13.jpg', 'HD SSD SATA III 180GB CORSAIR FORCE GS CSSD-F180GB', '250,00', false]];

var array_aux= [];
var array_aux2= [];
var banco_carrinho = window.localStorage;

$(document).ready(function(){
    fnc_local_listar_produtos();
    fnc_local_mostrar_pagina_carrinho();
});

function fnc_local_listar_produtos(){
    $(".div_mais_produtos").html("");
    
    for(var i=0; i< banco_produtos.length; i++){
        var conteudo = '';

        conteudo += '<div class="div_card">';
        conteudo += '<div class="div_imagem">';
        conteudo += '<img src="../imagens/' + banco_produtos[i][0] + '">';
        conteudo += '</div>';
        conteudo += '<div class="div_descricao">';
        conteudo += '<b>Descrição: </b>' + banco_produtos[i][1] + '<br>';
        conteudo += '</div>';
        conteudo += '<div class="div_preco">';
        conteudo += '<b>Preço: </b>' + banco_produtos[i][2] + '<br>';
        conteudo += '</div>';
        conteudo += '<div class="div_rodape">';
        conteudo += '<tr>';
        if(banco_produtos[i][3] == false){
            conteudo += '<td>';
            conteudo += '<button class="btn_comprar" id_ordem_produto="' + i + '"><img src="../imagens/carrinho2.jpg"/></button>';
            conteudo += '</td>';
            conteudo += '<td class="td_comprar"><b> Comprar</b></td>';
        } else {
            conteudo += '<td>';
            conteudo += '<button class="btn_comprado" id_ordem_produto="' + i + '"><img src="../imagens/carrinho3.jpg"/></button>';
            conteudo += '</td>';
            conteudo += '<td class="td_comprado"><b> Comprado</b></td>';
        }
        conteudo += '</tr>';
        conteudo += '</div>';
        conteudo += '</div>';

        $(".div_mais_produtos").append(conteudo);
    }

    $(".btn_comprar").click(function(){
        var id = $(this).attr("id_ordem_produto");
        banco_produtos[id].splice(3, 1, true);
        array_aux = [...banco_produtos[id]];  /* copia de array */
        array_aux.splice(0, 1);
        array_aux.splice(2, 1);
        /*console.log(array_aux[1]);*/
        array_aux2.push(array_aux);
        banco_carrinho.setItem("produtos_listados", JSON.stringify(array_aux2));

        fnc_local_listar_produtos();
    });
}

function fnc_local_mostrar_pagina_carrinho() {
    $("#btn_mostrar_carrinho").click(function(){

        window.location.href = "../paginas/carrinho.html";

    });
}