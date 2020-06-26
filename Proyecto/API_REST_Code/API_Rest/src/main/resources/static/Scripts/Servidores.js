/* global config, right, left, up, down, musicaJuego */

class Servidores extends Phaser.Scene {
    
    constructor() {
        super("Servidores");
    };
    
    create() {
    	//INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;
        
        primeroEnAbandonar = false;
        
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
        
        //BOTON REGRESO
        this.botonRegreso = this.add.image(100, config.scale.height - 60, "MenuPrincipal-Boton-Regreso").setInteractive();
        this.botonRegreso.setDepth(2);
        this.botonRegreso.on("pointerdown", function(){ 
            that.scene.start("Menu-Principal"); 
        });
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
            that.scene.start("Menu-Principal"); 
        },this);
        
        //TEXTO
        this.maximoPartidas = this.add.text(config.scale.width / 2, config.scale.height / 2 - 300, "Máximo de partidas alcanzado, inténtalo más tarde");
        this.maximoPartidas.setOrigin(0.5, 0.5);
        this.maximoPartidas.setFont("Arial Black");
        this.maximoPartidas.setFontSize("50px");
        this.maximoPartidas.setFill("White");
        this.maximoPartidas.setStroke("Purple", 5); 
        this.maximoPartidas.visible = false;
        
        //BOTONES
        this.botonCrearPartida = this.add.sprite(config.scale.width / 2, config.scale.height / 2 - 180, "Servidores-BotonCrearServidor").setInteractive();
        this.botonCrearPartida.setDepth(1);
        
        this.botonUnirsePartida = this.add.sprite(config.scale.width / 2, config.scale.height / 2 + 180, "Servidores-BotonUnirse").setInteractive();
        this.botonUnirsePartida.setDepth(1); 
        
        //FUNCIONES DE BOTONES
        this.botonCrearPartida.on("pointerdown", function(){ 
        	getNumberGames();
        });
        this.botonUnirsePartida.on("pointerdown", function(){
        	that.scene.start("Unirse-Partida"); 
        });
    };
    
    apagarMaximoPartidas() {
    	that.maximoPartidas.visible = false;
    };
};