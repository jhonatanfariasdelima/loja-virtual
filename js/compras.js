$(document).ready(function() {
    fnc_local_eventosClick();
});

function fnc_local_eventosClick() {
    $("#btn_salvar1").click(function(){
        window.location.reload();
    });
}

function fnc_local_limpar_campos() {  /*  função não utilizada */
    $(".campo_preenchimento").val("");
    $("#bande1").val("");  /* não deu certo */
    $("#bande2").val("");  /* não deu certo */
    $("#bande3").val("");  /* não deu certo */
    $("#bande4").val("");  /* não deu certo */
    $("#opcao1").val("");  /* não deu certo */
    $("#opcao2").val("");  /* não deu certo */
}
