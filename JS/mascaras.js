$(document).ready(function (){
    /* Quando A Página Está Pronta (Toda Carregada)
       Chama A Função Que Aplica As Máscaras
    */
    aplicarMascaras();

});

function aplicarMascaras(){
    $(".mask_tel_fixo").mask("99-9999-9999");
    $(".mask_tel_celular").mask("99-9999-9999");
    $(".mask_placa").mask("AAA-9*99");
    $(".mask_cep").mask("99.999-999");
    $(".mask_cpf").mask("999.999.999-99");
    $(".mask_cnpj").mask("99.999.999/9999-99");
    $(".mask_data").mask("99/99/9999");
    $(".mask_data_hora").mask("99/99/9999 99:99");

}