function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

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
    
    // Ocultamos el texto del span
    document.querySelector('#hideText').style.display = 'none';

}