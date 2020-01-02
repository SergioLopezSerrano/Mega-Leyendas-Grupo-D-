/* global config, right, left, up, down, musicaJuego */

class Servidores extends Phaser.Scene {
    
    constructor() {
        super("Servidores");
    };
    
    create(){
    	that = this;
    	//FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuSeleccionEscenarios-Fondo");
        this.fondo.setDepth(0);
        
        //BOTONES
        this.botonUnirsePartida = this.add.sprite(config.scale.width / 2, config.scale.height / 2 + 100, "Servidores-BotonUnirse").setInteractive();
        this.botonUnirsePartida.setDepth(1);
        
        this.botonCrearPartida = this.add.sprite(config.scale.width / 2, config.scale.height / 2 - 100, "Servidores-BotonCrearServidor").setInteractive();
        this.botonCrearPartida.setDepth(1);
        
        //ONCLIC
        this.botonUnirsePartida.on("pointerdown", function(){
        	that.scene.start("Esperando-Jugador"); 
        });
        
        this.botonCrearPartida.on("pointerdown", function(){ 
        	that.scene.start("Esperando-Jugador"); 
        });
    }
}