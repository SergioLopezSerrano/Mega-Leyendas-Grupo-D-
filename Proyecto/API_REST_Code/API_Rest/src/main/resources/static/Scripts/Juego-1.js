/* global config, right, left, up, down, escenario, personajeJugador, tiempo, game, resultado, musica, musicaMenu */

class Juego1 extends Phaser.Scene {
    
    constructor() {
        super("Juego-1");
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
                if (idJugadorPartida == 1) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			finalJuego: false,
                			personaje: null,
                			escenario : null,
                			tiempo: null,
                			marcador1: null,
                			marcador2: null,
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
                			Jugador1BolaTocando: null,
                			Jugador1BolaCogida: null	
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
                if (idJugadorPartida == 1) {
                	var user = {
                			idJugadorPartida: idJugadorPartida,
                			primerContacto: false,
                			preparado: false,
                			finalJuego: false,
                			personaje: null,
                			escenario : null,
                			tiempo: null,
                			marcador1: null,
                			marcador2: null,
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
                			Jugador1BolaTocando: null,
                			Jugador1BolaCogida: null	
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
        this.colliderBolaPort1 = this.physics.add.overlap(this.bola, this.porteria[0], this.colisionBolaPort1);
        this.colliderBolaPort2 = this.physics.add.overlap(this.bola, this.porteria[1], this.colisionBolaPort2);
        
        //ACTIVAR DETECTORES DE COLISIONES (CON FISICAS)
        this.jugador[0].setCollideWorldBounds(true);
        this.jugador[1].setCollideWorldBounds(true);
        this.bola.setCollideWorldBounds(true);
        this.physics.add.collider(this.jugador[0], this.bloques);
        this.physics.add.collider(this.jugador[1], this.bloques);
        this.physics.add.collider(this.jugador[0], this.jugador[1], this.colisionJugador1Jugador2);
        this.physics.add.collider(this.bola, this.bloques);
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.teclas1Enabled = true;
        this.teclaSpacePulsada = false;
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            if(this.teclas1Enabled && !this.Jugador2BolaCogida)
                this.teclaSpacePulsada = true;
        },this);
        this.input.keyboard.on("keyup-" + "SPACE", function(event){
            this.teclaSpacePulsada = false;
            this.Jugador1BolaCogida = false;
        },this);
        this.teclas1 = [];
        this.teclas1[0] = this.input.keyboard.on("keydown-" + "D", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            right[0] = true;
        },this);
        this.teclas1[1] = this.input.keyboard.on("keydown-" + "A", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            left[0] = true;
        },this);
        this.teclas1[2] = this.input.keyboard.on("keydown-" + "W", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            up[0] = true;
        },this);
        this.teclas1[3] = this.input.keyboard.on("keydown-" + "S", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            down[0] = true;
        },this);
        this.teclas1[4] = this.input.keyboard.on("keyup-" + "D", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            right[0] = false;
        },this);
        this.teclas1[5] = this.input.keyboard.on("keyup-" + "A", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            left[0] = false;
        },this);
        this.teclas1[6] = this.input.keyboard.on("keyup-" + "W", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            up[0] = false;
        },this);
        this.teclas1[7] = this.input.keyboard.on("keyup-" + "S", function(event){
            //this.scale.startFullscreen();
            if(this.teclas1Enabled)
            down[0] = false;
        },this);     
        
        connection.onmessage = function(e) {
        	console.log("WS message: " + JSON.parse(e.data));
        	otroJugadorPreparado = JSON.parse(e.data).preparado;
        	personajeJugador[1] = parseInt(JSON.parse(e.data).personaje);
        	that.jugador[1].x = parseInt(JSON.parse(e.data).posicionX);
        	that.jugador[1].y = parseInt(JSON.parse(e.data).posicionY);
        	that.jugador[1].body.velocity.x = parseInt(JSON.parse(e.data).velocidadX);
        	that.jugador[1].body.velocity.y = parseInt(JSON.parse(e.data).velocidadY);
        	that.jugador[1].body.acceleration.x = parseInt(JSON.parse(e.data).aceleracionX);
        	that.jugador[1].body.acceleration.y = parseInt(JSON.parse(e.data).aceleracionY);
        	//that.bola.x = parseInt(JSON.parse(e.data).posicionPelotaX);
        	//that.bola.y = parseInt(JSON.parse(e.data).posicionPelotaY);
        	//that.bola.body.velocity.x = parseInt(JSON.parse(e.data).velocidadPelotaX);
        	//that.bola.body.velocity.y = parseInt(JSON.parse(e.data).velocidadPelotaY);
        	//that.bola.body.acceleration.x = parseInt(JSON.parse(e.data).aceleracionPelotaX);
        	//that.bola.body.acceleration.y = parseInt(JSON.parse(e.data).aceleracionPelotaY);
        	that.Jugador2BolaTocando = JSON.parse(JSON.parse(e.data).Jugador2BolaTocando);
        	that.Jugador2BolaCogida = JSON.parse(JSON.parse(e.data).Jugador2BolaCogida);
        };
    };
    
    update() {
    	
    	if (idOtroJugador != null) {
    		getOtherUserInGameWS(idOtroJugador);
    	};	
    	
        this.aceleracion();
        
        if(this.Jugador1BolaCogida || (this.Jugador1BolaTocando && this.teclaSpacePulsada)){
            this.bola.setVelocity(this.jugador[0].body.velocity.x, this.jugador[0].body.velocity.y);
            this.Jugador1BolaCogida = true;
            this.jugador[0].setMaxVelocity(300, 300);
        } else {
        	this.jugador[0].setMaxVelocity(400, 400);
        };
        this.teclaSpacePulsada = false; 
        
        if(this.Jugador2BolaCogida || (this.Jugador2BolaTocando && this.teclaCeroPulsada)){
            this.bola.setVelocity(this.jugador[1].body.velocity.x, this.jugador[1].body.velocity.y);
            this.Jugador2BolaCogida = true;
            this.jugador[1].setMaxVelocity(300, 300);
        } else {
        	this.jugador[1].setMaxVelocity(400, 400);
        };
        
        this.Jugador1BolaTocando = false;
        
        if (this.tiemp === 0) {   
        	var user = {
    				idJugadorPartida: idJugadorPartida,
    				primerContacto: true,
    				preparado: true,
    				finalJuego: true,
    				personaje: personajeJugador[0],
    				escenario: escenario,
    				tiempo: that.tiemp,
    				marcador1: resultado[0],
    				marcador2: resultado[1],
    				posicionX: that.jugador[0].x,
    				posicionY: that.jugador[0].y,
    				velocidadX: that.jugador[0].body.velocity.x,
    				velocidadY: that.jugador[0].body.velocity.y,
    				aceleracionX: that.jugador[0].body.acceleration.x,
    				aceleracionY: that.jugador[0].body.acceleration.y,
    				posicionPelotaX: that.bola.x,
    				posicionPelotaY: that.bola.y,
    				velocidadPelotaX: that.bola.body.velocity.x,
    				velocidadPelotaY: that.bola.body.velocity.y,
    				aceleracionPelotaX: that.bola.body.acceleration.x,
    				aceleracionPelotaY: that.bola.body.acceleration.y,
    				Jugador1BolaTocando: that.Jugador1BolaTocando,
    				Jugador1BolaCogida: that.Jugador1BolaCogida	
    		};
    		
    		connection.send(JSON.stringify(user));
    		
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
    
    colisionBolaPort1() {
        resultado[1] ++;
        that.textoMarcador.setText(resultado[0] + " -- " + resultado[1]);
        for (var i = 0; i < 2; i++) {
            right[i] = false;
            left[i] = false;
            up[i] = false;
            down[i] = false;
        };
        that.jugador[0].setPosition(config.scale.width / 2 - 830, config.scale.height / 2);
        that.jugador[0].setVelocity(0, 0);
        that.jugador[0].setAcceleration(0, 0);
        that.jugador[1].setPosition(config.scale.width / 2 + 830, config.scale.height / 2);
        that.jugador[1].setVelocity(0, 0);
        that.jugador[1].setAcceleration(0, 0);
        if (Math.random() >= 0.5) {
            that.bola.setPosition(config.scale.width / 2, config.scale.height / 2 - 100);
            that.bola.setVelocity(0, -200);
            that.bola.setAcceleration(0, 0);
            
        } else {
            that.bola.setPosition(config.scale.width / 2, config.scale.height / 2 + 100);
            that.bola.setVelocity(0, 200);
            that.bola.setAcceleration(0, 0);
        };     
    };
    colisionBolaPort2() {
        resultado[0] ++;
        that.textoMarcador.setText(resultado[0] + " -- " + resultado[1]);
        for (var i = 0; i < 2; i++) {
            right[i] = false;
            left[i] = false;
            up[i] = false;
            down[i] = false;
        };
        that.jugador[0].setPosition(config.scale.width / 2 - 830, config.scale.height / 2);
        that.jugador[0].setVelocity(0, 0);
        that.jugador[0].setAcceleration(0, 0);
        that.jugador[1].setPosition(config.scale.width / 2 + 830, config.scale.height / 2);
        that.jugador[1].setVelocity(0, 0);
        that.jugador[1].setAcceleration(0, 0);
        
        if (Math.random() >= 0.5) {
            that.bola.setPosition(config.scale.width / 2, config.scale.height / 2 - 100);
            that.bola.setVelocity(0, -200);
            that.bola.setAcceleration(0, 0);           
        } else {
            that.bola.setPosition(config.scale.width / 2, config.scale.height / 2 + 100);
            that.bola.setVelocity(0, 200);
            that.bola.setAcceleration(0, 0);
        };    
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
        
        that.time.addEvent({
            delay: 1000,
            callback: that.avanzarTiempo
        });
        
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
        if (Math.random() >= 0.5) {
            that.bola = that.physics.add.image(config.scale.width / 2, config.scale.height / 2 - 100, "Juego-Bola");
            that.bola.setVelocityY(-200);
            
        } else {
            that.bola = that.physics.add.image(config.scale.width / 2, config.scale.height / 2 + 100, "Juego-Bola");
            that.bola.setVelocityY(200);
        };    
        that.bola.setDepth(2);
        that.bola.setSize(40, 40);
        that.bola.setMaxVelocity(400, 400);
        that.bola.setBounce(0.9);
    };   
    
    avanzarTiempo() {
        that.tiemp --;
        that.textoTiempo.setText(that.tiemp);
        that.time.addEvent({
            delay: 1000,
            callback: that.avanzarTiempo
        });
    };
    
   enviarWebsocket() {
    		
		var user = {
				idJugadorPartida: idJugadorPartida,
				primerContacto: true,
				preparado: true,
				finalJuego: false,
				personaje: personajeJugador[0],
				escenario: escenario,
				tiempo: that.tiemp,
				marcador1: resultado[0],
				marcador2: resultado[1],
				posicionX: that.jugador[0].x,
				posicionY: that.jugador[0].y,
				velocidadX: that.jugador[0].body.velocity.x,
				velocidadY: that.jugador[0].body.velocity.y,
				aceleracionX: that.jugador[0].body.acceleration.x,
				aceleracionY: that.jugador[0].body.acceleration.y,
				posicionPelotaX: that.bola.x,
				posicionPelotaY: that.bola.y,
				velocidadPelotaX: that.bola.body.velocity.x,
				velocidadPelotaY: that.bola.body.velocity.y,
				aceleracionPelotaX: that.bola.body.acceleration.x,
				aceleracionPelotaY: that.bola.body.acceleration.y,
				Jugador1BolaTocando: that.Jugador1BolaTocando,
				Jugador1BolaCogida: that.Jugador1BolaCogida	
		};
		
		connection.send(JSON.stringify(user));
    };
};