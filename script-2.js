function bissexto() {
    var ano = Number(window.prompt(`Qual ano quer verificar? `));

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        document.getElementById("resultado").innerHTML = "<br> O ano de " + ano + ' <div class="mensagem-acerto"> ' + " É UM ANO BISSEXTO. &#9989" + '</div>';
    } else {
        document.getElementById("resultado").innerHTML = "<br> O ano de " + ano + ' <div class="mensagem-erro"> ' + " NÃO É UM ANO BISSEXTO. &#10060" + '</div>'
    }
}