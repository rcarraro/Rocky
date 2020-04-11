//jogo
var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");

//vida
var canvas2 = document.getElementById("vida");
var ctx2 = canvas2.getContext('2d');

document.addEventListener("keydown", function (movimento) {
    if (!(teclas.includes(parseInt(movimento.keyCode)))){
        teclas.push(parseInt(movimento.keyCode))
    }
});

document.addEventListener("keyup",function (movimento) {
    let indice = teclas.indexOf(parseInt(movimento.keyCode));
    teclas.splice(indice, 1);
});

// variaveis da função rua
var x_reta = 20;
var x_final = 1000;

function rua() {
    //limpa tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //rua
    ctx.fillStyle = "black";
    ctx.fillRect(0, 60, canvas.width,480) ;


    //calçadas
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, 80);

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 520, canvas.width, 80);

    //faixa amarela
    while (x_reta < x_final) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(x_reta, 280, 80, 40);
        x_reta = x_reta + 100;
    }
    x_reta = 20
}

//variaveis texto
var x_texto = 10;
var y_texto = 70;

function texto() {
    ctx.font = "55px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Treino do Rocky Balboa", x_texto, y_texto);
    x_texto = x_texto - 1;
    y_texto = y_texto - 1;

}

//variaveis da função rocky
var x_rocky = 20;
var y_rocky = 265;
var x_tamanho_rocky = 60;
var y_tamanho_rocky = 60;
var x_tamanho_mao = 40;
var y_tamanho_mao = 30;
var x_mao_direita = x_rocky + x_tamanho_rocky*3/4;
var y_mao_direita = y_rocky + y_tamanho_rocky;
var x_mao_esquerda = x_rocky + x_tamanho_rocky*3/4;
var y_mao_esquerda = y_rocky - y_tamanho_mao;

function rocky() {
    //corpo
    ctx.fillStyle = "NavajoWhite";
    ctx.fillRect(x_rocky, y_rocky, x_tamanho_rocky,y_tamanho_rocky);

    //mão direita
    ctx.fillStyle = "red";
    ctx.fillRect(x_mao_direita, y_mao_direita, x_tamanho_mao, y_tamanho_mao);

    //mão esquerda
    ctx.fillStyle = "red";
    ctx.fillRect(x_mao_esquerda, y_mao_esquerda, x_tamanho_mao, y_tamanho_mao);
}

//variaveis da função movimento do rocky
var teclas = [];
var veloc_rocky = 10;
function movimento_rocky() {
        if (teclas.includes(38)){ //seta para cima - movimento para cima
            y_rocky = y_rocky - veloc_rocky;
            y_mao_direita = y_mao_direita - veloc_rocky;
            y_mao_esquerda = y_mao_esquerda - veloc_rocky;
        }

        if (teclas.includes(40)){ //seta para baixo - movimento para baixo
            y_rocky = y_rocky + veloc_rocky;
            y_mao_direita = y_mao_direita + veloc_rocky;
            y_mao_esquerda = y_mao_esquerda + veloc_rocky;
        }

        if (teclas.includes(39)){ //seta para direita - jab de direita
            if (x_mao_direita < 95) {
                setTimeout(vaimaodireita, 0);
                setTimeout(voltamaodireita, 500);
            }
            function vaimaodireita() {
                x_mao_direita = x_mao_direita + 30;
            }
            function voltamaodireita() {
                x_mao_direita = x_mao_direita - 30;
            }
        }

        if (teclas.includes(37)){ //seta para esquerda - jab de esquerda
            if (x_mao_esquerda < 95) {
                setTimeout(vaimaoesquerda, 0);
                setTimeout(voltamaoesquerda, 500);
            }
            function vaimaoesquerda() {
                x_mao_esquerda = x_mao_esquerda + 30;
            }
            function voltamaoesquerda() {
                x_mao_esquerda = x_mao_esquerda - 30;
            }
        }

        //colisao com as paredes
    if (y_mao_esquerda < 0){
        y_rocky = y_tamanho_mao;
        y_mao_esquerda = 0;
        y_mao_direita = y_tamanho_rocky + y_tamanho_mao;
    }

    if (y_mao_direita + y_tamanho_mao > canvas.height){
        y_rocky = canvas.height - y_tamanho_mao - y_tamanho_rocky;
        y_mao_esquerda =  y_rocky - y_tamanho_mao;
        y_mao_direita = canvas.height - y_tamanho_mao;
    }
}
//variaveis gerais dos inimigos
var x_tamanho_inimigo = 50;
var y_tamanho_inimigo = 50;
var veloc_inimigo = 2;
var distancia_inimigo = 400;
var distancia_rua = 390;
var contador = 0;
var vencer = 0;

