/* global config, right, left, up, down, musicaJuego */

class EstablecerWebsocket extends Phaser.Scene {
    
    constructor() {
        super("Establecer-Websocket");
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
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "Servidores-Fondo");
        this.fondo.setDepth(0);
        
        //LLAMAR A CREAR WEBSOCKET
        this.time.addEvent({
            delay: 100,
            loop: false,
            callback: this.crearWebsocket
        });
    };           
    
    crearWebsocket() {
    	that.connection = new WebSocket("ws://127.0.0.1:8080/" + idPartida);
        that.connection.onopen = function () {
        	var user = {
        			idJugador: idJugador,
        			nombreJugador: nombreJugador,
        			idPartida: idPartida,
        			idJugadorPartida: idJugadorPartida,
        			nombreOtroJugador: nombreOtroJugador
        	};
        	that.connection.send(JSON.stringify(user));
        };
        that.connection.onerror = function(e) {
        	console.log("WS error: " + e);
        };
        that.connection.onmessage = function(e) {
        	console.log("WS message: " + e.data);
        };
    };
};