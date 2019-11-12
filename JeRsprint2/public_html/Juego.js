function juego(character1, character2, scenario, tiempo, music) {

    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    //CREAR Y CARGAR LOS SPRITES
    //Personajes (SPRITES) del P1
    var jugadorSPR = [];
    jugadorSPR[0] = new Image();
    jugadorSPR[0].src = character1.src; //el sprite del jugador 1 viene dado por el indice del personaje que eligio en el roster
    jugadorSPR[1] = new Image();
    jugadorSPR[1].src = character2.src; //el sprite del jugador 2 viene dado por el indice del personaje que eligio en el roster
    var barreraSPR = new Image();
    barreraSPR.src = "Bloque.png";
    var bolaSPR = new Image();
    bolaSPR.src = "Pelota.png";
    var fondoSPR = new Image();
    fondoSPR.src = scenario.src;

    var porteriaSPR = [];
    porteriaSPR[0] = new Image();
    porteriaSPR[0].src = "PorteriaP1.png";
    porteriaSPR[1] = new Image();
    porteriaSPR[1].src = "PorteriaP2.png";

    //IMAGENES PAUSA
    var pausaSPR = [];
    pausaSPR[0] = new Image();
    pausaSPR[0].src = "MenuPausaReanudarSeleccionado.png";
    pausaSPR[1] = new Image();
    pausaSPR[1].src = "MenuPausaMenuSeleccionado.png";

    //VARIABLES GLOBALES
    var distanciaX;
    var distanciaY;
    var angulo;
    var numeroBarreras = 41;
    var numeroJugadores = 2;
    var controlesJugador1 = true;
    var controlesJugador2 = true;
    var bolaCogida = [false, false];
    var puntuacionJ1 = 0;
    var puntuacionJ2 = 0;
    var reloj = tiempo;
    var pausa = false;
    var indicePausa = 0;

    //MUSICA
    music.currentTime = 0;
    music.loop = true;
    music.play();

    var player = [];
    player[0] = new jugador(150, canvas.height / 2);
    player[1] = new jugador(canvas.width - 150, canvas.height / 2);
    var block = [];
    block[0] = new barrera(canvas.width / 2 - 590, canvas.height / 2 - 339, 120, 120);
    block[1] = new barrera(canvas.width / 2 - 590, canvas.height / 2 - 219, 120, 120);
    block[2] = new barrera(canvas.width / 2 - 475, canvas.height / 2 - 364, 65, 65);
    block[3] = new barrera(canvas.width / 2 - 410, canvas.height / 2 - 364, 65, 65);
    block[4] = new barrera(canvas.width / 2 - 345, canvas.height / 2 - 364, 65, 65);
    block[5] = new barrera(canvas.width / 2 - 340, canvas.height / 2 - 160, 100, 100);

    block[6] = new barrera(canvas.width / 2 + 590, canvas.height / 2 - 339, 120, 120);
    block[7] = new barrera(canvas.width / 2 + 590, canvas.height / 2 - 219, 120, 120);
    block[8] = new barrera(canvas.width / 2 + 475, canvas.height / 2 - 364, 65, 65);
    block[9] = new barrera(canvas.width / 2 + 410, canvas.height / 2 - 364, 65, 65);
    block[10] = new barrera(canvas.width / 2 + 345, canvas.height / 2 - 364, 65, 65);
    block[11] = new barrera(canvas.width / 2 + 340, canvas.height / 2 - 160, 100, 100);

    block[12] = new barrera(canvas.width / 2 - 590, canvas.height / 2 + 339, 120, 120);
    block[13] = new barrera(canvas.width / 2 - 590, canvas.height / 2 + 219, 120, 120);
    block[14] = new barrera(canvas.width / 2 - 475, canvas.height / 2 + 364, 65, 65);
    block[15] = new barrera(canvas.width / 2 - 410, canvas.height / 2 + 364, 65, 65);
    block[16] = new barrera(canvas.width / 2 - 345, canvas.height / 2 + 364, 65, 65);
    block[17] = new barrera(canvas.width / 2 - 340, canvas.height / 2 + 160, 100, 100);

    block[18] = new barrera(canvas.width / 2 + 590, canvas.height / 2 + 339, 120, 120);
    block[19] = new barrera(canvas.width / 2 + 590, canvas.height / 2 + 219, 120, 120);
    block[20] = new barrera(canvas.width / 2 + 475, canvas.height / 2 + 364, 65, 65);
    block[21] = new barrera(canvas.width / 2 + 410, canvas.height / 2 + 364, 65, 65);
    block[22] = new barrera(canvas.width / 2 + 345, canvas.height / 2 + 364, 65, 65);
    block[23] = new barrera(canvas.width / 2 + 340, canvas.height / 2 + 160, 100, 100);

    block[24] = new barrera(canvas.width / 2 - 700, canvas.height / 2, 70, 70);
    block[25] = new barrera(canvas.width / 2 - 630, canvas.height / 2, 70, 70);
    block[26] = new barrera(canvas.width / 2 - 560, canvas.height / 2, 70, 70);
    block[27] = new barrera(canvas.width / 2 - 490, canvas.height / 2, 70, 70);

    block[28] = new barrera(canvas.width / 2 + 700, canvas.height / 2, 70, 70);
    block[29] = new barrera(canvas.width / 2 + 630, canvas.height / 2, 70, 70);
    block[30] = new barrera(canvas.width / 2 + 560, canvas.height / 2, 70, 70);
    block[31] = new barrera(canvas.width / 2 + 490, canvas.height / 2, 70, 70);

    block[32] = new barrera(canvas.width / 2 - 105, canvas.height / 2 - 375, 70, 70);
    block[33] = new barrera(canvas.width / 2 - 35, canvas.height / 2 - 375, 70, 70);
    block[34] = new barrera(canvas.width / 2 + 105, canvas.height / 2 - 375, 70, 70);
    block[35] = new barrera(canvas.width / 2 + 35, canvas.height / 2 - 375, 70, 70);

    block[36] = new barrera(canvas.width / 2 - 105, canvas.height / 2 + 375, 70, 70);
    block[37] = new barrera(canvas.width / 2 - 35, canvas.height / 2 + 375, 70, 70);
    block[38] = new barrera(canvas.width / 2 + 105, canvas.height / 2 + 375, 70, 70);
    block[39] = new barrera(canvas.width / 2 + 35, canvas.height / 2 + 375, 70, 70);

    block[40] = new barrera(canvas.width / 2, canvas.height / 2, 100, 100);

    var ball = new bola(canvas.width / 2, canvas.height / 2);
    if (Math.random() >= 0.5) {
        ball.setVelY(5);
    } else {
        ball.setVelY(-5);
    }
    ;

    var goal = [];
    goal[0] = new barrera(60, canvas.height / 2, 100, 200);
    goal[1] = new barrera(canvas.width - 60, canvas.height / 2, 100, 200);

    //PONER PANTALLA COMPLETA
    function pantallaCompleta(e) {
        document.documentElement.requestFullscreen();
    }
    ;

    function dibujarPausa() {
        //DIBUJAR PAUSA
        contexto.drawImage(pausaSPR[indicePausa], 0, 0, canvas.width, canvas.height);
    }

    //CONTROLES DE TECLADO
    function controlesDown(e) {

        //JUGADOR 1
        if (controlesJugador1) {

            //EJE X 
            if (e.key === 'd' || e.key === 'D') {
                player[0].setRight(true);
            }
            ;
            if (e.key === 'a' || e.key === 'A') {
                player[0].setLeft(true);
            }
            ;

            //EJE Y
            if (e.key === 'w' || e.key === 'W') {
                if (!pausa) {
                    player[0].setUp(true);
                } else {
                    switch (indicePausa) {
                        case 0:
                            indicePausa = 1;
                            break;
                        case 1:
                            indicePausa = 0;
                            break;
                    }
                    partida.dibujar();
                    dibujarPausa();
                }
            }
            ;
            if (e.key === 's' || e.key === 'S') {
                if (!pausa) {
                    player[0].setDown(true);
                } else {
                    switch (indicePausa) {
                        case 0:
                            indicePausa = 1;
                            break;
                        case 1:
                            indicePausa = 0;
                            break;
                    }
                    partida.dibujar();
                    dibujarPausa();
                }
            }
            ;
            if (e.key === 'b' || e.key === 'B') {//PAUSA
                pausa = true;
                console.log(pausa);
            }
            ;

            //COGER BOLA JUGADOR 1
            if (e.key === ' ' || e.key === ' ') {
                if (!pausa) {
                    distanciaX = Math.abs(player[0].getPosX() - ball.getPosX());
                    distanciaY = Math.abs(player[0].getPosY() - ball.getPosY());
                    if ((distanciaX < (jugadorSPR[0].width / 2 + bolaSPR.width / 2)) && (distanciaY < (jugadorSPR[0].height / 2 + bolaSPR.height / 2)) && !bolaCogida[1]) {
                        bolaCogida[0] = true;
                    }
                    ;
                } else {
                    switch (indicePausa) {
                        case 0:
                            pausa = false;
                            requestAnimationFrame(partida.frame);
                            break;
                        case 1:
                            window.removeEventListener("click", pantallaCompleta, false);
                            window.removeEventListener("keydown", pantallaCompleta, false);
                            window.removeEventListener("keydown", controlesDown, false);
                            window.removeEventListener("keyup", controlesUp, false);
                            window.clearTimeout(cuentaAtrasTO);
                            music.pause();
                            inicio();
                            break;
                    }
                }
            }
            ;
        }
        ;

        //JUGADOR 2
        if (controlesJugador2) {

            //EJE X 
            if (e.key === 'ArrowRight') {
                player[1].setRight(true);
            }
            ;
            if (e.key === 'ArrowLeft') {
                player[1].setLeft(true);
            }
            ;

            //EJE Y
            if (e.key === 'ArrowUp') {
                if (!pausa) {
                    player[1].setUp(true);
                } else {
                    switch (indicePausa) {
                        case 0:
                            indicePausa = 1;
                            break;
                        case 1:
                            indicePausa = 0;
                            break;
                    }
                    partida.dibujar();
                    dibujarPausa();
                }
            }
            ;
            if (e.key === 'ArrowDown') {
                if (!pausa) {
                    player[1].setDown(true);
                } else {
                    switch (indicePausa) {
                        case 0:
                            indicePausa = 1;
                            break;
                        case 1:
                            indicePausa = 0;
                            break;
                    }
                    partida.dibujar();
                    dibujarPausa();
                }
            }
            ;


            //COGER BOLA JUGADOR 2
            if (e.key === '0' || e.key === '0') {
                if (!pausa) {
                    distanciaX = Math.abs(player[1].getPosX() - ball.getPosX());
                    distanciaY = Math.abs(player[1].getPosY() - ball.getPosY());
                    if ((distanciaX < (jugadorSPR[1].width / 2 + bolaSPR.width / 2)) && (distanciaY < (jugadorSPR[1].height / 2 + bolaSPR.height / 2)) && !bolaCogida[0]) {
                        bolaCogida[1] = true;
                    }
                    ;
                } else {
                    switch (indicePausa) {
                        case 0:
                            pausa = false;
                            requestAnimationFrame(partida.frame);
                            break;
                        case 1:
                            window.removeEventListener("click", pantallaCompleta, false);
                            window.removeEventListener("keydown", pantallaCompleta, false);
                            window.removeEventListener("keydown", controlesDown, false);
                            window.removeEventListener("keyup", controlesUp, false);
                            window.clearTimeout(cuentaAtrasTO);
                            inicio();
                            break;
                    }
                }
            }
            ;
        }
        ;

        if (reloj === 0 && e.key === 'Enter') {
            controlesJugador1 = true;
            controlesJugador2 = true;
            reloj = tiempo;
            setTimeout(cuentaAtras, 1000);
            //partida.frame();
            window.removeEventListener("click", pantallaCompleta, false);
            window.removeEventListener("keydown", pantallaCompleta, false);
            window.removeEventListener("keydown", controlesDown, false);
            window.removeEventListener("keyup", controlesUp, false);
            window.clearTimeout(cuentaAtrasTO);
            music.pause();
            seleccion();
        }
        ;
    }
    ;

    function cuentaAtras() {
        reloj--;
        if (reloj !== 0) {
            setTimeout(cuentaAtras, 1000);
        }
        ;
    }
    ;

    function controlesUp(e) {

        //JUGADOR 1
        if (controlesJugador1) {

            //EJE X 
            if (e.key === 'd' || e.key === 'D') {
                player[0].setRight(false);
            }
            ;
            if (e.key === 'a' || e.key === 'A') {
                player[0].setLeft(false);
            }
            ;

            //EJE Y
            if (e.key === 'w' || e.key === 'W') {
                player[0].setUp(false);
            }
            ;
            if (e.key === 's' || e.key === 'S') {
                player[0].setDown(false);
            }
            ;

            //SOLTAR BOLA JUGADOR 1
            if (e.key === ' ' || e.key === ' ') {
                bolaCogida[0] = false;
            }
            ;
        }
        ;

        //JUGADOR 2
        if (controlesJugador2) {

            //EJE X 
            if (e.key === 'ArrowRight') {
                player[1].setRight(false);
            }
            ;
            if (e.key === 'ArrowLeft') {
                player[1].setLeft(false);
            }
            ;

            //EJE Y
            if (e.key === 'ArrowUp') {
                player[1].setUp(false);
            }
            ;
            if (e.key === 'ArrowDown') {
                player[1].setDown(false);
            }
            ;

            //SOLTAR BOLA JUGADOR 2
            if (e.key === '0' || e.key === '0') {
                bolaCogida[1] = false;
            }
            ;
        }
        ;
    }
    ;

    function partida() {

        this.colisiones = function () {

            //COLISION JUGADORES-BORDES
            for (var i = 0; i < numeroJugadores; i++) {
                if ((player[i].getPosX() + jugadorSPR[i].width / 2) > canvas.width) {
                    player[i].setVelX(-5);
                    bolaCogida[i] = false;
                }
                ;
                if ((player[i].getPosX() - jugadorSPR[i].width / 2) < 0) {
                    player[i].setVelX(5);
                    bolaCogida[i] = false;
                }
                ;
                if ((player[i].getPosY() - jugadorSPR[i].height / 2) < 0) {
                    player[i].setVelY(5);
                    bolaCogida[i] = false;
                }
                ;
                if ((player[i].getPosY() + jugadorSPR[i].height / 2) > canvas.height) {
                    player[i].setVelY(-5);
                    bolaCogida[i] = false;
                }
                ;
            }
            ;

            //COLISION BOLA-BORDES
            if ((ball.getPosX() + bolaSPR.width / 2) > canvas.width) {
                ball.setVelX(-Math.abs(ball.getVelX()));
            }
            ;
            if ((ball.getPosX() - bolaSPR.width / 2) < 0) {
                ball.setVelX(Math.abs(ball.getVelX()));
            }
            ;
            if ((ball.getPosY() - bolaSPR.height / 2) < 0) {
                ball.setVelY(Math.abs(ball.getVelY()));
            }
            ;
            if ((ball.getPosY() + bolaSPR.height / 2) > canvas.height) {
                ball.setVelY(-Math.abs(ball.getVelY()));
            }
            ;

            //COLLISION JUGADORES-BARRERAS
            for (var i = 0; i < numeroJugadores; i++) {
                for (var j = 0; j < numeroBarreras; j++) {
                    distanciaX = Math.abs(player[i].getPosX() - block[j].getPosX());
                    distanciaY = Math.abs(player[i].getPosY() - block[j].getPosY());
                    if ((distanciaX < (jugadorSPR[i].width / 2 + block[j].getTamañoX() / 2)) && (distanciaY < (jugadorSPR[i].height / 2 + block[j].getTamañoY() / 2))) {
                        angulo = Math.atan(Math.abs(player[i].getPosX() - block[j].getPosX()) / Math.abs(player[i].getPosY() - block[j].getPosY())) * 180 / Math.PI;
                        if (block[j].getPosX() < player[i].getPosX() && block[j].getPosY() < player[i].getPosY()) {
                            angulo = 180 - angulo;
                        }
                        ;
                        if (block[j].getPosX() > player[i].getPosX() && block[j].getPosY() < player[i].getPosY()) {
                            angulo = 180 + angulo;
                        }
                        ;
                        if (block[j].getPosX() > player[i].getPosX() && block[j].getPosY() > player[i].getPosY()) {
                            angulo = 360 - angulo;
                        }
                        ;
                        if ((player[i].getPosX() - block[j].getPosX()) === 0 && block[j].getPosY() < player[i].getPosY()) {
                            angulo = 180;
                        }
                        ;
                        if ((player[i].getPosY() - block[j].getPosY()) === 0 && block[j].getPosX() > player[i].getPosX()) {
                            angulo = 270;
                        }
                        ;

                        if (angulo >= 225 && angulo < 315) {
                            player[i].setVelX(-5);
                        }
                        ;
                        if (angulo >= 45 && angulo < 135) {
                            player[i].setVelX(5);
                        }
                        ;
                        if (angulo >= 135 && angulo < 225) {
                            player[i].setVelY(5);
                        }
                        ;
                        if (angulo >= 315 || angulo < 45) {
                            player[i].setVelY(-5);
                        }
                        ;
                        bolaCogida[i] = false;
                    }
                    ;
                }
                ;
            }
            ;

            //COLLISION BOLA-BARRERAS
            for (var i = 0; i < numeroBarreras; i++) {
                distanciaX = Math.abs(ball.getPosX() - block[i].getPosX());
                distanciaY = Math.abs(ball.getPosY() - block[i].getPosY());
                if ((distanciaX < (bolaSPR.width / 2 + block[i].getTamañoX() / 2)) && (distanciaY < (bolaSPR.height / 2 + block[i].getTamañoY() / 2))) {
                    angulo = Math.atan(Math.abs(ball.getPosX() - block[i].getPosX()) / Math.abs(ball.getPosY() - block[i].getPosY())) * 180 / Math.PI;
                    if (block[i].getPosX() < ball.getPosX() && block[i].getPosY() < ball.getPosY()) {
                        angulo = 180 - angulo;
                    }
                    ;
                    if (block[i].getPosX() > ball.getPosX() && block[i].getPosY() < ball.getPosY()) {
                        angulo = 180 + angulo;
                    }
                    ;
                    if (block[i].getPosX() > ball.getPosX() && block[i].getPosY() > ball.getPosY()) {
                        angulo = 360 - angulo;
                    }
                    ;
                    if ((ball.getPosX() - block[i].getPosX()) === 0 && block[i].getPosY() < ball.getPosY()) {
                        angulo = 180;
                    }
                    ;
                    if ((ball.getPosY() - block[i].getPosY()) === 0 && block[i].getPosX() > ball.getPosX()) {
                        angulo = 270;
                    }
                    ;

                    if (angulo >= 225 && angulo < 315) {
                        ball.setVelX(-Math.abs(ball.getVelX()));
                    }
                    ;
                    if (angulo >= 45 && angulo < 135) {
                        ball.setVelX(Math.abs(ball.getVelX()));
                    }
                    ;
                    if (angulo >= 135 && angulo < 225) {
                        ball.setVelY(Math.abs(ball.getVelY()));
                    }
                    ;
                    if (angulo >= 315 || angulo < 45) {
                        ball.setVelY(-Math.abs(ball.getVelY()));
                    }
                    ;
                }
                ;
            }
            ;

            //COLISIONES BOLA PORTERIA 1
            distanciaX = Math.abs(ball.getPosX() - goal[0].getPosX());
            distanciaY = Math.abs(ball.getPosY() - goal[0].getPosY());
            if ((distanciaX < (bolaSPR.width / 2 + goal[0].getTamañoX() / 2)) && (distanciaY < (bolaSPR.height / 2 + goal[0].getTamañoY() / 2))) {
                puntuacionJ2++;
                ball.setPosX(canvas.width / 2);
                ball.setPosY(canvas.height / 2);
                if (Math.random() >= 0.5) {
                    ball.setVelY(5);
                } else {
                    ball.setVelY(-5);
                }
                ;
                ball.setVelX(0);
                bolaCogida[0] = false;
                bolaCogida[1] = false;
                player[0].setPosX(150);
                player[0].setPosY(canvas.height / 2);
                player[1].setPosX(canvas.width - 150);
                player[1].setPosY(canvas.height / 2);
                for (var i = 0; i < 2; i++) {
                    player[i].setVelX(0);
                    player[i].setVelY(0);
                    player[i].setDown(false);
                    player[i].setUp(false);
                    player[i].setRight(false);
                    player[i].setLeft(false);
                }
                ;
            }
            ;

            //COLISIONES BOLA PORTERIA 2
            distanciaX = Math.abs(ball.getPosX() - goal[1].getPosX());
            distanciaY = Math.abs(ball.getPosY() - goal[1].getPosY());
            if ((distanciaX < (bolaSPR.width / 2 + goal[1].getTamañoX() / 2)) && (distanciaY < (bolaSPR.height / 2 + goal[1].getTamañoY() / 2))) {
                puntuacionJ1++;
                ball.setPosX(canvas.width / 2);
                ball.setPosY(canvas.height / 2);
                if (Math.random() >= 0.5) {
                    ball.setVelY(5);
                } else {
                    ball.setVelY(-5);
                }
                ;
                ball.setVelX(0);
                bolaCogida[0] = false;
                bolaCogida[1] = false;
                player[0].setPosX(150);
                player[0].setPosY(canvas.height / 2);
                player[1].setPosX(canvas.width - 150);
                player[1].setPosY(canvas.height / 2);
                for (var i = 0; i < 2; i++) {
                    player[i].setVelX(0);
                    player[i].setVelY(0);
                    player[i].setDown(false);
                    player[i].setUp(false);
                    player[i].setRight(false);
                    player[i].setLeft(false);
                }
                ;
            }
            ;

            //COLISION JUGADOR-JUGADOR
            distanciaX = Math.abs(player[0].getPosX() - player[1].getPosX());
            distanciaY = Math.abs(player[0].getPosY() - player[1].getPosY());
            if ((distanciaX < (jugadorSPR[0].width / 2 + jugadorSPR[1].width / 2)) && (distanciaY < (jugadorSPR[0].height / 2 + jugadorSPR[1].height / 2))) {
                bolaCogida[0] = false;
                bolaCogida[1] = false;
                //REBOTE JUGADOR 1
                angulo = Math.atan(Math.abs(player[0].getPosX() - player[1].getPosX()) / Math.abs(player[0].getPosY() - player[1].getPosY())) * 180 / Math.PI;
                if (player[1].getPosX() < player[0].getPosX() && player[1].getPosY() < player[0].getPosY()) {
                    angulo = 180 - angulo;
                }
                ;
                if (player[1].getPosX() > player[0].getPosX() && player[1].getPosY() < player[0].getPosY()) {
                    angulo = 180 + angulo;
                }
                ;
                if (player[1].getPosX() > player[0].getPosX() && player[1].getPosY() > player[0].getPosY()) {
                    angulo = 360 - angulo;
                }
                ;
                if ((player[0].getPosX() - player[1].getPosX()) === 0 && player[1].getPosY() < player[0].getPosY()) {
                    angulo = 180;
                }
                ;
                if ((player[0].getPosY() - player[1].getPosY()) === 0 && player[1].getPosX() > player[0].getPosX()) {
                    angulo = 270;
                }
                ;

                if (angulo >= 225 && angulo < 315) {
                    player[0].setVelX(-5);
                }
                ;
                if (angulo >= 45 && angulo < 135) {
                    player[0].setVelX(5);
                }
                ;
                if (angulo >= 135 && angulo < 225) {
                    player[0].setVelY(5);
                }
                ;
                if (angulo >= 315 || angulo < 45) {
                    player[0].setVelY(-5);
                }
                ;

                //REBOTE JUGADOR 2
                angulo = Math.atan(Math.abs(player[1].getPosX() - player[0].getPosX()) / Math.abs(player[1].getPosY() - player[0].getPosY())) * 180 / Math.PI;
                if (player[0].getPosX() < player[1].getPosX() && player[0].getPosY() < player[1].getPosY()) {
                    angulo = 180 - angulo;
                }
                ;
                if (player[0].getPosX() > player[1].getPosX() && player[0].getPosY() < player[1].getPosY()) {
                    angulo = 180 + angulo;
                }
                ;
                if (player[0].getPosX() > player[1].getPosX() && player[0].getPosY() > player[1].getPosY()) {
                    angulo = 360 - angulo;
                }
                ;
                if ((player[1].getPosX() - player[0].getPosX()) === 0 && player[0].getPosY() < player[1].getPosY()) {
                    angulo = 180;
                }
                ;
                if ((player[1].getPosY() - player[0].getPosY()) === 0 && player[0].getPosX() > player[1].getPosX()) {
                    angulo = 270;
                }
                ;

                if (angulo >= 225 && angulo < 315) {
                    player[1].setVelX(-5);
                }
                ;
                if (angulo >= 45 && angulo < 135) {
                    player[1].setVelX(5);
                }
                ;
                if (angulo >= 135 && angulo < 225) {
                    player[1].setVelY(5);
                }
                ;
                if (angulo >= 315 || angulo < 45) {
                    player[1].setVelY(-5);
                }
                ;
            }
            ;
        };

        this.movimiento = function () {

            //MOVER JUGADORES
            for (var i = 0; i < numeroJugadores; i++) {
                player[i].setPosX(player[i].getPosX() + player[i].getVelX());
                player[i].setPosY(player[i].getPosY() + player[i].getVelY());
            }
            ;

            //ACELERAR BOLA
            if (bolaCogida[0]) {
                ball.setVelX(player[0].getVelX());
                ball.setVelY(player[0].getVelY());
            }
            ;
            if (bolaCogida[1]) {
                ball.setVelX(player[1].getVelX());
                ball.setVelY(player[1].getVelY());
            }
            ;

            //MOVER BOLA    
            ball.setPosX(ball.getPosX() + ball.getVelX());
            ball.setPosY(ball.getPosY() + ball.getVelY());
        };

        this.aceleracion = function () {

            //ACELERAR JUGADORES
            for (var i = 0; i < numeroJugadores; i++) {
                if (player[i].getRight()) {
                    player[i].setVelX(player[i].getVelX() + 0.5);
                }
                ;
                if (player[i].getLeft()) {
                    player[i].setVelX(player[i].getVelX() - 0.5);
                }
                ;
                if (player[i].getUp()) {
                    player[i].setVelY(player[i].getVelY() - 0.5);
                }
                ;
                if (player[i].getDown()) {
                    player[i].setVelY(player[i].getVelY() + 0.5);
                }
                ;

                if (player[i].getVelX() > 5 || player[i].getVelX() < -5) {
                    player[i].setVelX(5 * (player[i].getVelX() / Math.abs(player[i].getVelX())));
                }
                ;
                if (player[i].getVelY() > 5 || player[i].getVelY() < -5) {
                    player[i].setVelY(5 * (player[i].getVelY() / Math.abs(player[i].getVelY())));
                }
                ;
            }
            ;
        };

        this.rozamiento = function () {

            //ROZAMIENTO JUGADORES
            for (var i = 0; i < numeroJugadores; i++) {
                if (!player[i].getRight() && !player[i].getLeft()) {
                    player[i].setVelX(player[i].getVelX() - (player[i].getVelX() * 0.05));
                }
                ;
                if (!player[i].getUp() && !player[i].getDown()) {
                    player[i].setVelY(player[i].getVelY() - (player[i].getVelY() * 0.05));
                }
                ;
            }
            ;

            //ROZAMIENTO BOLA
            if (Math.abs(ball.getVelX()) <= 5 && Math.abs(ball.getVelX()) > 4) {
                ball.setVelX(ball.getVelX() - (ball.getVelX() * 0.001));
            } else {
                if (Math.abs(ball.getVelX()) <= 4 && Math.abs(ball.getVelX()) > 3) {
                    ball.setVelX(ball.getVelX() - (ball.getVelX() * 0.003));
                } else {
                    if (Math.abs(ball.getVelX()) <= 3 && Math.abs(ball.getVelX()) > 2) {
                        ball.setVelX(ball.getVelX() - (ball.getVelX() * 0.005));
                    } else {
                        if (Math.abs(ball.getVelX()) <= 2 && Math.abs(ball.getVelX()) > 1) {
                            ball.setVelX(ball.getVelX() - (ball.getVelX() * 0.007));
                        } else {
                            ball.setVelX(ball.getVelX() - (ball.getVelX() * 0.009));
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            if (Math.abs(ball.getVelY()) <= 5 && Math.abs(ball.getVelY()) > 4) {
                ball.setVelY(ball.getVelY() - (ball.getVelY() * 0.001));
            } else {
                if (Math.abs(ball.getVelY()) <= 4 && Math.abs(ball.getVelY()) > 3) {
                    ball.setVelY(ball.getVelY() - (ball.getVelY() * 0.003));
                } else {
                    if (Math.abs(ball.getVelY()) <= 3 && Math.abs(ball.getVelY()) > 2) {
                        ball.setVelY(ball.getVelY() - (ball.getVelY() * 0.005));
                    } else {
                        if (Math.abs(ball.getVelY()) <= 2 && Math.abs(ball.getVelY()) > 1) {
                            ball.setVelY(ball.getVelY() - (ball.getVelY() * 0.007));
                        } else {
                            ball.setVelY(ball.getVelY() - (ball.getVelY() * 0.009));
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
        };

        this.dibujar = function () {

            //CUBRIR FRAME ANTERIOR DE NEGRO           
            contexto.fillStyle = "black";
            contexto.fillRect(0, 0, canvas.width, canvas.height);

            //DIBUJAR FONDO
            contexto.drawImage(fondoSPR, 0, 0, canvas.width, canvas.height);

            //DIBUJAR JUGADORES
            contexto.globalAlpha = 1;
            for (var i = 0; i < numeroJugadores; i++) {
                contexto.drawImage(jugadorSPR[i], player[i].getPosX() - jugadorSPR[i].width / 2, player[i].getPosY() - jugadorSPR[i].height / 2, jugadorSPR[i].width, jugadorSPR[i].height);
            }
            ;

            //DIBUJAR BOLA
            contexto.globalAlpha = 1;
            contexto.drawImage(bolaSPR, ball.getPosX() - bolaSPR.width / 2, ball.getPosY() - bolaSPR.height / 2, bolaSPR.width, bolaSPR.height);

            //DIBUJAR BARRERAS
            contexto.globalAlpha = 1;
            contexto.strokeStyle = "green";
            contexto.lineWidth = 3;
            for (var i = 0; i < numeroBarreras; i++) {
                contexto.drawImage(barreraSPR, block[i].getPosX() - block[i].getTamañoX() / 2, block[i].getPosY() - block[i].getTamañoY() / 2, block[i].getTamañoX(), block[i].getTamañoY());
                contexto.strokeRect(block[i].getPosX() - block[i].getTamañoX() / 2, block[i].getPosY() - block[i].getTamañoY() / 2, block[i].getTamañoX(), block[i].getTamañoY());
            }
            ;

            //DIBUJAR PORTERIAS
            contexto.strokeStyle = "red";
            contexto.lineWidth = 5;
            for (var i = 0; i < 2; i++) {
                contexto.drawImage(porteriaSPR[i], goal[i].getPosX() - goal[i].getTamañoX() / 2, goal[i].getPosY() - goal[i].getTamañoY() / 2, goal[i].getTamañoX(), goal[i].getTamañoY());
                //contexto.strokeRect(goal[i].getPosX() - goal[i].getTamañoX() / 2, goal[i].getPosY() - goal[i].getTamañoY() / 2, goal[i].getTamañoX(), goal[i].getTamañoY());
            }
            ;

            //DIBUJAR MARCADORES
            contexto.fillStyle = "white";
            contexto.strokeStyle = "red";
            contexto.lineWidth = 2;
            contexto.font = "50px Arial";
            contexto.textAlign = "center";
            contexto.fillText(puntuacionJ1 + " -- " + puntuacionJ2, canvas.width / 2, 80);
            contexto.strokeText(puntuacionJ1 + " -- " + puntuacionJ2, canvas.width / 2, 80);

            //DIBUJAR RELOJ
            contexto.fillStyle = "yellow";
            contexto.strokeStyle = "blue";
            contexto.lineWidth = 1;
            contexto.font = "30px Arial";
            contexto.textAlign = "center";
            if (tiempo > 0) {
                contexto.fillText(reloj, canvas.width / 2, 40);
                contexto.strokeText(reloj, canvas.width / 2, 40);
            } else {
                contexto.fillText("INFINITE", canvas.width / 2, 40);
                contexto.strokeText("INFINITE", canvas.width / 2, 40);
            }

        };

        this.frame = function () {
            partida.colisiones();
            partida.movimiento();
            partida.aceleracion();
            partida.rozamiento();
            partida.dibujar();
            if (reloj !== 0 && !pausa) {
                requestAnimationFrame(partida.frame);
            } else if (reloj !== 0 && pausa) {
                partida.dibujar();
                dibujarPausa();
            } else {
                ball.setPosX(canvas.width / 2);
                ball.setPosY(canvas.height / 2);
                ball.setVelX(0);
                if (Math.random() >= 0.5) {
                    ball.setVelY(5);
                } else {
                    ball.setVelY(-5);
                }
                ;
                bolaCogida[0] = false;
                bolaCogida[1] = false;
                player[0].setPosX(150);
                player[0].setPosY(canvas.height / 2);
                player[1].setPosX(canvas.width - 150);
                player[1].setPosY(canvas.height / 2);
                for (var i = 0; i < 2; i++) {
                    player[i].setVelX(0);
                    player[i].setVelY(0);
                    player[i].setDown(false);
                    player[i].setUp(false);
                    player[i].setRight(false);
                    player[i].setLeft(false);
                }
                ;

                controlesJugador1 = false;
                controlesJugador2 = false;
                partida.finPartida();
            }
            ;
        };

        this.finPartida = function () {
            if (puntuacionJ1 > puntuacionJ2) {
                contexto.fillStyle = "white";
                contexto.strokeStyle = "red";
                contexto.lineWidth = 2;
                contexto.font = "150px Arial";
                contexto.textAlign = "center";
                contexto.fillText("Gana el jugador 1", canvas.width / 2, canvas.height / 2);
                contexto.strokeText("Gana el jugador 1", canvas.width / 2, canvas.height / 2);
                contexto.font = "100px Arial";
                contexto.fillText("Pulsa enter", canvas.width / 2, canvas.height / 2 + 150);
                contexto.strokeText("Pulsa enter", canvas.width / 2, canvas.height / 2 + 150);
            } else if (puntuacionJ1 < puntuacionJ2) {
                contexto.fillStyle = "white";
                contexto.strokeStyle = "red";
                contexto.lineWidth = 2;
                contexto.font = "150px Arial";
                contexto.textAlign = "center";
                contexto.fillText("Gana el jugador 2", canvas.width / 2, canvas.height / 2);
                contexto.strokeText("Gana el jugador 2", canvas.width / 2, canvas.height / 2);
                contexto.font = "100px Arial";
                contexto.fillText("Pulsa enter", canvas.width / 2, canvas.height / 2 + 150);
                contexto.strokeText("Pulsa enter", canvas.width / 2, canvas.height / 2 + 150);
            } else {
                contexto.fillStyle = "white";
                contexto.strokeStyle = "red";
                contexto.lineWidth = 2;
                contexto.font = "150px Arial";
                contexto.textAlign = "center";
                contexto.fillText("Empate", canvas.width / 2, canvas.height / 2);
                contexto.strokeText("Empate", canvas.width / 2, canvas.height / 2);
                contexto.font = "100px Arial";
                contexto.fillText("Pulsa enter", canvas.width / 2, canvas.height / 2 + 150);
                contexto.strokeText("Pulsa enter", canvas.width / 2, canvas.height / 2 + 150);
            }
            ;
            puntuacionJ1 = 0;
            puntuacionJ2 = 0;
        };

    }
    ;


    //CAPTADORES DE EVENTOS
    window.addEventListener("click", pantallaCompleta, false);
    window.addEventListener("keydown", pantallaCompleta, false);
    window.addEventListener("keydown", controlesDown, false);
    window.addEventListener("keyup", controlesUp, false);

    //CREAR LA PARTIDA E INICIARLA
    var partida = new partida();
    var cuentaAtrasTO = setTimeout(cuentaAtras, 1000);
    partida.frame();
}
;
                                   