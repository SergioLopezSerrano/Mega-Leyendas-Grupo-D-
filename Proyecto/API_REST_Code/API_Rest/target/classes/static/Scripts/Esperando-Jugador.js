/* global config, right, left, up, down, musicaJuego */

class EsperandoJugador extends Phaser.Scene {
    
    constructor() {
        super("Esperando-Jugador");
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
            this.scale.startFullscreen();
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
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "Esperando-Jugador-Fondo");
        this.fondo.setDepth(0);
        
        //BOTON REGRESO
        this.botonRegreso = this.add.image(100, config.scale.height - 60, "MenuPrincipal-Boton-Abandonar-Partida").setInteractive();
        this.botonRegreso.setDepth(2);
        this.botonRegreso.on("pointerdown", function(){ 
        	if (nombreOtroJugador == null) {	
	        	var user = {
		        		id: idJugador,
		        		name: nombreJugador,
		        		connected: true,
		        		idGame: 0,
		        		idPlayer: 0
	    	    };
	            putUser(user);
	            deleteGame(idPartida);
	            idPartida = 0;
	        	idJugadorPartida = 0;
	        	idOtroJugador = null;
	        	nombreOtroJugador = null;
	        	that.scale.startFullscreen();
	            that.scene.start("Servidores"); 
        	};
        });
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
        	if (nombreOtroJugador == null) {	
	        	var user = {
		        		id: idJugador,
		        		name: nombreJugador,
		        		connected: true,
		        		idGame: 0,
		        		idPlayer: 0
	    	    };
	            putUser(user);
	            deleteGame(idPartida);
	            idPartida = 0;
	        	idJugadorPartida = 0;
	        	idOtroJugador = null;
	        	nombreOtroJugador = null;
	        	that.scale.startFullscreen();
	            that.scene.start("Servidores"); 
        	}; 
        },this);
        
       //TEXTO 
        this.partida = this.add.text(config.scale.width / 2, config.scale.height / 2 - 400, "Partida   " + idPartida);
        this.partida.setOrigin(0.5, 0.5);
        this.partida.setFont("Arial Black");
        this.partida.setFontSize("80px");
        this.partida.setFill("White");
        this.partida.setStroke("Purple", 5);  
        
        this.jugador1 = this.add.text(config.scale.width / 2 - 500, config.scale.height / 2, "Jugador 1");
        this.jugador1.setOrigin(0.5, 0.5);
        this.jugador1.setFont("Arial Black");
        this.jugador1.setFontSize("70px");
        this.jugador1.setFill("White");
        this.jugador1.setStroke("Purple", 5);
                       
        this.jugador2 = this.add.text(config.scale.width / 2 + 500, config.scale.height / 2, "Jugador 2");
        this.jugador2.setOrigin(0.5, 0.5);
        this.jugador2.setFont("Arial Black");
        this.jugador2.setFontSize("70px");
        this.jugador2.setFill("White");
        this.jugador2.setStroke("Purple", 5);
        
        this.nombreJugador1 = this.add.text(config.scale.width / 2 - 500, config.scale.height / 2 + 80, nombreJugador);
        this.nombreJugador1.setOrigin(0.5, 0.5);
        this.nombreJugador1.setFont("Arial Black");
        this.nombreJugador1.setFontSize("40px");
        this.nombreJugador1.setFill("White");
        this.nombreJugador1.setStroke("Purple", 5);
        
        this.nombreJugador2 = this.add.text(config.scale.width / 2 + 500, config.scale.height / 2 + 80, "Esperando Jugador...");
        this.nombreJugador2.setOrigin(0.5, 0.5);
        this.nombreJugador2.setFont("Arial Black");
        this.nombreJugador2.setFontSize("40px");
        this.nombreJugador2.setFill("White");
        this.nombreJugador2.setStroke("Purple", 5);    
        
        //ACTUALIZAR OTRO JUGADOR
        this.time.addEvent({
            delay: 100,
            loop: true,
            callback: updateOtherPlayer
        }); 
    };
    
    update() {
    	if (idOtroJugador != null) {
    		getOtherUserInGame(idOtroJugador);
    	};
    	
    	this.partida.text = "Partida   " + idPartida;
    	if (nombreOtroJugador != null) {
    		this.nombreJugador2.text = nombreOtroJugador;
    		this.time.addEvent({
                delay: 3000,
                loop: false,
                callback: that.avanzarEscena
            }); 
    	};
    };
    
    avanzarEscena() {
    	that.scene.start("Menu-Seleccion-Personajes-1"); 
    };
};