function seleccion() {
    //VARIABLE GLOBALES
    var go2Roster = false;
    var move = 0;
    var drawControles = false;
    var drawCreditos = false;

    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");


    //CARGAR sprites
    //Opciones MENU
    var screenSPR = [];
    screenSPR[0] = new Image();
    screenSPR[0].src = "JugarSeleccion.jpg";
    screenSPR[1] = new Image();
    screenSPR[1].src = "ControlesSeleccion.jpg";
    screenSPR[2] = new Image();
    screenSPR[2].src = "CreditosSeleccion.jpg";
    screenSPR[3] = new Image();
    screenSPR[3].src = "SalirSeleccion.jpg";

    //Musica
    var selecAudio = new Audio();
    selecAudio.src = "Music/musicMenus.mp3";
    selecAudio.currentTime = 0;
    selecAudio.loop = true;
    selecAudio.play();

    //Controles
    var controlesSPR = new Image();
    controlesSPR.src = "Controles.jpg";

    //Creditos
    var creditosSPR = new Image();
    creditosSPR.src = "Creditos.png";

    //Funcion PANTALLA COMPLETA
    function pantallaCompleta(e) {
        document.documentElement.requestFullscreen();
    }
    ;
    //Controles
    function keyDown(e) {
        if (e.key === 's' || e.key === 'S' || e.keyCode === 40) {
            if (!drawControles && !drawCreditos) {
                switch (move) {
                    case 0:
                        move++;
                        break;

                    case 1:
                        move++;
                        break;

                    case 2:
                        move++;
                        break;

                    case 3:
                        move = 0;
                        break;

                }
            }
        }
        if (e.key === 'w' || e.key === 'W' || e.keyCode === 38) {
            if (!drawControles && !drawCreditos) {
                switch (move) {
                    case 0:
                        move = 3;
                        break;

                    case 1:
                        move--;
                        break;

                    case 2:
                        move--;
                        break;

                    case 3:
                        move--;
                        break;
                }
            }
        }
        if (e.key === ' ' || e.key === "0") { //si le das a espacio...
            switch (move) {
                case 0: //si le das a espacio cuando estas seleccionando "Jugar"
                    go2Roster = true;
                    break;

                case 1: //si le das a espacio cuando estas seleccionando "Controles"
                    drawControles = true;
                    break;

                case 2: //si le das a espacio cuando estas seleccionando "Creditos"
                    drawCreditos = true;
                    break;

                case 3: //si le das a espacio cuando estas seleccionando "Salir"
                    window.close();
                    break;
            }
        }
        if (e.key === 'v' || e.key === '    v   ') { //si le das a escape...
            if (drawControles) //sales de la pantalla de controles en caso de estar en ella
                drawControles = false;

            if (drawCreditos) //sales de la pantalla de creditos en caso de estar en ella
                drawCreditos = false;
        }
    }

    function menuSelec() {
        //FUNCION DIBUJAR
        this.dibujar = function () {
            contexto.drawImage(screenSPR[move], 0, 0, canvas.width, canvas.height);
            if (drawControles) {
                contexto.drawImage(controlesSPR, 0, 0, canvas.width, canvas.height);
            }
            if (drawCreditos) {
                contexto.drawImage(creditosSPR, 0, 0, canvas.width, canvas.height);
            }
        };
        //FUNCION UPDATE
        this.update = function () {
            menuS.dibujar();
            if (go2Roster) {
                window.removeEventListener("click", pantallaCompleta, false);
                window.removeEventListener("keydown", pantallaCompleta, false);
                window.removeEventListener("keydown", keyDown, false);
                roster(selecAudio);
            } else {
                //contexto.drawImage(screenSPR[move], 0, 0, canvas.width, canvas.height);
                requestAnimationFrame(menuS.update);
            }
        };
    }

    //Crecion de EVENTOS
    window.addEventListener("click", pantallaCompleta, false);
    window.addEventListener("keydown", pantallaCompleta, false);
    window.addEventListener("keydown", keyDown, false);

    //Crear el objeto MENUSELEC y llamar a UPDATE
    var menuS = new menuSelec();
    menuS.update();
}

