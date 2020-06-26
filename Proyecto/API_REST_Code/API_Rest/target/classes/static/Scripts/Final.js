/* global config, right, left, up, down, resultado, musicaJuego */

class Final extends Phaser.Scene {
    
    constructor() {
        super("Final");
    };
    
    create() {  
    	
    	//FILTRO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "Final-Filtro");
        this.fondo.setDepth(0);
        
        if (resultado[0] > resultado[1]) {
        	//RESULTADO
            this.resultado = this.add.image(config.scale.width / 2, config.scale.height / 2 - 180, "Final-Resultado-J1");
            this.resultado.setDepth(0);
            
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Gana  el  Jugador  1");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);
        } else if (resultado[0] < resultado[1]) {
        	//RESULTADO
            this.resultado = this.add.image(config.scale.width / 2, config.scale.height / 2 - 180, "Final-Resultado-J2");
            this.resultado.setDepth(0);
            
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Gana  el  Jugador  2");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);
        } else {
        	//RESULTADO
            this.resultado = this.add.image(config.scale.width / 2, config.scale.height / 2 - 180, "Final-Resultado-Empate");
            this.resultado.setDepth(0);
            
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Empate");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);  
        };
        
        //BOTON ABANDONAR SERVIDOR
        this.botonRegreso = this.add.image(config.scale.width / 2, config.scale.height / 2 + 200, "Final-Menu").setInteractive();
        this.botonRegreso.setDepth(10);
        this.botonRegreso.setScale(3, 3);
        this.botonRegreso.on("pointerdown", function(){ 
        	var usuario = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(usuario);
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
                			Jugador1BolaCogida: null,
                			Jugador2PosicionX: null,
                			Jugador2PosicionY: null
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
                			Jugador2BolaCogida: null,
                			Right: false,
                			Left: false,
                			Up: false,
                			Down: false
                	};
                };
            	connection.send(JSON.stringify(user)); 
        	};
        	deleteGame(idPartida);
        	right = [false, false];
        	left = [false, false];
        	up = [false, false];
        	down = [false, false];
        	tiempo = 30;
        	personajeJugador = [1, 1];
        	escenario = 0;
        	resultado = [0, 0];
        	connection = null;
        	idJugador = null;
        	nombreJugador = null;
        	idPartida = 0;
        	idJugadorPartida = 0;
        	idOtroJugador = null;
        	nombreOtroJugador = null;
        	otroJugadorPreparado = false;
        	primeroEnAbandonar = false;
        	
            that.scene.start("Menu-Principal");
            that.scene.stop("Juego");
            that.scene.stop("Final");
        });
        
        
        
        
        
        
        
        
        
        
        
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
        	var usuario = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(usuario);
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
                			Jugador1BolaCogida: null,
                			Jugador2PosicionX: null,
                			Jugador2PosicionY: null
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
                			Jugador2BolaCogida: null,
                			Right: false,
                			Left: false,
                			Up: false,
                			Down: false
                	};
                };
            	connection.send(JSON.stringify(user)); 
        	};
        	deleteGame(idPartida);
        	right = [false, false];
        	left = [false, false];
        	up = [false, false];
        	down = [false, false];
        	tiempo = 30;
        	personajeJugador = [1, 1];
        	escenario = 0;
        	resultado = [0, 0];
        	connection = null;
        	idJugador = null;
        	nombreJugador = null;
        	idPartida = 0;
        	idJugadorPartida = 0;
        	idOtroJugador = null;
        	nombreOtroJugador = null;
        	otroJugadorPreparado = false;
        	primeroEnAbandonar = false;
        	
            that.scene.start("Menu-Principal");
            that.scene.stop("Juego");
            that.scene.stop("Final");
        },this);
    };
};



