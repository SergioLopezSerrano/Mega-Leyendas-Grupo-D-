/* global config, right, left, up, down */

class MenuSeleccionEscenarios extends Phaser.Scene {
    
    constructor() {
        super("Menu-Seleccion-Escenarios");
    };
    
    create() {
        //INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;

        ////VARIABLES OBJETOS/IMAGENES////

        //FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuSeleccionEscenarios-Fondo");
        this.fondo.setDepth(0);
        
        //SELECTORES DE ESCENARIOS     
        this.mapasSimbolo = [];
        this.mapasSimbolo[0] = this.physics.add.staticImage(config.scale.width / 2 - 600, config.scale.height / 2 + 200, "MenuSeleccionEscenarios-Mapa-1");
        this.mapasSimbolo[0].setDepth(1);
        this.mapasSimbolo[1] = this.physics.add.staticImage(config.scale.width / 2 - 300, config.scale.height / 2 + 300, "MenuSeleccionEscenarios-Mapa-2");
        this.mapasSimbolo[1].setDepth(1);
        this.mapasSimbolo[2] = this.physics.add.staticImage(config.scale.width / 2 + 300, config.scale.height / 2 + 300, "MenuSeleccionEscenarios-Mapa-3");
        this.mapasSimbolo[2].setDepth(1);
        this.mapasSimbolo[3] = this.physics.add.staticImage(config.scale.width / 2 + 600, config.scale.height / 2 + 200, "MenuSeleccionEscenarios-Mapa-4");
        this.mapasSimbolo[3].setDepth(1);
        this.mapasSimbolo[4] = this.physics.add.staticImage(config.scale.width / 2, config.scale.height / 2 + 200, "MenuSeleccionEscenarios-Mapa-Random");
        this.mapasSimbolo[4].setDepth(1);
        
        //MINIATURA DE ESCENARIO
        this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-1-Miniatura");
        this.mapa.setDepth(1);
        this.mapa.setVisible(false);
        
        //CAMBIAR TIEMPO    
        this.cambiarTiempo = this.physics.add.staticImage(config.scale.width / 2, config.scale.height / 2 - 300, "MenuSeleccionEscenarios-Cambiar-Tiempo");
        this.cambiarTiempo.setDepth(1);
        
        //PUNTERO JUGADOR
        this.puntero = this.physics.add.image(config.scale.width / 2, config.scale.height / 2, "MenuSeleccionEscenarios-Puntero-Jugador");
        this.puntero.setDepth(3);
        this.puntero.setMaxVelocity(400, 400);
        this.puntero.setBounce(0.9);
        
        //TEXTO TIEMPO
        this.textoTiempo = this.add.text(config.scale.width / 2, config.scale.height / 2 - 420, "60");
        this.textoTiempo.setOrigin(0.5, 0.5);
        this.textoTiempo.setFont("Arial Black");
        this.textoTiempo.setFontSize("70px");
        this.textoTiempo.setFill("White");
        this.textoTiempo.setStroke("Purple", 5);
        
        //TEXTO
        this.texto = this.add.text(config.scale.width / 2, config.scale.height / 2 + 450, "Jugador 1 selecciona un mapa");
        this.texto.setOrigin(0.5, 0.5);
        this.texto.setFont("Arial Black");
        this.texto.setFontSize("70px");
        this.texto.setFill("White");
        this.texto.setStroke("Purple", 5);
        
        //VARIABLE SELECCION DE ESCENARIO
        this.esce = 0;
        
        //VARIABLE SELECCION DE TIEMPO
        this.tiempTocando = false;
        this.tiemp = 0;
        
        //ACTIVAR DETECTORES DE SOLAPAMIENTO (COLISIONES SIN FISICAS)
        this.colisioneJugador = [];
        this.colisioneJugador[0] = this.physics.add.overlap(this.mapasSimbolo[0], this.puntero, this.colisionMapa1Jug);
        this.colisioneJugador[1] = this.physics.add.overlap(this.mapasSimbolo[1], this.puntero, this.colisionMapa2Jug);
        this.colisioneJugador[2] = this.physics.add.overlap(this.mapasSimbolo[2], this.puntero, this.colisionMapa3Jug);
        this.colisioneJugador[3] = this.physics.add.overlap(this.mapasSimbolo[3], this.puntero, this.colisionMapa4Jug);
        this.colisioneJugador[4] = this.physics.add.overlap(this.mapasSimbolo[4], this.puntero, this.colisionMapaRandomJug);
        this.colisioneJugador[5] = this.physics.add.overlap(this.cambiarTiempo, this.puntero, this.colisionCambiarTiempoJug);
        
        //ACTIVAR DETECTORES DE COLISIONES (CON FISICAS)
        this.puntero.setCollideWorldBounds(true);
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.mapaSelecionado = false;
        this.espacioPulsado = false;
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            this.espacioPulsado = true;
        },this);
        
        this.teclasEnabled = true;
        this.teclas = [];
        this.teclas[0] = this.input.keyboard.on("keydown-" + "D", function(event){
            if(this.teclasEnabled)
            right[0] = true;
        },this);
        this.teclas[1] = this.input.keyboard.on("keydown-" + "A", function(event){
            if(this.teclasEnabled)
            left[0] = true;
        },this);
        this.teclas[2] = this.input.keyboard.on("keydown-" + "W", function(event){
            if(this.teclasEnabled)
            up[0] = true;
        },this);
        this.teclas[3] = this.input.keyboard.on("keydown-" + "S", function(event){
            if(this.teclasEnabled)
            down[0] = true;
        },this);
        this.teclas[4] = this.input.keyboard.on("keyup-" + "D", function(event){
            if(this.teclasEnabled)
            right[0] = false;
        },this);
        this.teclas[5] = this.input.keyboard.on("keyup-" + "A", function(event){
            if(this.teclasEnabled)
            left[0] = false;
        },this);
        this.teclas[6] = this.input.keyboard.on("keyup-" + "W", function(event){
            if(this.teclasEnabled)
            up[0] = false;
        },this);
        this.teclas[7] = this.input.keyboard.on("keyup-" + "S", function(event){
            if(this.teclasEnabled)
            down[0] = false;
        },this);
    };
    
    update() {
        this.aceleracion();
        this.mapa.destroy();
        for (var i = 0; i < 5; i++) {
            this.mapasSimbolo[i].setScale(1, 1);
        };
        if (this.espacioPulsado && this.esce !== 0) {
            if (this.mapaSelecionado) {
                this.mapaSelecionado = false;
            } else {
                this.mapaSelecionado = true;
            };
        };
        if (this.espacioPulsado && this.tiempTocando) {
            switch (this.tiemp) {
                case 60:
                    tiempo = 90;
                    this.tiemp = 90;
                    break;
                case 90:
                    tiempo = 0;
                    this.tiemp = 0;
                    break;
                case 0:
                    tiempo = 60;
                    this.tiemp = 60;
                    break;
            };
        };
        this.espacioPulsado = false;
        if (this.mapaSelecionado) {
            switch (this.esce) {
                case 1:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-1-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[0].setScale(1.1, 1.1);
                    break;
                case 2:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-2-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[1].setScale(1.1, 1.1);
                    break;
                case 3:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-3-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[2].setScale(1.1, 1.1);
                    break;
                case 4:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-4-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[3].setScale(1.1, 1.1);
                    break;
                case 5:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-Random-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[4].setScale(1.1, 1.1);
                    break;
            };
            this.teclasEnabled = false;
            right[0] = false;
            left[0] = false;
            up[0] = false;
            down[0] = false;
            this.puntero.setVelocity(0, 0);
            this.puntero.setImmovable(true); 
        } else {
            this.teclas1Enabled = true;
            this.puntero.setImmovable(false); 
            switch (this.esce) {
                case 1:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-1-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[0].setScale(1.1, 1.1);
                    break;
                case 2:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-2-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[1].setScale(1.1, 1.1);
                    break;
                case 3:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-3-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[2].setScale(1.1, 1.1);
                    break;
                case 4:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-4-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[3].setScale(1.1, 1.1);
                    break;
                case 5:
                    this.mapa = this.add.image(config.scale.width / 2, config.scale.height / 2 - 50, "MenuSeleccionEscenarios-Mapa-Random-Miniatura");
                    this.mapa.setDepth(2);
                    this.mapasSimbolo[4].setScale(1.1, 1.1);
                    break;
            };
        };
        if (this.tiempTocando) {
            this.cambiarTiempo.setScale(1.1, 1.1);
        } else {
            this.cambiarTiempo.setScale(1, 1);
        };
        switch (this.tiemp) {
            case 60:
                this.textoTiempo.setText("60");
                break;
            case 90:
                this.textoTiempo.setText("90");
                break;
            case 0:
                this.textoTiempo.setText("Infinito");
                break;
        };
        
        this.esce = 0;
        this.tiempTocando = false;
        
        
        if(this.mapaSelecionado) {    
            this.time.addEvent({
                delay: 1000,
                callback: this.avanzarEscena
            });
        }; 
    };
    
    //GESTIONAR COLISIONES
    colisionMapa1Jug() {
        escenario = 1;
        that.esce = 1;
    };
    colisionMapa2Jug() {
        escenario = 2;
        that.esce = 2;
    };
    colisionMapa3Jug() {
        escenario = 3;
        that.esce = 3;
    };
    colisionMapa4Jug() {
        escenario = 4;
        that.esce = 4;
    };
    colisionMapaRandomJug() {
        escenario = parseInt((Math.random() * 4) + 1);
        that.esce = 5;
    };
    colisionCambiarTiempoJug() {
        that.tiempTocando = true;
    };
    
    aceleracion() {
        if (right[0]) {
            that.puntero.setAccelerationX(1500);
        };
        if (left[0]) {
            that.puntero.setAccelerationX(-1500);
        };
        if (up[0]) {
            that.puntero.setAccelerationY(-1500);
        };
        if (down[0]) {
            that.puntero.setAccelerationY(1500);
        };
        
        if (!right[0] && !left[0]) {
            that.puntero.setVelocityX(that.puntero.body.velocity.x - (that.puntero.body.velocity.x * 0.04));
            that.puntero.setAccelerationX(0);
        };
        if (!up[0] && !down[0]) {
            that.puntero.setVelocityY(that.puntero.body.velocity.y - (that.puntero.body.velocity.y * 0.04));
            that.puntero.setAccelerationY(0);
        };
    };
    
    avanzarEscena() {
        for (var i = 0; i < 2; i++) {
            right[i] = false;
            left[i] = false;
            up[i] = false;
            down[i] = false;
        };
        that.scene.start("Juego"); 
    };
};