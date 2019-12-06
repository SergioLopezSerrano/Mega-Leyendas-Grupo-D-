/* global Phaser, config, down, up, left, right, personajeJugador */

class MenuSeleccionPersonajes extends Phaser.Scene {
    
    constructor() {
        super("Menu-Seleccion-Personajes");
    };
     
    create() {
        //INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;

        ////VARIABLES OBJETOS/IMAGENES////
        
        //FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuSeleccionPersonajes-Fondo");
        this.fondo.setDepth(0);
        
        //SELECTORES DE PERSONAJES
        this.personajeSimbolo = [];
        this.personajeSimbolo[0] = this.physics.add.staticImage(config.scale.width / 2, config.scale.height / 2 - 340, "MenuSeleccionPersonajes-Personaje-1-Simbolo");
        this.personajeSimbolo[0].setDepth(1);
        this.personajeSimbolo[1] = this.physics.add.staticImage(config.scale.width / 2, config.scale.height / 2 - 120, "MenuSeleccionPersonajes-Personaje-2-Simbolo");
        this.personajeSimbolo[1].setDepth(1);
        this.personajeSimbolo[2] = this.physics.add.staticImage(config.scale.width / 2 - 225, config.scale.height / 2 - 230, "MenuSeleccionPersonajes-Personaje-3-Simbolo");
        this.personajeSimbolo[2].setDepth(1);
        this.personajeSimbolo[3] = this.physics.add.staticImage(config.scale.width / 2 + 255, config.scale.height / 2 - 230, "MenuSeleccionPersonajes-Personaje-4-Simbolo");
        this.personajeSimbolo[3].setDepth(1);
        
        //MARCOS DE LOS PERSONAJES
        this.marco = [];
        this.marco[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Marco-Jugador-1");
        this.marco[0].setDepth(1);
        this.marco[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Marco-Jugador-2");
        this.marco[1].setDepth(1);
        
        //DIBUJOS PERSONAJES
        this.personaje = [];
        this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-1-Desactivado");
        this.personaje[0].setVisible(false);
        this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-2-Desactivado");
        this.personaje[1].setVisible(false);
        
        //PUNTEROS JUGADORES
        this.puntero = [];
        this.puntero[0] = this.physics.add.image(config.scale.width / 2 - 600, config.scale.height / 2 - 50, "MenuSeleccionPersonajes-Puntero-Jugador-1");
        this.puntero[0].setDepth(3);
        this.puntero[0].setMaxVelocity(400, 400);
        this.puntero[0].setBounce(0.9);
        this.puntero[1] = this.physics.add.image(config.scale.width / 2 + 600, config.scale.height / 2 - 50, "MenuSeleccionPersonajes-Puntero-Jugador-2");    
        this.puntero[1].setDepth(3);
        this.puntero[1].setMaxVelocity(400, 400);
        this.puntero[1].setBounce(0.9);
        
        //TEXTO
        this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 + 180, "Seleccionad Personaje");
        this.texto.setOrigin(0.5, 0.5);
        this.texto.setFont("Arial Black");
        this.texto.setFontSize("70px");
        this.texto.setFill("White");
        this.texto.setStroke("Purple", 5);
        
        //VARIABLE SELECCION DE PERSONAJES
        this.persJug = [];
        this.persJug[0] = 0;
        this.persJug[1] = 0;
        
        //ACTIVAR DETECTORES DE SOLAPAMIENTO (COLISIONES SIN FISICAS)
        this.colisionePersonajeJugador = [];
        this.colisionePersonajeJugador[0] = this.physics.add.overlap(this.personajeSimbolo[0], this.puntero[0], this.colisionPers1Jug1);
        this.colisionePersonajeJugador[1] = this.physics.add.overlap(this.personajeSimbolo[1], this.puntero[0], this.colisionPers2Jug1);
        this.colisionePersonajeJugador[2] = this.physics.add.overlap(this.personajeSimbolo[2], this.puntero[0], this.colisionPers3Jug1);
        this.colisionePersonajeJugador[3] = this.physics.add.overlap(this.personajeSimbolo[3], this.puntero[0], this.colisionPers4Jug1);
        this.colisionePersonajeJugador[4] = this.physics.add.overlap(this.personajeSimbolo[0], this.puntero[1], this.colisionPers1Jug2);
        this.colisionePersonajeJugador[5] = this.physics.add.overlap(this.personajeSimbolo[1], this.puntero[1], this.colisionPers2Jug2);
        this.colisionePersonajeJugador[6] = this.physics.add.overlap(this.personajeSimbolo[2], this.puntero[1], this.colisionPers3Jug2);
        this.colisionePersonajeJugador[7] = this.physics.add.overlap(this.personajeSimbolo[3], this.puntero[1], this.colisionPers4Jug2);  
        
        //ACTIVAR DETECTORES DE COLISIONES (CON FISICAS)
        this.puntero[0].setCollideWorldBounds(true);
        this.puntero[1].setCollideWorldBounds(true);
        this.jugadores = this.physics.add.collider(this.puntero[0], this.puntero[1]);
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO   
        this.J1Selecionado = false;
        this.espacioPulsado = false;
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            this.scale.startFullscreen();
            this.espacioPulsado = true;
        },this);
        
