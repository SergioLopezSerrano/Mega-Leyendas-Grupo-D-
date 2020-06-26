/* global config */

class MenuCarga extends Phaser.Scene {
    
    constructor() {
        super("Menu-Carga");
    };
    
    preload() {
    	this.load.image("MenuCarga-Fondo", "Sources/Menu-Carga/Fondo.png"); 
    };
    
    create() {
        //INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;
        
        ////VARIABLES OBJETOS/IMAGENES////

        //FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuCarga-Fondo");  
        this.scene.launch("Menu-Inicio"); 
    };
};