//variaveis de inimigo 1
var x_inimigo1 = Math.floor(Math.random() * (distancia_inimigo) + 800);
var y_inimigo1 = Math.floor(Math.random() * (distancia_rua) + 80);
var colisao_horizontal_rocky1 = 0;
var colisao_vertical_rocky1 = 0;
var colisao_horizontal_mao_esquerda1 = 0;
var colisao_vertical_mao_esquerda1 = 0;
var colisao_horizontal_mao_direita1 = 0;
var colisao_vertical_mao_direita1 = 0;

//variaveis de inimigo 2
var x_inimigo2 = Math.floor(Math.random() * (distancia_inimigo) + 800);
var y_inimigo2 = Math.floor(Math.random() * (distancia_rua) + 80);
var colisao_horizontal_rocky2 = 0;
var colisao_vertical_rocky2 = 0;
var colisao_horizontal_mao_esquerda2 = 0;
var colisao_vertical_mao_esquerda2 = 0;
var colisao_horizontal_mao_direita2 = 0;
var colisao_vertical_mao_direita2 = 0;
//variaveis de inimigo 3
var x_inimigo3 = Math.floor(Math.random() * (distancia_inimigo) + 800);
var y_inimigo3 = Math.floor(Math.random() * (distancia_rua) + 80);
var colisao_horizontal_rocky3 = 0;
var colisao_vertical_rocky3 = 0;
var colisao_horizontal_mao_esquerda3 = 0;
var colisao_vertical_mao_esquerda3 = 0;
var colisao_horizontal_mao_direita3 = 0;
var colisao_vertical_mao_direita3 = 0;

//variaveis de inimigo 4
var x_inimigo4 = Math.floor(Math.random() * (distancia_inimigo) + 800);
var y_inimigo4 = Math.floor(Math.random() * (distancia_rua) + 80);
var colisao_horizontal_rocky4 = 0;
var colisao_vertical_rocky4 = 0;
var colisao_horizontal_mao_esquerda4 = 0;
var colisao_vertical_mao_esquerda4 = 0;
var colisao_horizontal_mao_direita4 = 0;
var colisao_vertical_mao_direita4 = 0;

