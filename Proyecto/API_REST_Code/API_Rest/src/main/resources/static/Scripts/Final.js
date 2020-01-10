/* global config, right, left, up, down, resultado, musicaJuego */

class Final extends Phaser.Scene {
    
    constructor() {
        super("Final");
    };
    
    create() {  
        this.menu = this.physics.add.image(config.scale.width / 2, config.scale.height / 2, "Final-Volver-A-Jugar");
        
        if (resultado[0] > resultado[1]) {
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Gana  el  Jugador  1");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);
        } else if (resultado[0] < resultado[1]) {
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Gana  el  Jugador  2");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);
        } else {
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Empate");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);  
        };
        
        //BOTON ABANDONAR SERVIDOR
        this.botonRegreso = this.add.image(config.scale.width / 2, config.scale.height / 2 + 200, "MenuPrincipal-Boton-Abandonar-Partida").setInteractive();
        this.botonRegreso.setDepth(10);
        this.botonRegreso.setScale(3, 3);
        this.botonRegreso.on("pointerdown", function(){ 
        	var user = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(user);
            idPartida = 0;
        	idOtroJugador = null;
        	nombreOtroJugador = null;
        	otroJugadorPreparado = false;
        	if (connection != null) {
            	connection.onopen = function () {
            	};
            	connection.onerror = function() {
                };
            	connection.onmessage = function() {
                };
                if (idJugadorPartida == 1) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			finalJuego: false,
                			personaje: null,
                			escenario : null,
                			tiempo: null,
                			marcador1: null,
                			marcador2: null,
                			posicionX: null,
                			posicionY: null,
                			velocidadX: null,
                			velocidadY: null,
                			aceleracionX: null,
                			aceleracionY: null,
                			posicionPelotaX: null,
                			posicionPelotaY: null,
                			velocidadPelotaX: null,
                			velocidadPelotaY: null,
                			aceleracionPelotaX: null,
                			aceleracionPelotaY: null,
                			Jugador1BolaTocando: null,
                			Jugador1BolaCogida: null	
                	};
                };
                if (idJugadorPartida == 2) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			personaje: null,
                			posicionX: null,
                			posicionY: null,
                			velocidadX: null,
                			velocidadY: null,
                			aceleracionX: null,
                			aceleracionY: null,
                			posicionPelotaX: null,
                			posicionPelotaY: null,
                			velocidadPelotaX: null,
                			velocidadPelotaY: null,
                			aceleracionPelotaX: null,
                			aceleracionPelotaY: null,
                			Jugador2BolaTocando: null,
                			Jugador2BolaCogida: null	
                	};
                };
            	connection.send(JSON.stringify(user)); 
        	};
        	connection = null;
        	idJugadorPartida = 0;
        	that.scale.startFullscreen();
        	for (var i = 0; i < 2; i++) {
                right[i] = false;
                left[i] = false;
                up[i] = false;
                down[i] = false;
            };
            tiempo = 0;
            personajeJugador = [0, 0];
            escenario = 0;
            resultado = [0, 0];
            that.scene.start("Menu-Principal");
            that.scene.stop("Juego");
            that.scene.stop("Final");
        });
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
        	var user = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(user);
            idPartida = 0;
        	idOtroJugador = null;
        	nombreOtroJugador = null;
        	otroJugadorPreparado = false;
        	if (connection != null) {
            	connection.onopen = function () {
            	};
            	connection.onerror = function() {
                };
            	connection.onmessage = function() {
                };
                if (idJugadorPartida == 1) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			finalJuego: false,
                			personaje: null,
                			escenario : null,
                			tiempo: null,
                			marcador1: null,
                			marcador2: null,
                			posicionX: null,
                			posicionY: null,
                			velocidadX: null,
                			velocidadY: null,
                			aceleracionX: null,
                			aceleracionY: null,
                			posicionPelotaX: null,
                			posicionPelotaY: null,
                			velocidadPelotaX: null,
                			velocidadPelotaY: null,
                			aceleracionPelotaX: null,
                			aceleracionPelotaY: null,
                			Jugador1BolaTocando: null,
                			Jugador1BolaCogida: null	
                	};
                };
                if (idJugadorPartida == 2) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			personaje: null,
                			posicionX: null,
                			posicionY: null,
                			velocidadX: null,
                			velocidadY: null,
                			aceleracionX: null,
                			aceleracionY: null,
                			posicionPelotaX: null,
                			posicionPelotaY: null,
                			velocidadPelotaX: null,
                			velocidadPelotaY: null,
                			aceleracionPelotaX: null,
                			aceleracionPelotaY: null,
                			Jugador2BolaTocando: null,
                			Jugador2BolaCogida: null	
                	};
                };
            	connection.send(JSON.stringify(user)); 
        	};
        	connection = null;
        	idJugadorPartida = 0;
        	that.scale.startFullscreen();
            for (var i = 0; i < 2; i++) {
                right[i] = false;
                left[i] = false;
                up[i] = false;
                down[i] = false;
            };
            tiempo = 0;
            personajeJugador = [0, 0];
            escenario = 0;
            resultado = [0, 0];
            that.scene.start("Menu-Principal");
            that.scene.stop("Juego");
            that.scene.stop("Final");
        },this);
    };
};