        this.J2Selecionado = false;
        this.ceroPulsado = false;
        this.input.keyboard.on("keydown-" + "NUMPAD_ZERO", function(event){
            this.scale.startFullscreen();
            this.ceroPulsado = true;
        },this);
        
        this.teclas1Enabled = true;
        this.teclas1 = [];
        this.teclas1[0] = this.input.keyboard.on("keydown-" + "D", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            right[0] = true;
        },this);
        this.teclas1[1] = this.input.keyboard.on("keydown-" + "A", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            left[0] = true;
        },this);
        this.teclas1[2] = this.input.keyboard.on("keydown-" + "W", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            up[0] = true;
        },this);
        this.teclas1[3] = this.input.keyboard.on("keydown-" + "S", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            down[0] = true;
        },this);
        this.teclas1[4] = this.input.keyboard.on("keyup-" + "D", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            right[0] = false;
        },this);
        this.teclas1[5] = this.input.keyboard.on("keyup-" + "A", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            left[0] = false;
        },this);
        this.teclas1[6] = this.input.keyboard.on("keyup-" + "W", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            up[0] = false;
        },this);
        this.teclas1[7] = this.input.keyboard.on("keyup-" + "S", function(event){
            this.scale.startFullscreen();
            if(this.teclas1Enabled)
            down[0] = false;
        },this);
        this.teclas2Enabled = true;
        this.teclas2 = [];
        this.teclas2[0] = this.input.keyboard.on("keydown-" + "RIGHT", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            right[1] = true;
        },this);
        this.teclas2[1] = this.input.keyboard.on("keydown-" + "LEFT", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            left[1] = true;
        },this);
        this.teclas2[2] = this.input.keyboard.on("keydown-" + "UP", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            up[1] = true;
        },this);
        this.teclas2[3] = this.input.keyboard.on("keydown-" + "DOWN", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            down[1] = true;
        },this);
        this.teclas2[4] = this.input.keyboard.on("keyup-" + "RIGHT", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            right[1] = false;
        },this);
        this.teclas2[5] = this.input.keyboard.on("keyup-" + "LEFT", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            left[1] = false;
        },this);
        this.teclas2[6] = this.input.keyboard.on("keyup-" + "UP", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            up[1] = false;
        },this);
        this.teclas2[7] = this.input.keyboard.on("keyup-" + "DOWN", function(event){
            this.scale.startFullscreen();
            if(this.teclas2Enabled)
            down[1] = false;
        },this);    
    };
    
    update() {
        this.aceleracion();
        this.personaje[0].destroy();
        this.personaje[1].destroy();
        for (var i = 0; i < 4; i++) {
            this.personajeSimbolo[i].setScale(1, 1);
        };
        if (this.espacioPulsado && this.persJug[0] !== 0) {
            if (this.J1Selecionado) {
                this.J1Selecionado = false;
            } else {
                this.J1Selecionado = true;
            };
        };
        this.espacioPulsado = false;
        if (this.J1Selecionado) {
            switch (this.persJug[0]) {
                case 1:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-1-Activado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[0].setScale(1.1, 1.1);
                    break;
                case 2:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-2-Activado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[1].setScale(1.1, 1.1);
                    break;
                case 3:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-3-Activado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[2].setScale(1.1, 1.1);
                    break;
                case 4:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-4-Activado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[3].setScale(1.1, 1.1);
                    break;
            };
            this.teclas1Enabled = false;
            right[0] = false;
            left[0] = false;
            up[0] = false;
            down[0] = false;
            this.puntero[0].setVelocity(0, 0);
            this.puntero[0].setImmovable(true);
        } else {
            this.teclas1Enabled = true;
            this.puntero[0].setImmovable(false);
            switch(this.persJug[0]) {
                case 1:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-1-Desactivado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[0].setScale(1.1, 1.1);
                    break;
                case 2:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-2-Desactivado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[1].setScale(1.1, 1.1);
                    break;
                case 3:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-3-Desactivado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[2].setScale(1.1, 1.1);
                    break;
                case 4:
                    this.personaje[0] = this.add.image(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-4-Desactivado");
                    this.personaje[0].setDepth(2);
                    this.personajeSimbolo[3].setScale(1.1, 1.1);
                    break;
            };
        };
        if (this.ceroPulsado && this.persJug[1] !== 0) {
            if (this.J2Selecionado) {
                this.J2Selecionado = false;
            } else {
                this.J2Selecionado = true;
            };
        };
        this.ceroPulsado = false;
        if (this.J2Selecionado) {
            switch(this.persJug[1]) {
                case 1:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-1-Activado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[0].setScale(1.1, 1.1);
                    break;
                case 2:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-2-Activado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[1].setScale(1.1, 1.1);
                    break;
                case 3:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-3-Activado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[2].setScale(1.1, 1.1);
                    break;
                case 4:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-4-Activado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[3].setScale(1.1, 1.1);
                    break;
            };
            this.teclas2Enabled = false;
            right[1] = false;
            left[1] = false;
            up[1] = false;
            down[1] = false;
            this.puntero[1].setVelocity(0, 0);
            this.puntero[1].setImmovable(true);
        } else {
            this.teclas2Enabled = true;
            this.puntero[1].setImmovable(false);
            switch(this.persJug[1]) {
                case 1:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-1-Desactivado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[0].setScale(1.1, 1.1);
                    break;
                case 2:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-2-Desactivado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[1].setScale(1.1, 1.1);
                    break;
                case 3:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-3-Desactivado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[2].setScale(1.1, 1.1);
                    break;
                case 4:
                    this.personaje[1] = this.add.image(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionPersonajes-Personaje-4-Desactivado");
                    this.personaje[1].setDepth(2);
                    this.personajeSimbolo[3].setScale(1.1, 1.1);
                    break;
            };
        };
        this.persJug[0] = 0;
        this.persJug[1] = 0; 
        
        if(this.J1Selecionado && this.J2Selecionado) {    
            this.time.addEvent({
                delay: 1000,
                callback: this.avanzarEscena
            });
        }; 
    };  
    
    //GESTIONAR COLISIONES
    colisionPers1Jug1() {
        personajeJugador[0] = 1;
        that.persJug[0] = 1;
    };
    colisionPers2Jug1() {
        personajeJugador[0] = 2;
        that.persJug[0] = 2;
    };
    colisionPers3Jug1() {
        personajeJugador[0] = 3;
        that.persJug[0] = 3;
    };
    colisionPers4Jug1() {
        personajeJugador[0] = 4;
        that.persJug[0] = 4;
    };
    colisionPers1Jug2() {
        personajeJugador[1] = 1;
        that.persJug[1] = 1;
    };
    colisionPers2Jug2() {
        personajeJugador[1] = 2;
        that.persJug[1] = 2;
    };
    colisionPers3Jug2() {
        personajeJugador[1] = 3;
        that.persJug[1] = 3;
    };
    colisionPers4Jug2() {
        personajeJugador[1] = 4;
        that.persJug[1] = 4;
    };
    
    //CALCULAR ACELERACIONES
    aceleracion() {
        for (var i = 0; i < 2; i++) {
            
            if(right[i]){
                that.puntero[i].setAccelerationX(1500);
            };
            if(left[i]){
                that.puntero[i].setAccelerationX(-1500);
            };
            if(up[i]){
                that.puntero[i].setAccelerationY(-1500);
            };
            if(down[i]){
                that.puntero[i].setAccelerationY(1500);
            };

            if(!right[i] && !left[i]) {
                that.puntero[i].setVelocityX(that.puntero[i].body.velocity.x - (that.puntero[i].body.velocity.x * 0.04));
                that.puntero[i].setAccelerationX(0);
            };
            if(!up[i] && !down[i]) {
                that.puntero[i].setVelocityY(that.puntero[i].body.velocity.y - (that.puntero[i].body.velocity.y * 0.04));
                that.puntero[i].setAccelerationY(0);
            };
        };      
    };
    
    avanzarEscena() {
        for (var i = 0; i < 2; i++) {
            right[i] = false;
            left[i] = false;
            up[i] = false;
            down[i] = false;
        };
        that.scene.start("Menu-Seleccion-Escenarios"); 
    };
};
