function buscarEndereco(){
    var cep = $("#cep").val().replace('.','');

    $.ajax({
        type: 'GET',
        url: `https://viacep.com.br/ws/${cep}/json/`,
        timeout: 2000,
        success: function(data){
            $("#cidadejs").val(data.localidade);
            $("#uf").val(data.uf);
            $("#bairro").val(data.bairro);
            $("#logradouro").val(data.logradouro);
        },
        error: function(){
            alert('Ops! Ocorreu um erro... Não foi possível encontrar o CEP!')
        }
    })
}