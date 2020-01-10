/* global config, right, left, up, down, escenario, personajeJugador, tiempo, game, resultado, musica, musicaMenu */

class Juego2 extends Phaser.Scene {
    
    constructor() {
        super("Juego-2");
    };
    
    create() {
        //INICIALIZAR VARIABLE CON LA REFERENCIA A LA ESCENA
        that = this;
        
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
        this.input.keyboard.on("keydown-" + "U", function(event){
            //this.scale.startFullscreen();
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
        
        //MUSICA
        musicaMenu.stop();
        switch(escenario) {
            case 1:
                musicaJuego = this.sound.add("Juego-Mapa-1");
                break;
            case 2:
                musicaJuego = this.sound.add("Juego-Mapa-2");
                break;
            case 3:
                musicaJuego = this.sound.add("Juego-Mapa-3");
                break;
            case 4:
                musicaJuego = this.sound.add("Juego-Mapa-4");
                break;
        };
        musicaJuego.play();

        ////VARIABLES OBJETOS/IMAGENES////
        
        this.generarEscenario();
        
        this.generarPersonajes();
        
        this.generarBola();      

      //BOTON ABANDONAR SERVIDOR
        this.botonRegreso = this.add.image(100, config.scale.height - 60, "MenuPrincipal-Boton-Abandonar-Partida").setInteractive();
        this.botonRegreso.setDepth(2);
        this.botonRegreso.on("pointerdown", function(){ 
        	var user = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(user);
            idPartida = 0;
        	idOtroJugador = null;
        	nombreOtroJugador = null;
        	otroJugadorPreparado = false;
        	if (connection != null) {
            	connection.onopen = function () {
            	};
            	connection.onerror = function() {
                };
            	connection.onmessage = function() {
                };
                if (idJugadorPartida == 2) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			personaje: null,
                			posicionX: null,
                			posicionY: null,
                			velocidadX: null,
                			velocidadY: null,
                			aceleracionX: null,
                			aceleracionY: null,
                			posicionPelotaX: null,
                			posicionPelotaY: null,
                			velocidadPelotaX: null,
                			velocidadPelotaY: null,
                			aceleracionPelotaX: null,
                			aceleracionPelotaY: null,
                			Jugador2BolaTocando: null,
                			Jugador2BolaCogida: null	
                	};
                };
            	connection.send(JSON.stringify(user)); 
        	};
        	connection = null;
        	idJugadorPartida = 0;
        	that.scale.startFullscreen();
            that.scene.start("Menu-Principal"); 
        });
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
        	var user = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(user);
            idPartida = 0;
        	idOtroJugador = null;
        	nombreOtroJugador = null;
        	otroJugadorPreparado = false;
        	if (connection != null) {
            	connection.onopen = function () {
            	};
            	connection.onerror = function() {
                };
            	connection.onmessage = function() {
                };
                if (idJugadorPartida == 2) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			personaje: null,
                			posicionX: null,
                			posicionY: null,
                			velocidadX: null,
                			velocidadY: null,
                			aceleracionX: null,
                			aceleracionY: null,
                			posicionPelotaX: null,
                			posicionPelotaY: null,
                			velocidadPelotaX: null,
                			velocidadPelotaY: null,
                			aceleracionPelotaX: null,
                			aceleracionPelotaY: null,
                			Jugador2BolaTocando: null,
                			Jugador2BolaCogida: null	
                	};
                };
            	connection.send(JSON.stringify(user)); 
        	};
        	connection = null;
        	idJugadorPartida = 0;
        	that.scale.startFullscreen();
            that.scene.start("Menu-Principal"); 
        },this);
        
        //ACTIVAR DETECTORES DE SOLAPAMIENTO (COLISIONES SIN FISICAS)
        this.colliderJug1Bola = this.physics.add.overlap(this.jugador[0], this.bola, this.colisionJug1Bola);
        this.Jugador1BolaTocando = false;
        this.Jugador1BolaCogida = false;
        this.colliderJug2Bola = this.physics.add.overlap(this.jugador[1], this.bola, this.colisionJug2Bola);
        this.Jugador2BolaTocando = false;
        this.Jugador2BolaCogida = false;
        
        //ACTIVAR DETECTORES DE COLISIONES (CON FISICAS)
        this.jugador[0].setCollideWorldBounds(true);
        this.jugador[1].setCollideWorldBounds(true);
        this.bola.setCollideWorldBounds(true);
        this.physics.add.collider(this.jugador[0], this.bloques);
        this.physics.add.collider(this.jugador[1], this.bloques);
        this.physics.add.collider(this.jugador[0], this.jugador[1], this.colisionJugador1Jugador2);
        this.physics.add.collider(this.bola, this.bloques);
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.teclas2Enabled = true;
        this.teclaCeroPulsada = false;
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled && !this.Jugador1BolaCogida)
                this.teclaCeroPulsada = true;
        },this);
        this.input.keyboard.on("keyup-" + "SPACE", function(event){
            //this.scale.startFullscreen();
            this.teclaCeroPulsada = false;
            this.Jugador2BolaCogida = false;
        },this);
        this.teclas2 = [];
        this.teclas2[0] = this.input.keyboard.on("keydown-" + "D", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled)
            right[1] = true;
        },this);
        this.teclas2[1] = this.input.keyboard.on("keydown-" + "A", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled)
            left[1] = true;
        },this);
        this.teclas2[2] = this.input.keyboard.on("keydown-" + "W", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled)
            up[1] = true;
        },this);
        this.teclas2[3] = this.input.keyboard.on("keydown-" + "S", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled)
            down[1] = true;
        },this);
        this.teclas2[4] = this.input.keyboard.on("keyup-" + "D", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled)
            right[1] = false;
        },this);
        this.teclas2[5] = this.input.keyboard.on("keyup-" + "A", function(event){
            //his.scale.startFullscreen();
            if(this.teclas2Enabled)
            left[1] = false;
        },this);
        this.teclas2[6] = this.input.keyboard.on("keyup-" + "W", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled)
            up[1] = false;
        },this);
        this.teclas2[7] = this.input.keyboard.on("keyup-" + "S", function(event){
            //this.scale.startFullscreen();
            if(this.teclas2Enabled)
            down[1] = false;
        },this);         
        
        this.finalJuego = false;
        
        connection.onmessage = function(e) {
        	console.log("WS message: " + JSON.parse(e.data));
        	otroJugadorPreparado = JSON.parse(e.data).preparado;
        	that.finalJuego = JSON.parse(JSON.parse(e.data).finalJuego);
        	personajeJugador[0] = parseInt(JSON.parse(e.data).personaje);
        	escenario = parseInt(JSON.parse(e.data).escenario);
        	that.textoTiempo.text = JSON.parse(e.data).tiempo;
        	that.textoMarcador.text = parseInt(JSON.parse(e.data).marcador1) + " -- " + parseInt(JSON.parse(e.data).marcador2);
        	resultado[0] = parseInt(JSON.parse(e.data).marcador1);
        	resultado[1] = parseInt(JSON.parse(e.data).marcador2);
        	that.jugador[0].x = parseInt(JSON.parse(e.data).posicionX);
        	that.jugador[0].y = parseInt(JSON.parse(e.data).posicionY);
        	that.jugador[0].body.velocity.x = parseInt(JSON.parse(e.data).velocidadX);
        	that.jugador[0].body.velocity.y = parseInt(JSON.parse(e.data).velocidadY);
        	that.jugador[0].body.acceleration.x = parseInt(JSON.parse(e.data).aceleracionX);
        	that.jugador[0].body.acceleration.y = parseInt(JSON.parse(e.data).aceleracionY);
        	that.bola.x = parseInt(JSON.parse(e.data).posicionPelotaX);
        	that.bola.y = parseInt(JSON.parse(e.data).posicionPelotaY);
        	that.bola.body.velocity.x = parseInt(JSON.parse(e.data).velocidadPelotaX);
        	that.bola.body.velocity.y = parseInt(JSON.parse(e.data).velocidadPelotaY);
        	that.bola.body.acceleration.x = parseInt(JSON.parse(e.data).aceleracionPelotaX);
        	that.bola.body.acceleration.y = parseInt(JSON.parse(e.data).aceleracionPelotaY);
        	that.Jugador1BolaTocando = JSON.parse(JSON.parse(e.data).Jugador1BolaTocando);
        	that.Jugador1BolaCogida = JSON.parse(JSON.parse(e.data).Jugador1BolaCogida);
        };	
    };
    
    update() {
    	
    	if (idOtroJugador != null) {
    		getOtherUserInGameWS(idOtroJugador);
    	};	
    	
        this.aceleracion();      
        
        if(this.Jugador2BolaCogida || (this.Jugador2BolaTocando && this.teclaCeroPulsada)){
            this.bola.setVelocity(this.jugador[1].body.velocity.x, this.jugador[1].body.velocity.y);
            this.Jugador2BolaCogida = true;
            this.jugador[1].setMaxVelocity(300, 300);
        } else {
        	this.jugador[1].setMaxVelocity(400, 400);
        };
        this.teclaCeroPulsada = false;
        
        this.Jugador2BolaTocando = false;
        
        if (this.tiemp === 0) {   
            this.scene.pause("Juego");
            this.scene.launch("Final");
        };  
        
        if (this.finalJuego) {   
            this.scene.pause("Juego");
            this.scene.launch("Final");
        } else {
        	this.enviarWebsocket();
        };
    };
    
    //GESTIONAR COLISIONES
    colisionJug1Bola() {
        that.Jugador1BolaTocando = true;
    };
    colisionJug2Bola() {
        that.Jugador2BolaTocando = true;
    };
    
    colisionJugador1Jugador2() {
        that.Jugador1BolaCogida = false;
        that.Jugador2BolaCogida = false;
    };
    
    aceleracion() {
        for (var i = 0; i < 2; i++) {
            
            if(right[i]){
                that.jugador[i].setAccelerationX(1500);
            };
            if(left[i]){
                that.jugador[i].setAccelerationX(-1500);
            };
            if(up[i]){
                that.jugador[i].setAccelerationY(-1500);
            };
            if(down[i]){
                that.jugador[i].setAccelerationY(1500);
            };

            if(!right[i] && !left[i]) {
                that.jugador[i].setVelocityX(that.jugador[i].body.velocity.x - (that.jugador[i].body.velocity.x * 0.04));
                that.jugador[i].setAccelerationX(0);
            };
            if(!up[i] && !down[i]) {
                that.jugador[i].setVelocityY(that.jugador[i].body.velocity.y - (that.jugador[i].body.velocity.y * 0.04));
                that.jugador[i].setAccelerationY(0);
            };
        };     
        that.bola.setVelocityX(that.bola.body.velocity.x - (that.bola.body.velocity.x * 0.01));
        that.bola.setVelocityY(that.bola.body.velocity.y - (that.bola.body.velocity.y * 0.01));
    };
    
    generarEscenario() {
        that.porteria = [];
        that.porteria[0] = that.physics.add.image(config.scale.width / 2 - 920, config.scale.height / 2, "Juego-Porteria-1");
        that.porteria[1] = that.physics.add.image(config.scale.width / 2 + 920, config.scale.height / 2, "Juego-Porteria-2");
        that.porteria[0].setDepth(1);
        that.porteria[1].setDepth(1);
        that.reloj = that.add.image(config.scale.width / 2, config.scale.height / 2 - 490, "Juego-Reloj");
        that.reloj.setDepth(3);
        that.marcador = that.add.image(config.scale.width / 2, config.scale.height / 2 - 420, "Juego-Marcador");
        that.marcador.setDepth(3);
        
        //VARIABLE CONTROL DEL TIEMPO
        that.tiemp = tiempo;
        
        //TEXTO TIEMPO
        that.textoTiempo = that.add.text(config.scale.width / 2, config.scale.height / 2 - 490, that.tiemp);
        that.textoTiempo.setOrigin(0.5, 0.5);
        that.textoTiempo.setFont("Arial Black");
        that.textoTiempo.setFontSize("26px");
        that.textoTiempo.setFill("White");
        that.textoTiempo.setStroke("Purple", 5);
        that.textoTiempo.setDepth(3);  
        
        //TEXTO MARCADOR
        that.textoMarcador = that.add.text(config.scale.width / 2, config.scale.height / 2 - 420, resultado[0] + " -- " + resultado[1]);
        that.textoMarcador.setOrigin(0.5, 0.5);
        that.textoMarcador.setFont("Arial Black");
        that.textoMarcador.setFontSize("50px");
        that.textoMarcador.setFill("White");
        that.textoMarcador.setStroke("Purple", 5);
        that.textoMarcador.setDepth(3);
        
        
        
        
        that.bloques = that.physics.add.staticGroup();
        
        switch (escenario) {
            case 1:
                that.fondo = that.add.image(config.scale.width / 2, config.scale.height / 2, "Juego-Mapa-1");
                that.fondo.setDepth(0);

                //00
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-1");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-1");

                //01
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-1");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-1");

                //10
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-1");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-1");

                //11
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-1");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-1");


                //especial
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 750, config.scale.height / 2, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 685, config.scale.height / 2, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 620, config.scale.height / 2, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 555, config.scale.height / 2, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 + 750, config.scale.height / 2, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 685, config.scale.height / 2, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 620, config.scale.height / 2, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 555, config.scale.height / 2, "Juego-Barrera-Mapa-1");

                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-1");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-1");
                
                break;
                
            case 2:
                that.fondo = that.add.image(config.scale.width / 2, config.scale.height / 2, "Juego-Mapa-2");
                that.fondo.setDepth(0);

                //00
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-2");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-2");

                //01
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-2");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-2");

                //10
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-2");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-2");

                //11
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-2");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-2");


                //especial
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 750, config.scale.height / 2, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 685, config.scale.height / 2, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 620, config.scale.height / 2, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 555, config.scale.height / 2, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 + 750, config.scale.height / 2, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 685, config.scale.height / 2, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 620, config.scale.height / 2, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 555, config.scale.height / 2, "Juego-Barrera-Mapa-2");

                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-2");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-2");
                
                break;
                
            case 3:
                that.fondo = that.add.image(config.scale.width / 2, config.scale.height / 2, "Juego-Mapa-3");
                that.fondo.setDepth(0);

                //00
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-3");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-3");

                //01
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-3");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-3");

                //10
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-3");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-3");

                //11
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-3");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-3");


                //especial
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 750, config.scale.height / 2, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 685, config.scale.height / 2, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 620, config.scale.height / 2, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 555, config.scale.height / 2, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 + 750, config.scale.height / 2, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 685, config.scale.height / 2, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 620, config.scale.height / 2, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 555, config.scale.height / 2, "Juego-Barrera-Mapa-3");

                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-3");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-3");
                
                break;
                
            case 4:
                that.fondo = that.add.image(config.scale.width / 2, config.scale.height / 2, "Juego-Mapa-4");
                that.fondo.setDepth(0);

                //00
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-4");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-4");

                //01
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 - 195, "Juego-Barrera-Mapa-4");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 - 350, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 - 115, "Juego-Barrera-Mapa-4");

                //10
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-4");     

                that.bloques.create(config.scale.width / 2 - 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-4");

                //11
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 695, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 390, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 325, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 260, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 640, config.scale.height / 2 + 195, "Juego-Barrera-Mapa-4");     

                that.bloques.create(config.scale.width / 2 + 550, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 485, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 420, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 355, config.scale.height / 2 + 350, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 + 65, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 130, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 180, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 400, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 335, config.scale.height / 2 + 115, "Juego-Barrera-Mapa-4");


                //especial
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 - 420, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2, config.scale.height / 2 + 420, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 750, config.scale.height / 2, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 685, config.scale.height / 2, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 620, config.scale.height / 2, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 555, config.scale.height / 2, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 + 750, config.scale.height / 2, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 685, config.scale.height / 2, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 620, config.scale.height / 2, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 555, config.scale.height / 2, "Juego-Barrera-Mapa-4");

                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 - 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 - 32.5, "Juego-Barrera-Mapa-4");
                that.bloques.create(config.scale.width / 2 + 32.5, config.scale.height / 2 + 32.5, "Juego-Barrera-Mapa-4");
                
                break;
        };
        
        that.bloques.setDepth(1);
    };
    
    generarPersonajes() {
        that.jugador = [];
        
        switch (personajeJugador[0]) {
            
            case 1:
                that.jugador[0] = that.physics.add.image(config.scale.width / 2 - 830, config.scale.height / 2, "Juego-Personaje-1-Jugador-1");
                break;
            case 2:
                that.jugador[0] = that.physics.add.image(config.scale.width / 2 - 830, config.scale.height / 2, "Juego-Personaje-2-Jugador-1");
                break;
            case 3:
                that.jugador[0] = that.physics.add.image(config.scale.width / 2 - 830, config.scale.height / 2, "Juego-Personaje-3-Jugador-1");
                break;
            case 4:
                that.jugador[0] = that.physics.add.image(config.scale.width / 2 - 830, config.scale.height / 2, "Juego-Personaje-4-Jugador-1");
                break;
        };
        switch (personajeJugador[1]) {
            
            case 1:
                that.jugador[1] = that.physics.add.image(config.scale.width / 2 + 830, config.scale.height / 2, "Juego-Personaje-1-Jugador-2");
                break;
            case 2:
                that.jugador[1] = that.physics.add.image(config.scale.width / 2 + 830, config.scale.height / 2, "Juego-Personaje-2-Jugador-2");
                break;
            case 3:
                that.jugador[1] = that.physics.add.image(config.scale.width / 2 + 830, config.scale.height / 2, "Juego-Personaje-3-Jugador-2");
                break;
            case 4:
                that.jugador[1] = that.physics.add.image(config.scale.width / 2 + 830, config.scale.height / 2, "Juego-Personaje-4-Jugador-2");
                break;
        };   
        
        that.jugador[0].setDepth(2);
        that.jugador[1].setDepth(2);
        that.jugador[0].setSize(65, 65);
        that.jugador[1].setSize(65, 65);
        that.jugador[0].setMaxVelocity(400, 400);
        that.jugador[1].setMaxVelocity(400, 400);
        that.jugador[0].setBounce(0.9);
        that.jugador[1].setBounce(0.9);
    };
    
    generarBola() {
    	that.bola = that.physics.add.image(config.scale.width / 2, config.scale.height / 2 - 100, "Juego-Bola");
    	that.bola.setDepth(2);
        that.bola.setSize(40, 40);
        that.bola.setMaxVelocity(400, 400);
        that.bola.setBounce(0.9);
    };    
    
   enviarWebsocket() {
    	
    	var user = {
    			idJugadorPartida: idJugadorPartida,
    			primerContacto: true,
    			preparado: true,
    			personaje: personajeJugador[1],
    			posicionX: that.jugador[1].x,
    			posicionY: that.jugador[1].y,
    			velocidadX: that.jugador[1].body.velocity.x,
    			velocidadY: that.jugador[1].body.velocity.y,
    			aceleracionX: that.jugador[1].body.acceleration.x,
    			aceleracionY: that.jugador[1].body.acceleration.y,
    			posicionPelotaX: that.bola.x,
    			posicionPelotaY: that.bola.y,
    			velocidadPelotaX: that.bola.body.velocity.x,
    			velocidadPelotaY: that.bola.body.velocity.y,
    			aceleracionPelotaX: that.bola.body.acceleration.x,
    			aceleracionPelotaY: that.bola.body.acceleration.y,
    			Jugador2BolaTocando: that.Jugador2BolaTocando,
    			Jugador2BolaCogida: that.Jugador2BolaCogida	
    	};
    	
    	connection.send(JSON.stringify(user));
    };
};