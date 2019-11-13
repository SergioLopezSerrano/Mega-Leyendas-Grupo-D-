function roster(menuAudio) {

    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");

    //VARIABLES GOBALES:
    var nCharac = 4;
    var nPlayers = 2;
    var distanciaX;
    var distanciaY;
    var distanciaX2;
    var distanciaY2;

    //CARGAR LOS SPRITES:
    //HEXA
    var characSPR = [];
    characSPR[0] = new Image();
    characSPR[0].src = "Personaje1/FikhuHex.png";
    characSPR[1] = new Image();
    characSPR[1].src = "Personaje2/NivaHex.png";
    characSPR[2] = new Image();
    characSPR[2].src = "Personaje3/MizumiHex.png";
    characSPR[3] = new Image();
    characSPR[3].src = "Personaje4/KorimHex.png";

    //SPLASH
    var characFullSPR = [];
    characFullSPR[0] = new Image();
    characFullSPR[0].src = "Personaje1/FikhuSelect.png";
    characFullSPR[1] = new Image();
    characFullSPR[1].src = "Personaje2/NivaSelect.png";
    characFullSPR[2] = new Image();
    characFullSPR[2].src = "Personaje3/MizumiSelect.png";
    characFullSPR[3] = new Image();
    characFullSPR[3].src = "Personaje4/KorimSelect.png";

    //SPLASH TRANSPARENTE (PRESELECCION)
    var characTranspSPR = [];
    characTranspSPR[0] = new Image();
    characTranspSPR[0].src = "Personaje1/FikhuOpacidad.png";
    characTranspSPR[1] = new Image();
    characTranspSPR[1].src = "Personaje2/NivaOpacidad.png";
    characTranspSPR[2] = new Image();
    characTranspSPR[2].src = "Personaje3/MizumiSelectOpacidad.png";
    characTranspSPR[3] = new Image();
    characTranspSPR[3].src = "Personaje4/KorimSelectOpacidad.png";

    //SPRITES IN-GAME
    //Personajes (SPRITES IN-GAME) del P1   
    var characInGame1SPR = [];
    characInGame1SPR[0] = new Image();
    characInGame1SPR[0].src = "Personaje1/FikhuIconoJuegoP1.png";
    characInGame1SPR[1] = new Image();
    characInGame1SPR[1].src = "Personaje2/NivaIconoJuegoP1.png";
    characInGame1SPR[2] = new Image();
    characInGame1SPR[2].src = "Personaje3/MizumingameP1.png";
    characInGame1SPR[3] = new Image();
    characInGame1SPR[3].src = "Personaje4/KorimIngameP1.png";

    //Personajes (SPRITES IN-GAME) del P2
    var characInGame2SPR = [];
    characInGame2SPR[0] = new Image();
    characInGame2SPR[0].src = "Personaje1/FikhuIconoJuegoP2.png";
    characInGame2SPR[1] = new Image();
    characInGame2SPR[1].src = "Personaje2/NivaIconoJuegoP2.png";
    characInGame2SPR[2] = new Image();
    characInGame2SPR[2].src = "Personaje3/MizumingameP2.png";
    characInGame2SPR[3] = new Image();
    characInGame2SPR[3].src = "Personaje4/KorimIngameP2.png";

    //CURSORES
    var cursorSPR = [];
    cursorSPR[0] = new Image();
    cursorSPR[0].src = "PunteroP1qwq.png";
    cursorSPR[1] = new Image();
    cursorSPR[1].src = "PunteroP2qwq.png";

    //FONDO
    var backgroundSPR = new Image();
    backgroundSPR.src = "MenuSeleccion.jpg";

    //MARCOS
    var marcosSPR = [];
    marcosSPR[0] = new Image();
    marcosSPR[0].src = "MarcoP1.png";
    marcosSPR[1] = new Image();
    marcosSPR[1].src = "MarcoP2.png";

    //SPRITES QUE ENVIARÉ AL JUEGO
    var chosenP1SPR = new Image();
    var chosenP2SPR = new Image();

    //CREAR LOS OBJETOS DE TIPO HEXAGON:
    var characHex = [];
    characHex[0] = new hexagon((canvas.width / 2), (canvas.height / 2) - 340); //ARRIBA
    characHex[1] = new hexagon(canvas.width / 2, (canvas.height / 2) - 120); //ABAJO
    characHex[2] = new hexagon((canvas.width / 2) + 225, (canvas.height / 2) - 230); //DRCHA
    characHex[3] = new hexagon((canvas.width / 2) - 225, (canvas.height / 2) - 230); //IZDA

    //CREAR LOS MARCOS DE PERSONAJE DE CADA PLAYER
    var marcos = [];
    marcos[0] = new barrera(250, 770);
    marcos[1] = new barrera(canvas.width - (marcosSPR[1].width + 250), 770);

    //CREAR LOS CURSORES:
    var cursores = [];
    cursores[0] = new jugador(0 + (cursorSPR[0].width + 100), canvas.height - (cursorSPR[0].height + 100));
    cursores[1] = new jugador(canvas.width - (cursorSPR[1].width + 100), canvas.height - (cursorSPR[1].height + 100));

    function pantallaCompleta() {
        document.documentElement.requestFullscreen();
    }
    ;
    //MOVIMIENTO DE LOS CURSORES DE LOS JUGADORES:
    function moveDown(e) {
        //PLAYER 1

        if (e.key === "w" || e.key === "W") {
            cursores[0].setUp(true);
        }
        if (e.key === "a" || e.key === "A") {
            cursores[0].setLeft(true);
        }
        if (e.key === "s" || e.key === "S") {
            cursores[0].setDown(true);
        }
        if (e.key === "d" || e.key === "D") {
            cursores[0].setRight(true);
        }
        if (e.key === " ") {
            for (var j = 0; j < nCharac; j++) {
                if (characHex[j].getCanSelect1() && !cursores[0].getSelected()) { //si esta el cursor sobre un slot de personaje y no has elegido personjaje aun...
                    cursores[0].setSelectedT(); // el cursor se queda fijo, pues ha elegido personaje ya
                    chosenP1SPR.src = characInGame1SPR[j].src;
                } else if (characHex[j].getCanSelect1() && cursores[0].getSelected()) { //si ya has elegido personaje pero le vuelves a dar al espacio...
                    cursores[0].setSelectedF(); //recuperas el control del cursor, pues has deseleccionado el personaje
                }
            }
        }
        //PLAYER 2
        if (e.key === "ArrowUp") {
            cursores[1].setUp(true);
        }
        if (e.key === "ArrowLeft") {
            cursores[1].setLeft(true);
        }
        if (e.key === "ArrowDown") {
            cursores[1].setDown(true);
        }
        if (e.key === "ArrowRight") {
            cursores[1].setRight(true);
        }
        if (e.key === "0") {
            for (var j = 0; j < nCharac; j++) {
                if (characHex[j].getCanSelect2() && !cursores[1].getSelected()) { //si esta el cursor sobre un slot de personaje y no has elegido personjaje aun...
                    cursores[1].setSelectedT(); // el cursor se queda fijo, pues ha elegido personaje ya
                    chosenP2SPR.src = characInGame2SPR[j].src;
                } else if (characHex[j].getCanSelect2() && cursores[1].getSelected()) { //si ya has elegido personaje pero le vuelves a dar al espacio...
                    cursores[1].setSelectedF(); //recuperas el control del cursor, pues has deseleccionado el personaje
                }
            }
        }
    }
    function moveUp(e) {
        //PLAYER 1
        if (e.key === "w" || e.key === "W") {
            cursores[0].setUp(false);
        }
        if (e.key === "a" || e.key === "A") {
            cursores[0].setLeft(false);
        }
        if (e.key === "s" || e.key === "S") {
            cursores[0].setDown(false);
        }
        if (e.key === "d" || e.key === "D") {
            cursores[0].setRight(false);
        }


        //PLAYER 2
        if (e.key === "ArrowUp") {
            cursores[1].setUp(false);
        }
        if (e.key === "ArrowLeft") {
            cursores[1].setLeft(false);
        }
        if (e.key === "ArrowDown") {
            cursores[1].setDown(false);
        }
        if (e.key === "ArrowRight") {
            cursores[1].setRight(false);
        }
    }
    function menuRoster() {

        this.movimiento = function () { //el que el cursor se mueva 
            for (var i = 0; i < nPlayers; i++) {
                if (!cursores[i].getSelected()) { //si el cursor que se esta evaluando no ha elegido ningun personaje...
                    //Actualizar el movimiento a cada frame, en base a la velocidad
                    cursores[i].setPosX(cursores[i].getPosX() + cursores[i].getVelX());
                    cursores[i].setPosY(cursores[i].getPosY() + cursores[i].getVelY());
                }
            }
        }
        ;
        this.colision = function () {
            //Colisiones CURSORES - LIMITES
            for (var i = 0; i < nPlayers; i++) {
                if ((cursores[i].getPosX() + cursorSPR[i].width / 2) > canvas.width) {
                    cursores[i].setVelX(-5);
                }
                if ((cursores[i].getPosX() - cursorSPR[i].width / 2) < 0) {
                    cursores[i].setVelX(5);
                }
                if ((cursores[i].getPosY() + cursorSPR[i].height / 2) > canvas.height) {
                    cursores[i].setVelY(-5);
                }
                if ((cursores[i].getPosY() - cursorSPR[i].height / 2) < 0) {
                    cursores[i].setVelY(5);
                }
            }
            //Comprobar distancia del cursor 1 a los slots
            for (var j = 0; j < nCharac; j++) {
                //Distancia del cursor 1 a los slots
                distanciaX = Math.abs(cursores[0].getPosX() - characHex[j].getPosX());
                distanciaY = Math.abs(cursores[0].getPosY() - characHex[j].getPosY());
                //SI P1 TOCA UN SLOT
                if ((distanciaX < (cursorSPR[0].width / 2 + characHex[j].getSizeX() / 2)) && (distanciaY < (cursorSPR[0].height / 2 + characHex[j].getSizeY() / 2))) {
                    characHex[j].setSizeX(180);
                    characHex[j].setSizeY(140);
                    characHex[j].canSelect1True();
                } else {
                    characHex[j].canSelect1False();
                }
            }
            //Comprobar distancia del cursor 2 a los slots
            for (var j = 0; j < nCharac; j++) {
                //Distancia del cursor 2 a los slots
                distanciaX2 = Math.abs(cursores[1].getPosX() - characHex[j].getPosX());
                distanciaY2 = Math.abs(cursores[1].getPosY() - characHex[j].getPosY());
                //SI P2 TOCA UN SLOT
                if ((distanciaX2 < (cursorSPR[1].width / 2 + characHex[j].getSizeX() / 2)) && (distanciaY2 < (cursorSPR[1].height / 2 + characHex[j].getSizeY() / 2))) {
                    characHex[j].setSizeX(180);
                    characHex[j].setSizeY(140);
                    characHex[j].canSelect2True();
                } else {
                    characHex[j].canSelect2False();
                }
            }
            //Comprobar si NINGUNO DE LOS CURSORES ESTA TOCANDO UN SLOT (para reestablecer el tamaño de los mismos si nos son seleccionados)
            for (var j = 0; j < nCharac; j++) {
                if (!characHex[j].getCanSelect2() && !characHex[j].getCanSelect1()) {
                    characHex[j].setSizeX(160);
                    characHex[j].setSizeY(120);
                }
            }
        }
        ;
        this.aceleracion = function () {
            for (var i = 0; i < nPlayers; i++) {
                //Incrementar la velocidad en funcion de la direccion del movimiento 
                if (cursores[i].getUp()) {
                    cursores[i].setVelY(cursores[i].getVelY() - 0.5);
                }
                if (cursores[i].getDown()) {
                    cursores[i].setVelY(cursores[i].getVelY() + 0.5);
                }
                if (cursores[i].getRight()) {
                    cursores[i].setVelX(cursores[i].getVelX() + 0.5);
                }
                if (cursores[i].getLeft()) {
                    cursores[i].setVelX(cursores[i].getVelX() - 0.5);
                }
                //Limites de velocidad: que no se pase ni de 5 ni de -5
                if (cursores[i].getVelX() > 6 || cursores[i].getVelX() < -6) {
                    cursores[i].setVelX(6 * (cursores[i].getVelX() / Math.abs(cursores[i].getVelX()))); //O sea, 6 * (el signo de la velocidad)
                }
                if (cursores[i].getVelY() > 6 || cursores[i].getVelY() < -6) {
                    cursores[i].setVelY(6 * (cursores[i].getVelY() / Math.abs(cursores[i].getVelY())));
                }
            }
        }
        ;
        this.rozamiento = function () {
            for (var i = 0; i < nPlayers; i++) {
                if (!cursores[i].getUp() || !cursores[i].getDown()) {
                    cursores[i].setVelY(cursores[i].getVelY() - (cursores[i].getVelY() * 0.09));
                }
                if (!cursores[i].getRight() || !cursores[i].getLeft()) {
                    cursores[i].setVelX(cursores[i].getVelX() - (cursores[i].getVelX() * 0.09));
                }
            }
        }
        ;
        this.dibujar = function () {

            //Dibujar fondo
            contexto.drawImage(backgroundSPR, 0, 0, canvas.width, canvas.height);

            //Dibujar texto
            contexto.fillStyle = "white";
            contexto.lineWidth = 2;
            contexto.font = "70px Kristen ITC";
            contexto.textAlign = "center";
            contexto.fillText("Seleccionad personaje", canvas.width / 2, canvas.height - 200);

            //Dibujar recuadros de seleccion de personaje
            for (var i = 0; i < nPlayers; i++) {
                contexto.drawImage(marcosSPR[i], marcos[i].getPosX() - marcosSPR[i].width / 2, marcos[i].getPosY() - marcosSPR[i].height / 2, marcosSPR[i].width, marcosSPR[i].height);
            }
            //Dibujar slots de personajes
            for (var i = 0; i < nCharac; i++) {
                contexto.drawImage(characSPR[i], characHex[i].getPosX() - (characHex[i].getSizeX() / 2), characHex[i].getPosY() - (characHex[i].getSizeY() / 2), characHex[i].getSizeX(), characHex[i].getSizeY());
            }
            //Dibujar personajes PRESELECCION
            for (var j = 0; j < nCharac; j++) { //Comprobar si P1 ESTA TOCANDO UN SLOT
                if (characHex[j].getCanSelect1() && !cursores[0].getSelected()) {
                    contexto.drawImage(characTranspSPR[j], marcos[0].getPosX() - 300 / 2, marcos[0].getPosY() - 300 / 2, 300, 300); //en el recuadro de player 1
                } else if (characHex[j].getCanSelect1() && cursores[0].getSelected()) {
                    contexto.drawImage(characFullSPR[j], marcos[0].getPosX() - 300 / 2, marcos[0].getPosY() - 300 / 2, 300, 300); //en el recuadro de player 1
                }
            }
            for (var j = 0; j < nCharac; j++) { //Comprobar si P2 ESTA TOCANDO UN SLOT
                if (characHex[j].getCanSelect2() && !cursores[1].getSelected()) {
                    contexto.drawImage(characTranspSPR[j], marcos[1].getPosX() - 300 / 2, marcos[1].getPosY() - 300 / 2, 300, 300); //en el recuadro de player 2
                } else if (characHex[j].getCanSelect2() && cursores[1].getSelected()) {
                    contexto.drawImage(characFullSPR[j], marcos[1].getPosX() - 300 / 2, marcos[1].getPosY() - 300 / 2, 300, 300); //en el recuadro de player 1
                }
            }
            //Dibujar cursores
            for (var i = 0; i < nPlayers; i++) {
                contexto.drawImage(cursorSPR[i], cursores[i].getPosX() - (cursorSPR[i].width / 2), cursores[i].getPosY() - (cursorSPR[i].height / 2), cursorSPR[i].width, cursorSPR[i].height);
            }

        }
        ;
        this.update = function () {
            menuR.colision();
            menuR.movimiento();
            menuR.aceleracion();
            menuR.rozamiento();
            menuR.dibujar();
            
            if (cursores[0].getSelected() && cursores[1].getSelected()) {
                window.removeEventListener("click", pantallaCompleta, false);
                window.removeEventListener("keydown", pantallaCompleta, false);
                window.removeEventListener("keydown", moveDown, false);
                window.removeEventListener("keyup", moveUp, false);
                maps(chosenP1SPR, chosenP2SPR, menuAudio);
            } else {
                requestAnimationFrame(menuR.update);
            }
        }
        ;
    }
    ;
//TEMPORIZADORES / ALERTS:

//Para full screen
    window.addEventListener("click", pantallaCompleta, false);
    window.addEventListener("keydown", pantallaCompleta, false);
//Para movimiento
    window.addEventListener("keydown", moveDown, false);
    window.addEventListener("keyup", moveUp, false);

//CREAR EL OBJETO MENUROSTER Y LLAMAR A UPDATE
    var menuR = new menuRoster();
    menuR.update();
}
