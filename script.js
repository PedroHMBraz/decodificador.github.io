const textArea = document.querySelector(".conteudo1__entrada");
const mensagem = document.querySelector(".saida");

// Criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";

    var textoSaida = document.getElementById("textosaida");
    var valorMensagem1 = document.getElementById("mensagem1");
    var valorMensagem2 = document.getElementById("mensagem2");
    
    textoSaida.style = "background-image: none";
    valorMensagem1.style = "color: #FFFFFF";
    valorMensagem2.style = "color: #FFFFFF";

}


function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";

    var textoSaida = document.getElementById("textosaida");
    var valorMensagem1 = document.getElementById("mensagem1");
    var valorMensagem2 = document.getElementById("mensagem2");
    
    textoSaida.style = "background-image: none";
    valorMensagem1.style = "color: #FFFFFF";
    valorMensagem2.style = "color: #FFFFFF";

}

function botaoCopiar() {
    var textoCopiado = mensagem;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    mensagem.value = "";

    var textoSaida = document.getElementById("textosaida");
    var valorMensagem1 = document.getElementById("mensagem1");
    var valorMensagem2 = document.getElementById("mensagem2");

    textoSaida.style = "background-image: url(/assets/home.png); background-repeat: no-repeat;";
    valorMensagem1.style = "color: #343A40";
    valorMensagem2.style = "color: #343A40";

    location.reload();


    return alert("Texto copiado.");

}

function criptografar(stringCriptografada) {

    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function descriptografar(stringDescriptografada) {

    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}



