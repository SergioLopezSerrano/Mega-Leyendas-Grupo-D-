function maps(chosenP1SPR, chosenP2SPR, menuAudio) {

    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");

    //VARIABLES GOBALES:
    var nMaps = 4;
    var time = 60;
    var distanciaX;
    var distanciaY;

    //CARGAR LOS SPRITES:
    //Botones 
    var mapButtonSPR = [];
    mapButtonSPR[0] = new Image();
    mapButtonSPR[0].src = "Map1Hex.png";
    mapButtonSPR[1] = new Image();
    mapButtonSPR[1].src = "Map2Hex.png";
    mapButtonSPR[2] = new Image();
    mapButtonSPR[2].src = "Map3Hex.png";
    mapButtonSPR[3] = new Image();
    mapButtonSPR[3].src = "Map4Hex.png";
    mapButtonSPR[4] = new Image();
    mapButtonSPR[4].src = "RandomHex.png";

    //Mapas
    var mapSPR = [];
    mapSPR[0] = new Image();
    mapSPR[0].src = "bkAgua.png";
    mapSPR[1] = new Image();
    mapSPR[1].src = "bkFuego.jpg";
    mapSPR[2] = new Image();
    mapSPR[2].src = "bkBosque.jpg";
    mapSPR[3] = new Image();
    mapSPR[3].src = "bkCandy.jpg";
    
    
    //Array de Canciones    

    
    //gameOverSnd.currentTime = 0;
    //gameOverSnd.play();
    var mapSND = [];
    mapSND[0] = new Audio();
    mapSND[0].src = "Music/musicWater.mp3";
    mapSND[1] = new Audio();
    mapSND[1].src = "Music/musicFire.mp3";
    mapSND[2] = new Audio();
    mapSND[2].src = "Music/musicForest.mp3";
    mapSND[3] = new Audio();
    mapSND[3].src = "Music/musicCandy.mp3";

    //Cursores
    var cursorSPR = [];
    cursorSPR = new Image();
    cursorSPR.src = "PunteroP1qwq.png";

    //Fondo de la pantalla de seleccion de escenario
    var backgroundSPR = new Image();
    backgroundSPR.src = "mapSelectBckg.png";

    //Boton de cambiar el tiempo
    var timeButtonSPR = new Image();
    timeButtonSPR.src = "TimeButton.png";

    //SPRITE QUE ENVIARÉ AL JUEGO
    var chosenMapSPR = new Image();
    
    //CANCION QUE ENVIARE AL JUEGO
    var chosenMapSND = new Audio();

    //CREAR LOS OBJETOS DE TIPO HEXAGON:
    //BOTONES MAPAS
    var mapHex = [];
    mapHex[0] = new hexagon((canvas.width / 2) - 600, (canvas.height / 2) + 120); //Map1
    mapHex[1] = new hexagon((canvas.width / 2) - 300, (canvas.height / 2) + 220); //Map2
    mapHex[2] = new hexagon((canvas.width / 2) + 300, (canvas.height / 2) + 220); //Map3
    mapHex[3] = new hexagon((canvas.width / 2) + 600, (canvas.height / 2) + 120); //Map4
    mapHex[4] = new hexagon((canvas.width / 2), (canvas.height / 2) + 120); //Random

    //BOTON TIEMPO
    var timeHex = new hexagon(canvas.width / 2, 270);

    //CREAR LOS CURSORES:
    var cursores = new jugador(0 + (cursorSPR.width + (canvas.width / 2)), canvas.height - (cursorSPR.height + 100));

    function pantallaCompleta() {
        document.documentElement.requestFullscreen();
    }
    ;
    function changeTime() {
        switch (time) {
            case 60:
                time = 90;
                break;
            case 90:
                time = -1;
                break;
            case - 1:
                time = 60;
                break;
        }
    }
    //MOVIMIENTO DE LOS CURSORES DE LOS JUGADORES:
    function moveDown(e) {
        //PLAYER 1
        if (e.key === "w" || e.key === "W") {
            cursores.setUp(true);
        }
        if (e.key === "a" || e.key === "A") {
            cursores.setLeft(true);
        }
        if (e.key === "s" || e.key === "S") {
            cursores.setDown(true);
        }
        if (e.key === "d" || e.key === "D") {
            cursores.setRight(true);
        }
        if (e.key === " ") {
            //CURSOR - SLOTS
            for (var j = 0; j < nMaps + 1; j++) { //sumamos 1 porque hay que tener en cuenta el boton del random, pero es correcto manterne la variable nMaps en 4, pues mapas como tal hay 4, no 5
                if (mapHex[j].getCanSelect1() && !cursores.getSelected() && j !== 4) { //si esta el cursor sobre un slot de personaje y no has elegido personjaje aun...
                    cursores.setSelectedT(); // el cursor se queda fijo, pues ha elegido personaje ya
                    chosenMapSPR.src = mapSPR[j].src; //guardo el src del mapa que voy a pasar al juego
                    chosenMapSND.src = mapSND[j].src; //guardo el src de la cancion que voy a pasar al juego
                } else if (mapHex[j].getCanSelect1() && !cursores.getSelected() && j === nMaps) { //si seleccionas el boton de RANDOM (el cual es el ultimo en el array de botones)
                    var rand = Math.floor(Math.random() * ((nMaps) - 0)) + 0; //nº aleatorio entre el 0 y el 3
                    cursores.setSelectedT();// el cursor se queda fijo, pues ha elegido personaje ya
                    chosenMapSPR.src = mapSPR[rand].src;//guardo el src del mapa que voy a pasar al juego
                    chosenMapSND.src = mapSND[rand].src;//guardo el src de la cancion que voy a pasar al juego
                } else if (mapHex[j].getCanSelect1() && cursores.getSelected()) { //si ya has elegido personaje pero le vuelves a dar al espacio...
                    cursores.setSelectedF(); //recuperas el control del cursor, pues has deseleccionado el personaje
                }
            }
            //CURSOR - BOTON DE TIEMPO
            if (timeHex.getCanSelect1()) {
                changeTime();
            }
        }
    }
    function moveUp(e) {
        //PLAYER 1
        if (e.key === "w" || e.key === "W") {
            cursores.setUp(false);
        }
        if (e.key === "a" || e.key === "A") {
            cursores.setLeft(false);
        }
        if (e.key === "s" || e.key === "S") {
            cursores.setDown(false);
        }
        if (e.key === "d" || e.key === "D") {
            cursores.setRight(false);
        }
    }
    function menuRoster() {

        this.movimiento = function () { //el que el cursor se mueva 
            if (!cursores.getSelected()) { //si el cursor que se esta evaluando no ha elegido ningun personaje...
                //Actualizar el movimiento a cada frame, en base a la velocidad
                cursores.setPosX(cursores.getPosX() + cursores.getVelX());
                cursores.setPosY(cursores.getPosY() + cursores.getVelY());
            }
        }
        ;
        this.colision = function () {
            //Colisiones CURSOR - LIMITES
            if ((cursores.getPosX() + cursorSPR.width / 2) > canvas.width) {
                cursores.setVelX(-5);
            }
            if ((cursores.getPosX() - cursorSPR.width / 2) < 0) {
                cursores.setVelX(5);
            }
            if ((cursores.getPosY() + cursorSPR.height / 2) > canvas.height) {
                cursores.setVelY(-5);
            }
            if ((cursores.getPosY() - cursorSPR.height / 2) < 0) {
                cursores.setVelY(5);
            }

            //Comprobar distancia del cursor 1 a los slots
            for (var j = 0; j < nMaps + 1; j++) {
                //Distancia del cursor 1 a los slots
                distanciaX = Math.abs(cursores.getPosX() - mapHex[j].getPosX());
                distanciaY = Math.abs(cursores.getPosY() - mapHex[j].getPosY());
                //SI P1 TOCA UN SLOT
                if ((distanciaX < (cursorSPR.width / 2 + mapHex[j].getSizeX() / 2)) && (distanciaY < (cursorSPR.height / 2 + mapHex[j].getSizeY() / 2))) {
                    mapHex[j].setSizeX(220);
                    mapHex[j].setSizeY(120);
                    mapHex[j].canSelect1True();
                } else {
                    mapHex[j].canSelect1False();
                }
            }

            //Comprobar la distancia del cursor 1 al boton de cambiar el tiempo
            //Distancia del cursor 1 al boton
            distanciaX = Math.abs(cursores.getPosX() - timeHex.getPosX());
            distanciaY = Math.abs(cursores.getPosY() - timeHex.getPosY());
            //SI P1 TOCA UN SLOT
            if ((distanciaX < (cursorSPR.width / 2 + timeHex.getSizeX() / 2)) && (distanciaY < (cursorSPR.height / 2 + timeHex.getSizeY() / 2))) {
                timeHex.setSizeX(120);
                timeHex.setSizeY(90);
                timeHex.canSelect1True();
            } else {
                timeHex.canSelect1False();
            }

            //Comprobar si EL CURSOR NO ESTA TOCANDO UN SLOT (para reestablecer el tamaño de los mismos si no son seleccionados)
            for (var j = 0; j < nMaps + 1; j++) {
                if (!mapHex[j].getCanSelect1()) {
                    mapHex[j].setSizeX(200);
                    mapHex[j].setSizeY(100);
                }
            }

            //Comprobar si EL CURSOR NO ESTA TOCANDO EL BOTON DE CAMBIAR TIEMPO (para reestablecer el tamaño del mismo si no es seleccionado)
            if (!timeHex.getCanSelect1()) {
                timeHex.setSizeX(100);
                timeHex.setSizeY(70);
            }
            ;
        }
        ;
        this.aceleracion = function () {
            //Incrementar la velocidad en funcion de la direccion del movimiento 
            if (cursores.getUp()) {
                cursores.setVelY(cursores.getVelY() - 0.5);
            }
            if (cursores.getDown()) {
                cursores.setVelY(cursores.getVelY() + 0.5);
            }
            if (cursores.getRight()) {
                cursores.setVelX(cursores.getVelX() + 0.5);
            }
            if (cursores.getLeft()) {
                cursores.setVelX(cursores.getVelX() - 0.5);
            }
            //Limites de velocidad: que no se pase ni de 5 ni de -5
            if (cursores.getVelX() > 6 || cursores.getVelX() < -6) {
                cursores.setVelX(6 * (cursores.getVelX() / Math.abs(cursores.getVelX()))); //O sea, 6 * (el signo de la velocidad)
            }
            if (cursores.getVelY() > 6 || cursores.getVelY() < -6) {
                cursores.setVelY(6 * (cursores.getVelY() / Math.abs(cursores.getVelY())));
            }
        }
        ;
        this.rozamiento = function () {
            if (!cursores.getUp() || !cursores.getDown()) {
                cursores.setVelY(cursores.getVelY() - (cursores.getVelY() * 0.09));
            }
            if (!cursores.getRight() || !cursores.getLeft()) {
                cursores.setVelX(cursores.getVelX() - (cursores.getVelX() * 0.09));
            }
        }
        ;
        this.dibujar = function () {
            //Dibujar fondo
            for (var j = 0; j < nMaps + 1; j++) { //Comprobar si P1 ESTA TOCANDO UN SLOT
                if (!mapHex[j].getCanSelect1() && !cursores.getSelected() || j === 4) {
                    backgroundSPR.src = "mapSelectBckg.png";
                }
            }
            for (var j = 0; j < nMaps + 1; j++) { //Comprobar si P1 NO ESTA TOCANDO UN SLOT
                if (mapHex[j].getCanSelect1() && !cursores.getSelected() && j !== 4) {
                    backgroundSPR.src = mapSPR[j].src;
                }
            }
            contexto.drawImage(backgroundSPR, 0, 0, canvas.width, canvas.height);

            //Dibujar Boton de Tiempo
            contexto.drawImage(timeButtonSPR, (timeHex.getPosX() - timeHex.getSizeX() / 2), (timeHex.getPosY() - timeHex.getSizeY() / 2), timeHex.getSizeX(), timeHex.getSizeY());

            //Dibujar Tiempo 
            contexto.fillStyle = "green";
            contexto.strokeStyle = "blue";
            contexto.lineWidth = 1.5;
            contexto.font = "80px Arial";
            contexto.textAlign = "center";
            if (time > 0) {
                contexto.fillText(time, canvas.width / 2, 190);
                contexto.strokeText(time, canvas.width / 2, 190);
            } else {

                contexto.fillText("INFINITE", canvas.width / 2, 190);
                contexto.strokeText("INFINITE", canvas.width / 2, 190);
            }

            //Dibujar slots de mapas
            for (var i = 0; i < nMaps + 1; i++) {
                contexto.drawImage(mapButtonSPR[i], mapHex[i].getPosX() - (mapHex[i].getSizeX() / 2), mapHex[i].getPosY() - (mapHex[i].getSizeY() / 2), mapHex[i].getSizeX(), mapHex[i].getSizeY());
            }
            
            //Dibujar texto
            contexto.fillStyle = "white";
            contexto.strokeStyle = "purple";
            contexto.lineWidth = 2;
            contexto.font = "70px Arial";
            contexto.textAlign = "center";
            contexto.fillText("P1 selecciona escenario", canvas.width / 2, canvas.height - 100);
            contexto.strokeText("P1 selecciona escenario", canvas.width / 2, canvas.height - 100);

            //Dibujar cursor
            contexto.drawImage(cursorSPR, cursores.getPosX() - (cursorSPR.width / 2), cursores.getPosY() - (cursorSPR.height / 2), cursorSPR.width, cursorSPR.height);
            
        }
        ;
        this.update = function () {
            menuR.colision();
            menuR.movimiento();
            menuR.aceleracion();
            menuR.rozamiento();
            menuR.dibujar();
            if (cursores.getSelected()) {
                window.removeEventListener("click", pantallaCompleta, false);
                window.removeEventListener("keydown", pantallaCompleta, false);
                window.removeEventListener("keydown", moveDown, false);
                window.removeEventListener("keyup", moveUp, false);
                menuAudio.pause(); //paramos la musica del menu
                juego(chosenP1SPR, chosenP2SPR, chosenMapSPR, time, chosenMapSND);
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




