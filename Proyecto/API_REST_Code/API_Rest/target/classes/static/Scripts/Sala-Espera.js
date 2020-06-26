/* global config, right, left, up, down, musicaJuego */

class SalaEspera extends Phaser.Scene {
    
    constructor() {
        super("Sala-Espera");
    };
    
    create() {
    	//INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;
        
        //USUARIOS CONECTADOS
        this.usuariosConectados = this.add.text(5, -15, "");
        this.usuariosConectados.setOrigin(0.5, 0.5);
        this.usuariosConectados.setFont("Arial Black");
        this.usuariosConectados.setFontSize("15px");
        this.usuariosConectados.setFill("White");
        this.usuariosConectados.setOrigin(0, 0);
        this.usuariosConectados.setDepth(10);
        this.usuariosConectados.visible = usuariosVisibles;
        
        this.numeroUsuariosConectados = this.add.text(10, 10, "");
        this.numeroUsuariosConectados.setOrigin(0.5, 0.5);
        this.numeroUsuariosConectados.setFont("Arial Black");
        this.numeroUsuariosConectados.setFontSize("15px");
        this.numeroUsuariosConectados.setFill("White");
        this.numeroUsuariosConectados.setOrigin(0, 0);
        this.numeroUsuariosConectados.setDepth(10);
        this.numeroUsuariosConectados.visible = !usuariosVisibles;
        
        //ACTUALIZAR LOS USUARIOS
        this.time.addEvent({
            delay: 100,
            loop: true,
            callback: getUsers
        });
        
        //MOSTRAR USUARIOS
        this.input.keyboard.on("keydown-" + "U", function(){
            if (this.usuariosConectados.visible) {
            	usuariosVisibles = false;
            	this.usuariosConectados.visible = false;
            	this.numeroUsuariosConectados.visible = true;
            } else {
            	usuariosVisibles = true;
            	this.usuariosConectados.visible = true;
            	this.numeroUsuariosConectados.visible = false;
            };
        },this);

    	//FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "Servidores-Fondo");
        this.fondo.setDepth(0);
        
        //BOTON ABANDONAR SERVIDOR
        this.botonRegreso = this.add.image(100, config.scale.height - 60, "MenuPrincipal-Boton-Abandonar-Partida").setInteractive();
        this.botonRegreso.setDepth(2);
        this.botonRegreso.on("pointerdown", function(){ 
        	primeroEnAbandonar = true;
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
        	connection = null;
        	idJugadorPartida = 0;
            that.scene.start("Menu-Principal"); 
        });
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
        	primeroEnAbandonar = true;
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
        	connection = null;
        	idJugadorPartida = 0;
            that.scene.start("Menu-Principal"); 
        },this);
        
        //TEXTO
        this.textoEspera = this.add.text(config.scale.width / 2, config.scale.height / 2, "");
        this.textoEspera.setOrigin(0.5, 0.5);
        this.textoEspera.setFont("Arial Black");
        this.textoEspera.setFontSize("50px");
        this.textoEspera.setFill("White");
        this.textoEspera.setStroke("Purple", 5); 
        
        if (idJugadorPartida == 1 && !otroJugadorPreparado) {
        	that.textoEspera.text = "Esperando al jugador 2";
        };
        if (idJugadorPartida == 2 && !otroJugadorPreparado) {
        	that.textoEspera.text = "Esperando al jugador 1";
        };
        
        this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: function (){
            	
            	that.time.addEvent({
                    delay: 100,
                    loop: false,
                    callback: that.crearWebsocket
                });
            	
            }
        });  
        
    }; 
    
    update() {
    	if (idOtroJugador != null) {
    		getOtherUserInGameWS(idOtroJugador);
    	};	
    	
    	if (otroJugadorPreparado) {
    		if (idJugadorPartida == 1) {
    			that.scene.start("Juego-1"); 
    		};
    		if (idJugadorPartida == 2) {
    			that.scene.start("Juego-2"); 
    		};
    	};
    };
    
    crearWebsocket() {
    	connection = new WebSocket("ws://" + window.location.host + "/" + idPartida);

    	if (idJugadorPartida == 1) {
    		
    		connection.onopen = function () {
            	
        	var user = {
        			idJugadorPartida: idJugadorPartida,
        			primerContacto: true,
        			preparado: true,
        			finalJuego: false,
        			personaje: personajeJugador[0],
        			escenario : escenario,
        			tiempo: tiempo,
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
        	
        	connection.send(JSON.stringify(user));
            };
            connection.onerror = function(e) {
            	console.log("WS error: " + e);
            };
            connection.onmessage = function(e) {
            	console.log("WS message: " + JSON.parse(e.data));
            	otroJugadorPreparado = JSON.parse(JSON.parse(e.data).preparado);
            	personajeJugador[1] = parseInt(JSON.parse(e.data).personaje);
            };
    	};
    	if (idJugadorPartida == 2) {
    		connection.onopen = function () {
            	
        	var user = {
        			idJugadorPartida: idJugadorPartida,
        			primerContacto: true,
        			preparado: true,
        			personaje: personajeJugador[1],
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
        	
        	connection.send(JSON.stringify(user));
            };
            connection.onerror = function(e) {
            	console.log("WS error: " + e);
            };
            connection.onmessage = function(e) {
            	console.log("WS message: " + JSON.parse(e.data));
            	otroJugadorPreparado = JSON.parse(JSON.parse(e.data).preparado);
            	escenario = parseInt(JSON.parse(e.data).escenario);
            	personajeJugador[0] = parseInt(JSON.parse(e.data).personaje);
            };	
    	}; 
    	that.time.addEvent({
            delay: 100,
            loop: true,
            callback: that.enviarWebsocket
        });
    };
    
    enviarWebsocket() {
    	
    	if (idJugadorPartida == 1) { 	
        	var user = {
        			idJugadorPartida: idJugadorPartida,
        			primerContacto: true,
        			preparado: true,
        			finalJuego: false,
        			personaje: personajeJugador[0],
        			escenario: escenario,
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
        	
        	connection.send(JSON.stringify(user));
    	};
    	if (idJugadorPartida == 2) {
        	var user = {
        			idJugadorPartida: idJugadorPartida,
        			primerContacto: true,
        			preparado: true,
        			personaje: personajeJugador[1],
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
        	
        	connection.send(JSON.stringify(user));
        };
    };
};