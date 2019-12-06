/* global config */

class MenuControles extends Phaser.Scene {
    
    constructor() {
        super("Menu-Controles");
    };
    
    create() {
        //INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;

        ////VARIABLES OBJETOS/IMAGENES////

        //FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuControles-Fondo");
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(event){
            this.scale.startFullscreen();
            this.scene.start("Menu-Principal"); 
        },this);
    };
};