function inimigo() {
    if (contador === 10){
        veloc_inimigo = veloc_inimigo + 0.25;
        contador = 0;
        vencer = vencer + 1;
    }
    //INIMIGO 1
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(x_inimigo1, y_inimigo1, x_tamanho_inimigo, y_tamanho_inimigo);
    x_inimigo1 = x_inimigo1 - 1*veloc_inimigo;

    //INIMIGO 2
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(x_inimigo2, y_inimigo2, x_tamanho_inimigo, y_tamanho_inimigo);
    x_inimigo2 = x_inimigo2 - 1*veloc_inimigo;

    //INIMIGO 3
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(x_inimigo3, y_inimigo3, x_tamanho_inimigo, y_tamanho_inimigo);
    x_inimigo3 = x_inimigo3 - 1*veloc_inimigo;

    //INIMIGO 4
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(x_inimigo4, y_inimigo4, x_tamanho_inimigo, y_tamanho_inimigo);
    x_inimigo4 = x_inimigo4 - 1*veloc_inimigo;
}
function colisao(){

    //COLISAO INIMIGO 1
    //colisão com o rocky
    colisao_horizontal_rocky1 = (x_rocky + x_tamanho_rocky >= x_inimigo1) && (x_inimigo1 + x_tamanho_inimigo >= x_rocky);
    colisao_vertical_rocky1 = (y_rocky + y_tamanho_rocky >= y_inimigo1) && (y_inimigo1 + y_tamanho_inimigo >= y_rocky);

    if (colisao_horizontal_rocky1  && colisao_vertical_rocky1){ //recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo1 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo1 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisap com mao esquerda
    colisao_horizontal_mao_esquerda1 = (x_mao_esquerda + x_tamanho_mao >= x_inimigo1) && (x_inimigo1 +  x_tamanho_inimigo >= x_mao_esquerda);
    colisao_vertical_mao_esquerda1 = (y_mao_esquerda + y_tamanho_mao >= y_inimigo1) && (y_inimigo1 + y_tamanho_inimigo >= y_mao_esquerda);

    if (colisao_horizontal_mao_esquerda1 && colisao_vertical_mao_esquerda1 && x_inimigo1 >= 95 && x_mao_esquerda === 95  ){
        x_inimigo1 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo1 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_esquerda1 && colisao_vertical_mao_esquerda1){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo1 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo1 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com mao direita
    colisao_horizontal_mao_direita1 = (x_mao_direita + x_tamanho_mao >= x_inimigo1) && (x_inimigo1 +  x_tamanho_inimigo >= x_mao_direita);
    colisao_vertical_mao_direita1 = (y_mao_direita + y_tamanho_mao >= y_inimigo1) && (y_inimigo1 + y_tamanho_inimigo >= y_mao_direita);

    if (colisao_horizontal_mao_direita1 && colisao_vertical_mao_direita1 && x_inimigo1 >= 95 && x_mao_direita === 95  ){
        x_inimigo1 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo1 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_direita1 && colisao_vertical_mao_direita1){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo1 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo1 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com parede
    if (x_inimigo1 <= 0){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo1 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo1 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //COLISAO INIMIGO 2
    //colisão com o rocky
    colisao_horizontal_rocky2 = (x_rocky + x_tamanho_rocky >= x_inimigo2) && (x_inimigo2 + x_tamanho_inimigo >= x_rocky);
    colisao_vertical_rocky2 = (y_rocky + y_tamanho_rocky >= y_inimigo2) && (y_inimigo2 + y_tamanho_inimigo >= y_rocky);

    if (colisao_horizontal_rocky2  && colisao_vertical_rocky2){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo2 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo2 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisap com mao esquerda
    colisao_horizontal_mao_esquerda2= (x_mao_esquerda + x_tamanho_mao >= x_inimigo2) && (x_inimigo2 +  x_tamanho_inimigo >= x_mao_esquerda);
    colisao_vertical_mao_esquerda2 = (y_mao_esquerda + y_tamanho_mao >= y_inimigo2) && (y_inimigo2 + y_tamanho_inimigo >= y_mao_esquerda);

    if (colisao_horizontal_mao_esquerda2 && colisao_vertical_mao_esquerda2 && x_inimigo2 >= 95 && x_mao_esquerda === 95  ){
        x_inimigo2 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo2 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_esquerda2 && colisao_vertical_mao_esquerda2){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo2 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo2 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com mao direita
    colisao_horizontal_mao_direita2 = (x_mao_direita + x_tamanho_mao >= x_inimigo2) && (x_inimigo2 +  x_tamanho_inimigo >= x_mao_direita);
    colisao_vertical_mao_direita2 = (y_mao_direita + y_tamanho_mao >= y_inimigo2) && (y_inimigo2 + y_tamanho_inimigo >= y_mao_direita);

    if (colisao_horizontal_mao_direita2 && colisao_vertical_mao_direita2 && x_inimigo2 >= 95 && x_mao_direita === 95  ){
        x_inimigo2 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo2 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_direita2 && colisao_vertical_mao_direita2){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo2 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo2 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com parede
    if (x_inimigo2 <= 0){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo2 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo2 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //COLISAO INIMIGO 3
    //colisão com o rocky
    colisao_horizontal_rocky3 = (x_rocky + x_tamanho_rocky >= x_inimigo3) && (x_inimigo3 + x_tamanho_inimigo >= x_rocky);
    colisao_vertical_rocky3 = (y_rocky + y_tamanho_rocky >= y_inimigo3) && (y_inimigo3 + y_tamanho_inimigo >= y_rocky);

    if (colisao_horizontal_rocky3  && colisao_vertical_rocky3){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo3 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo3 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisap com mao esquerda
    colisao_horizontal_mao_esquerda3 = (x_mao_esquerda + x_tamanho_mao >= x_inimigo3) && (x_inimigo3 +  x_tamanho_inimigo >= x_mao_esquerda);
    colisao_vertical_mao_esquerda3 = (y_mao_esquerda + y_tamanho_mao >= y_inimigo3) && (y_inimigo3 + y_tamanho_inimigo >= y_mao_esquerda);

    if (colisao_horizontal_mao_esquerda3 && colisao_vertical_mao_esquerda3 && x_inimigo3 >= 95 && x_mao_esquerda === 95  ){
        x_inimigo3 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo3 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_esquerda3 && colisao_vertical_mao_esquerda3){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo3 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo3 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com mao direita
    colisao_horizontal_mao_direita3 = (x_mao_direita + x_tamanho_mao >= x_inimigo3) && (x_inimigo3 +  x_tamanho_inimigo >= x_mao_direita);
    colisao_vertical_mao_direita3 = (y_mao_direita + y_tamanho_mao >= y_inimigo3) && (y_inimigo3 + y_tamanho_inimigo >= y_mao_direita);

    if (colisao_horizontal_mao_direita3 && colisao_vertical_mao_direita3 && x_inimigo3 >= 95 && x_mao_direita === 95  ){
        x_inimigo3 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo3 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_direita3 && colisao_vertical_mao_direita3){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo3 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo3 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com parede
    if (x_inimigo3 <= 0){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo3 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo3 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //COLISAO INIMIGO 4
    //colisão com o rocky
    colisao_horizontal_rocky4 = (x_rocky + x_tamanho_rocky >= x_inimigo4) && (x_inimigo4 + x_tamanho_inimigo >= x_rocky);
    colisao_vertical_rocky4 = (y_rocky + y_tamanho_rocky >= y_inimigo4) && (y_inimigo4 + y_tamanho_inimigo >= y_rocky);

    if (colisao_horizontal_rocky4  && colisao_vertical_rocky4){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo4 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo4 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisap com mao esquerda
    colisao_horizontal_mao_esquerda4 = (x_mao_esquerda + x_tamanho_mao >= x_inimigo4) && (x_inimigo4 +  x_tamanho_inimigo >= x_mao_esquerda);
    colisao_vertical_mao_esquerda4 = (y_mao_esquerda + y_tamanho_mao >= y_inimigo4) && (y_inimigo4 + y_tamanho_inimigo >= y_mao_esquerda);

    if (colisao_horizontal_mao_esquerda4 && colisao_vertical_mao_esquerda4 && x_inimigo4 >= 95 && x_mao_esquerda === 95  ){
        x_inimigo4 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo4 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_esquerda4 && colisao_vertical_mao_esquerda4){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo4 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo4 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com mao direita
    colisao_horizontal_mao_direita4 = (x_mao_direita + x_tamanho_mao >= x_inimigo4) && (x_inimigo4 +  x_tamanho_inimigo >= x_mao_direita);
    colisao_vertical_mao_direita4 = (y_mao_direita + y_tamanho_mao >= y_inimigo4) && (y_inimigo4 + y_tamanho_inimigo >= y_mao_direita);

    if (colisao_horizontal_mao_direita4 && colisao_vertical_mao_direita4 && x_inimigo4 >= 95 && x_mao_direita === 95  ){
        x_inimigo4 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo4 = Math.floor(Math.random() * (distancia_rua) + 80);
        contador = contador + 1;
    }
    else if (colisao_horizontal_mao_direita4 && colisao_vertical_mao_direita4){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo4 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo4 = Math.floor(Math.random() * (distancia_rua) + 80);
    }

    //colisao com parede
    if (x_inimigo4 <= 0){//recebe dano
        console.log(xvida = xvida - 50);
        x_inimigo4 = Math.floor(Math.random() * (distancia_inimigo) + 800);
        y_inimigo4 = Math.floor(Math.random() * (distancia_rua) + 80);
    }
}

//variaveis da vida
var xvida = 200;
var game_over = 0;
function vida() {
    ctx2.clearRect(0,0,canvas.width,canvas.height);
    ctx2.fillStyle = "red";
    ctx2.fillRect(0,0,xvida ,50);

    if (xvida === 0){
        game_over = 1;
    }
}

function lose() {
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    ctx.font = "150px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Game Over",0,330);
}

function win() {
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    ctx.font = "150px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("You Win",0,330);
}

function atualizar() {
    rua();
    rocky();
    texto();
    movimento_rocky();
    inimigo();
    colisao();
    vida();
    if (game_over === 0){
        requestAnimationFrame(atualizar);
    }
    if (game_over === 1){
        lose()
    }
    if (vencer === 10){
        win()
    }
}

function start() {
    atualizar()
}

rua();
texto();
rocky();
