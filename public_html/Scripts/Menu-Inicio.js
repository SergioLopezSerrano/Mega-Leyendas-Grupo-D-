/* global config */

class MenuInicio extends Phaser.Scene {
    
    constructor() {
        super("Menu-Inicio");
    };
    
    create() {
        //INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;
        
        //MUSICA
        musicaIntro = this.sound.add("Intro");
        musicaMenu = this.sound.add("Menu");
        musicaJuego = this.sound.add("Juego-Mapa-1");
        musicaIntro.play();

        ////VARIABLES OBJETOS/IMAGENES////

        //FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuInicio-Fondo");
        this.fondo.setDepth(0);
        
        //TEXTO
        this.texto = this.add.text(config.scale.width / 2, config.scale.height - 175, "Pulsa espacio para empezar");
        this.texto.setOrigin(0.5, 0.5);
        this.texto.setFont("Arial Black");
        this.texto.setFontSize("60px");
        this.texto.setFill("White");
        this.texto.setStroke("Purple", 5);
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            this.scale.startFullscreen();
            this.scene.start("Menu-Principal"); 
        },this);
        
        //ACTIVAR PARPADEO
        this.time.addEvent({
            delay: 500,
            callback: this.parpadeoOf
        }); 
    };
    
    parpadeoOn() {
        that.texto.setVisible(true);
        that.time.addEvent({
            delay: 500,
            callback: that.parpadeoOf
        }); 
    };
    
    parpadeoOf() {
        that.texto.setVisible(false);
        that.time.addEvent({
            delay: 500,
            callback: that.parpadeoOn
        }); 
    };
};

