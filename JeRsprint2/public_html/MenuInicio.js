function inicio() {
    //VARIABLE GLOBALES
    var paintTxt = true;
    var go2Selec = false;

    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");

    //CARGAR sprites
    var bckSPR = new Image();
    bckSPR.src = "MenuPrincipal.jpg";
    
    //CARGAR musica

    var inicioAudio = new Audio();
    inicioAudio.src = "Music/musicStart.mp3";
    inicioAudio.currentTime = 0;
    inicioAudio.loop = true;
    inicioAudio.play();
    

    //Funcion PANTALLA COMPLETA
    function pantallaCompleta(e) {
        document.documentElement.requestFullscreen();
    }
    ;

    //Funcion PARPADEO TEXTO
    function blink() {
        paintTxt = !paintTxt;
    }
    //CONTROLES
    function spaceDown(e) {
        if (e.key === " ") {
            go2Selec = true;
        }
    }
    function menuInicio() {
        //FUNCION DIBUJAR
        this.dibujar = function () {
            //Dibujar fondo
            contexto.drawImage(bckSPR, 0, 0, canvas.width, canvas.height);

            if (paintTxt) {
                //DIBUJAR texto
                contexto.fillStyle = "white";
                contexto.strokeStyle = "purple";
                contexto.lineWidth = 2;
                contexto.font = "60px Arial";
                contexto.textAlign = "center";
                contexto.fillText("Pulsa espacio para empezar", canvas.width / 2, canvas.height - 175);
                contexto.strokeText("Pulsa espacio para empezar", canvas.width / 2, canvas.height - 175);
            }
        };
        this.update = function () {
            menuI.dibujar();
            if (go2Selec) {
                window.clearInterval(blinkInterval);
                window.removeEventListener("click", pantallaCompleta, false);
                window.removeEventListener("keydown", pantallaCompleta, false);
                window.removeEventListener("keydown", spaceDown, false);
                inicioAudio.pause();
                seleccion();
            } else {
                requestAnimationFrame(menuI.update);
            }

        };
    }
    //CREAR EVENTOS
    var blinkInterval = window.setInterval(blink, 500);
    window.addEventListener("click", pantallaCompleta, false);
    window.addEventListener("keydown", pantallaCompleta, false);
    window.addEventListener("keydown", spaceDown, false);

    //CREAR EL OBJETO MENUINICIO Y LLAMAR A UPDATE
    var menuI = new menuInicio();
    menuI.update();
}


