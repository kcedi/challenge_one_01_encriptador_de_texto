function encryptText() {

    // Obtenemos el texto del elemento textarea
    let text = document.querySelector('#inputText').value;
    let salidaDeTexto = document.querySelector("#outputText");

    const encrypt = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    text = text.replace(/[eiaou]/g, match => encrypt[match]);
 
    // Escribimos el texto
    salidaDeTexto.innerHTML = text;
    salidaDeTexto.style.textAlign = "start";
    salidaDeTexto.style.fontWeight = 400;
    salidaDeTexto.style.minHeight = "200px";
    
    // Ocultamos imagen (muñeco) y el texto del span
    document.querySelector('#img-muneco').style.display = 'none';
    document.querySelector('#hideText').style.display = 'none';

    // Mostramos botón para copiar el texto encriptado
    document.querySelector("#button-copiar").style.display = "inherit";

}

function decryptText() {

    // Obtenemos el texto del elemento textarea
    let text = document.querySelector("#inputText").value;
    let salidaDeTexto = document.querySelector("#outputText");

    const decrypt = {
        "enter"   : "e",
        "imes" : "i",
        "ai"   : "a",
        "ober" : "o",
        "ufat" : "u"
    };

    text = text.replace(/enter|imes|ai|ober|ufat/g, match => decrypt[match]);
    
    // Escribimos el texto
    salidaDeTexto.innerHTML = text;
    salidaDeTexto.style.textAlign = "start";
    salidaDeTexto.style.fontWeight = 400;
    salidaDeTexto.style.minHeight = "200px";

    // Ocultamos imagen (muñeco) y el texto del span
    document.querySelector('#img-muneco').style.display = 'none';
    document.querySelector('#hideText').style.display = 'none';

    // Mostramos botón para copiar el texto desencriptado
    document.querySelector("#button-copiar").style.display = "inherit";

}

function copyText() {

    let content = document.querySelector('#outputText').innerHTML;
    navigator.clipboard.writeText(content);
    return false;
      
}