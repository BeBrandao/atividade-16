var andar = [
    "urso-1.png",
    "urso-2.png",
    "urso-3.png"
];

var contador = 0;

function caminhada(){
    var img = document.querySelector("#imagem");
    img.src = andar[contador % 3];
    contador = contador + 1;
}

setInterval(caminhada, 1000);