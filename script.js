var btnCifrar = document.querySelector("#btnCifrar");
var btnDescifrar = document.querySelector("#btnDescifrar");
var btnCopiar = document.querySelector("#btnCopiar");
var podemosCopiar = false;

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
        podemosCopiar = false;
        cardBody.innerHTML = '<h5 class="card-title">Ningún mensaje fue encontrado</h5><p class="card-text">Ingresa el texto que deseas encriptar o desencriptar.</p><img src="pusheen-scared.png" class="img-fluid">';
    } else {
        let arrayCifrado = [];
        podemosCopiar = true;

        for (let i = 0; i < texto.length; i++) {
            let letra = texto.charAt(i);
            arrayCifrado.push(cifrarLetra(letra));
        }

        let textoCifrado = arrayCifrado.join("");

        cardBody.innerHTML = '<h5 class="card-title">' + textoCifrado + '</h5>'
            + '<img src="pusheen-holmes.png" class="img-fluid">';
    }
}

function descifrar() {
    let texto = document.querySelector("textarea").value.toLowerCase();
    let cardBody = document.querySelector(".card-body");

    if (texto === "") {
        podemosCopiar = false;
        cardBody.innerHTML = '<h5 class="card-title">Ningún mensaje fue encontrado</h5><p class="card-text">Ingresa el texto que deseas encriptar o desencriptar.</p><img src="pusheen-scared.png" class="img-fluid">';
    } else {
        podemosCopiar = true;
        let textoDescifrado = texto.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        cardBody.innerHTML = '<h5 class="card-title">' + textoDescifrado + '</h5>' + '<img src="pusheen-laptop.png" class="img-fluid">';
    }
}

function copiar() {
    if (podemosCopiar) {
        let texto = document.querySelector(".card-title").innerText;

        navigator.clipboard.writeText(texto);

        alert("Se ha copiado con éxito al portapapeles.");
    } else {
        alert("No hay ningún mensaje por copiar.");
    }
}

btnCifrar.onclick = cifrar;
btnDescifrar.onclick = descifrar;
btnCopiar.onclick = copiar;