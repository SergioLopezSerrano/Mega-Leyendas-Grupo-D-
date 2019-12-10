/* global config, right, left, up, down, musicaJuego */

class Pausa extends Phaser.Scene {
    
    constructor() {
        super("Pausa");
    };
    
    create() {  
        this.menu = this.physics.add.image(config.scale.width / 2, config.scale.height / 2, "Pausa-Reanudar");
        this.seleccion = "reanudar";
        
        this.input.keyboard.on("keydown-" + "W", function(event){
            this.scale.startFullscreen();
            if (this.seleccion === "reanudar") {
                this.seleccion = "menu";
                this.menu.setTexture("Pausa-Menu");
            } else {
                this.seleccion = "reanudar";
                this.menu.setTexture("Pausa-Reanudar");
            };
        },this);
        this.input.keyboard.on("keydown-" + "S", function(event){
            this.scale.startFullscreen();
            if (this.seleccion === "reanudar") {
                this.seleccion = "menu";
                this.menu.setTexture("Pausa-Menu");
            } else {
                this.seleccion = "reanudar";
                this.menu.setTexture("Pausa-Reanudar");
            };
        },this);
        this.input.keyboard.on("keydown-" + "UP", function(event){
            this.scale.startFullscreen();
            if (this.seleccion === "reanudar") {
                this.seleccion = "menu";
                this.menu.setTexture("Pausa-Menu");
            } else {
                this.seleccion = "reanudar";
                this.menu.setTexture("Pausa-Reanudar");
            };
        },this);
        this.input.keyboard.on("keydown-" + "DOWN", function(event){
            this.scale.startFullscreen();
            if (this.seleccion === "reanudar") {
                this.seleccion = "menu";
                this.menu.setTexture("Pausa-Menu");
            } else {
                this.seleccion = "reanudar";
                this.menu.setTexture("Pausa-Reanudar");
            };
        },this);
        
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            this.scale.startFullscreen();
            if (this.seleccion === "reanudar") {
                for (var i = 0; i < 2; i++) {
                    right[i] = false;
                    left[i] = false;
                    up[i] = false;
                    down[i] = false;
                };
                musicaJuego.resume();
                this.scene.resume("Juego");
                this.scene.stop("Pausa");
            } else {
                for (var i = 0; i < 2; i++) {
                    right[i] = false;
                    left[i] = false;
                    up[i] = false;
                    down[i] = false;
                };
                tiempo = 0;
                personajeJugador = [0, 0];
                escenario = 0;
                resultado = [0, 0];
                this.scene.start("Menu-Principal");
                this.scene.stop("Juego");
                this.scene.stop("Pausa");
            };
        },this);
        this.input.keyboard.on("keydown-" + "NUMPAD_ZERO", function(event){
            this.scale.startFullscreen();
            if (this.seleccion === "reanudar") {
                for (var i = 0; i < 2; i++) {
                    right[i] = false;
                    left[i] = false;
                    up[i] = false;
                    down[i] = false;
                };
                musicaJuego.resume();
                this.scene.resume("Juego");
                this.scene.stop("Pausa");
            } else {
                for (var i = 0; i < 2; i++) {
                    right[i] = false;
                    left[i] = false;
                    up[i] = false;
                    down[i] = false;
                };
                tiempo = 0;
                personajeJugador = [0, 0];
                escenario = 0;
                resultado = [0, 0];
                this.scene.start("Menu-Principal");
                this.scene.stop("Juego");
                this.scene.stop("Pausa");
            };
        },this);
    };
};


