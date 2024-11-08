var andar = [
    "urso-1.png",
    "urso-2.png",
    "urso-3.png",
    "urso-4.png",
    "urso-5.png",
    "urso-6.png"
];

var contador = 0;
var valor = 0;
var direcao = 1;
function caminhada(){
    var img = document.querySelector("#imagem");

    var indiceImagem = direcao === 1 ? contador % 3 : (contador % 3) + 3;

    img.src = andar[indiceImagem];
    img.style.left = valor + "px";
    valor = valor + 15 * direcao;
    contador = contador + 1 * direcao;

    if (contador === 100 || contador === 0) {
        direcao *= -1;
    }
}

setInterval(caminhada, 250);
