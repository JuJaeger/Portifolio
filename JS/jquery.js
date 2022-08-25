function tornarDark(){
    $("body").css({'color': '#FFFFFF', 'background-color': '#333333'});
}

function tornarLight(){
    $("body").css({'color': '#000000', 'background-color': '#FFFFFF'});
}

function botaoDoido(){
    var inputTexto = $('#texto_digitado');
    
    $('#div_destino').css({'color': 'yellow'}).append(inputTexto.val());
}

// Aula Dia 18/07/2022 - Quinta Feira //

function revelarDataAtributos(){
    var autor = $("#paragrafo_data").data("autor");
    var ano = $("#paragrafo_data").data("ano");
    var estadoCivil = $("#paragrafo_data").data("estado-civil");

    alert(`Autor: ${autor} Ano: ${ano} Estado Civil: ${estadoCivil}`);

}

function percorrerCaixasSelecao(){
    var caixasSelecao = $(".cb-aluno");

    $.each(caixasSelecao, function(indice, valor){
        var cb = $(valor);
        console.log(cb.data('telefone'));
    });
}

$("#btn-processar").on('click', percorrerCaixasSelecao);