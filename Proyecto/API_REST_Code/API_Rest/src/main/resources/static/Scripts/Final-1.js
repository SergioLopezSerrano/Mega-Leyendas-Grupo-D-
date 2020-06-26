/* global config, right, left, up, down, resultado, musicaJuego */

class Final extends Phaser.Scene {
    
    constructor() {
        super("Final");
    };
    
    create() {  
        this.menu = this.physics.add.image(config.scale.width / 2, config.scale.height / 2, "Final-Volver-A-Jugar");
        this.seleccion = "volverAJugar";
        
        if (resultado[0] > resultado[1]) {
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Gana  el  Jugador  1");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);
        } else if (resultado[0] < resultado[1]) {
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Gana  el  Jugador  2");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);
        } else {
            this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 - 180, "Empate");
            this.texto.setOrigin(0.5, 0.5);
            this.texto.setFont("Arial Black");
            this.texto.setFontSize("140px");
            this.texto.setFill("White");
            this.texto.setStroke("Purple", 5);  
        };
        
        this.input.keyboard.on("keydown-" + "W", function(event){
            if (this.seleccion === "volverAJugar") {
                this.seleccion = "menu";
                this.menu.setTexture("Final-Menu");
            } else {
                this.seleccion = "volverAJugar";
                this.menu.setTexture("Final-Volver-A-Jugar");
            };
        },this);
        this.input.keyboard.on("keydown-" + "S", function(event){
            if (this.seleccion === "volverAJugar") {
                this.seleccion = "menu";
                this.menu.setTexture("Final-Menu");
            } else {
                this.seleccion = "volverAJugar";
                this.menu.setTexture("Final-Volver-A-Jugar");
            };
        },this);
        this.input.keyboard.on("keydown-" + "UP", function(event){
            if (this.seleccion === "volverAJugar") {
                this.seleccion = "menu";
                this.menu.setTexture("Final-Menu");
            } else {
                this.seleccion = "volverAJugar";
                this.menu.setTexture("Final-Volver-A-Jugar");
            };
        },this);
        this.input.keyboard.on("keydown-" + "DOWN", function(event){
            if (this.seleccion === "volverAJugar") {
                this.seleccion = "menu";
                this.menu.setTexture("Final-Menu");
            } else {
                this.seleccion = "volverAJugar";
                this.menu.setTexture("Final-Volver-A-Jugar");
            };
        },this);
        
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            if (this.seleccion === "volverAJugar") {
                for (var i = 0; i < 2; i++) {
                    right[i] = false;
                    left[i] = false;
                    up[i] = false;
                    down[i] = false;
                };
                resultado = [0, 0];
                musicaJuego.stop();
                this.scene.stop("Juego");
                this.scene.start("Juego");
                this.scene.stop("Final");
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
                this.scene.stop("Final");
            };
        },this);
        this.input.keyboard.on("keydown-" + "NUMPAD_ZERO", function(event){
            if (this.seleccion === "volverAJugar") {
                for (var i = 0; i < 2; i++) {
                    right[i] = false;
                    left[i] = false;
                    up[i] = false;
                    down[i] = false;
                };
                resultado = [0, 0];
                musicaJuego.stop();
                this.scene.stop("Juego");
                this.scene.start("Juego");
                this.scene.stop("Final");
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
                this.scene.stop("Final");
            };
        },this);
    };
    
    update() {
    	if (idOtroJugador != null) {
    		getOtherUserInGameWS(idOtroJugador);
    	};	
    };
};



