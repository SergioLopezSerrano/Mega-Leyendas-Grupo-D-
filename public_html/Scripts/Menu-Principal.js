/* global config, musicaIntro, musicaJuego, musicaMenu */

class MenuPrincipal extends Phaser.Scene {
    
    constructor() {
        super("Menu-Principal");
    };
    
    create() {
        //INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;
        
        //MUSICA
        musicaIntro.stop();
        musicaJuego.stop();
        if (!musicaMenu.isPlaying) {
            musicaMenu.play();
        };

        ////VARIABLES OBJETOS/IMAGENES////
        
        //SELECTOR
        this.seleccion = 0;

        //SELECION
        this.selector = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuPrincipal-Jugar");
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "W", function(event){
            this.scale.startFullscreen();
            this.seleccion--;
            if (this.seleccion < 0) {
                this.seleccion = 3;
            };
        },this);
        this.input.keyboard.on("keydown-" + "S", function(event){
            this.scale.startFullscreen();
            this.seleccion++;
            if (this.seleccion > 3) {
                this.seleccion = 0;
            };
        },this);
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            switch(this.seleccion) {
                case 0:
                    this.scale.startFullscreen();
                    this.scene.start("Menu-Seleccion-Personajes"); 
                    break;
                case 1:
                    this.scale.startFullscreen();
                    this.scene.start("Menu-Controles"); 
                    break;
                case 2:
                    this.scale.startFullscreen();
                    this.scene.start("Menu-Creditos"); 
                    break;
                case 3:
                    this.scale.startFullscreen();
                    window.close();
                    break;
            };
        },this); 
    };
    
    update() {
        switch (this.seleccion) {
            case 0:
                this.selector.destroy();
                this.selector = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuPrincipal-Jugar");
                break;
            case 1:
                this.selector.destroy();
                this.selector = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuPrincipal-Controles");
                break;
            case 2:
                this.selector.destroy();
                this.selector = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuPrincipal-Creditos");
                break;
            case 3:
                this.selector.destroy();
                this.selector = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuPrincipal-Salir");
                break;
        }; 
    };
};


