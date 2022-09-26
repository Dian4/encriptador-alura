var btnCifrar = document.querySelector("#btnCifrar");
var btnDescifrar = document.querySelector("#btnDescifrar");
var btnCopiar = document.querySelector("#btnCopiar");

function cifrarLetra(letra) {
    if (letra === "e") {
        return "enter";
    } else if (letra === "i") {
        return "imes";
    } else if (letra === "a") {
        return "ai";
    } else if (letra === "o") {
        return "ober";
    } else if (letra === "u") {
        return "ufat";
    } else {
        return letra;
    }
}

function cifrar() {
    let texto = document.querySelector("textarea").value.toLowerCase();
    let cardBody = document.querySelector(".card-body");
    
    if (texto === "") {
        cardBody.innerHTML = '<h5 class="card-title">Ningún mensaje fue encontrado</h5><p class="card-text">Ingresa el texto que deseas encriptar o desencriptar.</p>';
    } else {
        let arrayCifrado = [];

        for (let i = 0; i < texto.length; i++) {
            let letra = texto.charAt(i);
            arrayCifrado.push(cifrarLetra(letra));
        }

        let textoCifrado = arrayCifrado.join("");

        cardBody.innerHTML = '<h5 class="card-title">' + textoCifrado + '</h5>';
    }
}

function descifrar() {
    alert("Descifrar");
}

function copiar() {
    alert("Copiar");
}

btnCifrar.onclick = cifrar;
btnDescifrar.onclick = descifrar;
btnCopiar.onclick = copiar;