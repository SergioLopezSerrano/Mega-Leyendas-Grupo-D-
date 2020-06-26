/* global config, right, left, up, down, musicaJuego */

class UnirsePartida extends Phaser.Scene {
    
    constructor() {
        super("Unirse-Partida");
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
        this.input.keyboard.on("keydown-" + "U", function(){
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
    	
    	//FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "Unirse-Partida-Fondo");
        this.fondo.setDepth(0);
        
        //BOTON REGRESO
        this.botonRegreso = this.add.image(100, config.scale.height - 60, "MenuPrincipal-Boton-Regreso").setInteractive();
        this.botonRegreso.setDepth(2);
        this.botonRegreso.on("pointerdown", function(){ 
            that.scene.start("Servidores"); 
        });
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
            that.scene.start("Servidores"); 
        },this);
        
        //BOTON RECARGAR
        this.botonRegreso = this.add.image(config.scale.width - 100, 60, "MenuPrincipal-Boton-Recargar").setInteractive();
        this.botonRegreso.setDepth(2);
        this.botonRegreso.on("pointerdown", function(){ 
            that.scene.start("Unirse-Partida"); 
        });
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "V", function(){
            that.scene.start("Unirse-Partida"); 
        },this);
        
        this.listaPartidas = [];

        this.listaDatos = [];
        this.listaRayas = [];
        this.listaNombres = [];
        
        //BOTONES
        this.scrollArriba = this.add.sprite(config.scale.width / 2, 50, "Unirse-Partida-Boton-Arriba").setInteractive();
        this.scrollArriba.setDepth(1);
        
        this.scrollAbajo = this.add.sprite(config.scale.width / 2, config.scale.height - 50, "Unirse-Partida-Boton-Abajo").setInteractive();
        this.scrollAbajo.setDepth(1); 
        
        //FUNCIONES DE BOTONES
        this.scrollArriba.on("pointerdown", function(){ 
        	if (that.listaPartidas[0] != null) {
        		if (that.listaPartidas[0].y != 200) {
        			for (var i = 0; i < that.listaPartidas.length; i++) {
        				that.listaPartidas[i].y += 230;
        				that.listaDatos[i].y += 230;
        				that.listaRayas[i].y += 230;
        				that.listaNombres[i].y += 230;
        			};
        			
        		};
        	};
        	
        });
        this.scrollAbajo.on("pointerdown", function(){
        	if (that.listaPartidas[0] != null) {
        		if (that.listaPartidas[(that.listaPartidas.length - 1)].y > 920) {
        			for (var i = 0; i < that.listaPartidas.length; i++) {
        				that.listaPartidas[i].y -= 230;
        				that.listaDatos[i].y -= 230;
        				that.listaRayas[i].y -= 230;
        				that.listaNombres[i].y -= 230;
        			};
        		};
        	};
        });
        
        getGames();
        
        this.time.addEvent({
            delay: 100,
            loop: false,
            callback: this.llamada
        });        
    };
    
    update() {	
    };
    
    llamada() {
		if (that.listaPartidas[0] != null) {
    		that.listaPartidas[0].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(1, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[1] != null) {
    		that.listaPartidas[1].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(2, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[2] != null) {
    		that.listaPartidas[2].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(3, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[3] != null) {
    		that.listaPartidas[3].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(4, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[4] != null) {
    		that.listaPartidas[4].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(5, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[5] != null) {
    		that.listaPartidas[5].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(6, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[6] != null) {
    		that.listaPartidas[6].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(7, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[7] != null) {
    		that.listaPartidas[7].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(8, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[8] != null) {
    		that.listaPartidas[8].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(9, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[9] != null) {
    		that.listaPartidas[9].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(10, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[10] != null) {
    		that.listaPartidas[10].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(11, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[11] != null) {
    		that.listaPartidas[11].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(12, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[12] != null) {
    		that.listaPartidas[12].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(13, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[13] != null) {
    		that.listaPartidas[13].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(14, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[14] != null) {
    		that.listaPartidas[14].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(15, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[15] != null) {
    		that.listaPartidas[15].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(16, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[16] != null) {
    		that.listaPartidas[16].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(17, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[17] != null) {
    		that.listaPartidas[17].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(18, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[18] != null) {
    		that.listaPartidas[18].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(19, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    	if (that.listaPartidas[19] != null) {
    		that.listaPartidas[19].on("pointerdown", function(){
	   			 var usuario = {
	   					 id: idJugador,
	   					 name: nombreJugador,
	   					 connected: true,
	   					 idGame: idPartida,
	   					 idPlayer: idJugadorPartida
	   			 };	
	   			 putGame(20, usuario);
	   			 that.scene.start("Menu-Seleccion-Personajes-2"); 
  		 	});
    	};
    };
    
    refrescarEscena() {
    	that.scene.start("Unirse-Partida"); 
    };   
};