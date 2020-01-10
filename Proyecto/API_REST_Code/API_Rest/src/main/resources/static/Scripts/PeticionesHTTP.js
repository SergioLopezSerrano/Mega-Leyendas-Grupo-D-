
function postUser() {
	
	var value = document.getElementById("nombre").value;
    
    $.ajax({
        method: "POST",
        url: "/users",
        data: JSON.stringify(value),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (user) {
        console.log("Created User: " + JSON.stringify(user));
        idJugador = user.id;
        nombreJugador = user.name;
        idPartida = user.idGame;
        idJugadorPartida = user.idPlayer;
    })
};

function getUsers() {
    $.ajax({
        url: "/users"
    }).done(function (users) {
        console.log("Loaded Users: " + JSON.stringify(users));
        that.usuariosConectados.setText("");
        that.numeroUsuariosConectados.setText("");
        var numUsers = 0;
        for (var i = 0; i < users.length; i++) {
        	if ((i + 1) == idJugador) {
        		that.usuariosConectados.setText(that.usuariosConectados.text + "\n---------------------");
        	};
        	that.usuariosConectados.setText(that.usuariosConectados.text + "\nID: " + users[i].id + "\nNombre: " + users[i].name + "\nConectado: " + users[i].connected + "\nPartida: " + users[i].idGame + "\nJugador: " + users[i].idPlayer + "\n");
        	if ((i + 1) == idJugador) {
        		that.usuariosConectados.setText(that.usuariosConectados.text + "---------------------\n");
        	};
        	if (users[i].connected) {
        		numUsers ++;
        	};
        };
        that.numeroUsuariosConectados.setText("Usuarios conectados: " + numUsers + "\nPulsa 'u' para verlos");
    })
};

function getUser(userId) {
    $.ajax({
        url: "/users/" + userId
    }).done(function (user) {
        console.log("Loaded User: " + JSON.stringify(user));
    })
};

function getOtherUserInGame(userId) {
	$.ajax({
        url: "/users/" + userId
    }).done(function (user) {
    	if (user.idGame != idPartida) {
    		var user = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(user);
            deleteGame(idPartida);
            idPartida = 0;
        	idJugadorPartida = 0;
        	idOtroJugador = null;
        	nombreOtroJugador = null;
        	that.scale.startFullscreen();
            that.scene.start("Menu-Principal"); 
    	};
    })
};

function getOtherUserInGameWS(userId) {
	$.ajax({
        url: "/users/" + userId
    }).done(function (user) {
    	if (user.idGame != idPartida) {
    		var user = {
	        		id: idJugador,
	        		name: nombreJugador,
	        		connected: true,
	        		idGame: 0,
	        		idPlayer: 0
    	    };
            putUser(user);
            deleteGame(idPartida);
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
    	};
    })
	
};

function putUser(user) {
    $.ajax({
        method: "PUT",
        url: "/users/" + user.id,
        data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (user) {
        console.log("Updated user: " + JSON.stringify(user))
        idJugador = user.id;
        nombreJugador = user.name;
    })
};

function deleteUser(userId) {
    $.ajax({
        method: "DELETE",
        url: "/users/" + userId
    }).done(function (user) {
        console.log("Deleted User: " + JSON.stringify(user))
    })
};

function postGame() {
	
	var user = {
    		id: idJugador,
    		name: nombreJugador,
    		connected: true,
    		idGame: idPartida,
    		idPlayer: idJugadorPartida
	};
   
	
    $.ajax({
    	method: "POST",
        url: "/games",
        data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (game) {
    	console.log("Created Game: " + JSON.stringify(game));
    	idPartida = game.id;
    	idJugadorPartida = game.user1.idPlayer;
    	var user = {
        		id: idJugador,
        		name: nombreJugador,
        		connected: true,
        		idGame: idPartida,
        		idPlayer: idJugadorPartida
	    };
        putUser(user);
    })
};

function getGames(){
	 $.ajax({
	     url: "/games"
	 }).done(function (games) {
		 console.log("Loaded Games: " + JSON.stringify(games));
		 
		 var pos = 200; 
		 for (var i = 0; i < games.length; i++) {
			 if (games[i].user1 == null || games[i].user2 == null) {
				 that.listaPartidas[i] = that.add.sprite(config.scale.width / 2, pos, "Unirse-Partida-Partida").setInteractive();
				 
				 that.listaDatos[i] = that.add.text(config.scale.width / 2 - 350, pos, "Partida   " + games[i].id);
				 that.listaDatos[i].setOrigin(0.5, 0.5);
				 that.listaDatos[i].setFont("Arial Black");
				 that.listaDatos[i].setFontSize("70px");
				 that.listaDatos[i].setFill("White");
				 that.listaDatos[i].setStroke("Purple", 5);
				 
				 that.listaRayas[i] = that.add.text(config.scale.width / 2, pos, "---");
				 that.listaRayas[i].setOrigin(0.5, 0.5);
				 that.listaRayas[i].setFont("Arial Black");
				 that.listaRayas[i].setFontSize("70px");
				 that.listaRayas[i].setFill("White");
				 that.listaRayas[i].setStroke("Purple", 5);
				 
				 that.listaNombres[i] = that.add.text(config.scale.width / 2 + 350, pos, games[i].user1.name);
				 that.listaNombres[i].setOrigin(0.5, 0.5);
				 that.listaNombres[i].setFont("Arial Black");
				 that.listaNombres[i].setFontSize("70px");
				 that.listaNombres[i].setFill("White");
				 that.listaNombres[i].setStroke("Purple", 5);		 
				 
				 pos += 230;
			 };
		 };
	 })
};

function getNumberGames(){
	 $.ajax({
	     url: "/games"
	 }).done(function (games) {
		 if(games.length < 20) {
			 postGame();
			 that.scene.start("Esperando-Jugador"); 
		 } else {
			 that.maximoPartidas.visible = true;
			 that.time.addEvent({
		            delay: 2000,
		            loop: false,
		            callback: that.apagarMaximoPartidas
			 });
		 }
	 })
};

function getGame(gameId) {
    $.ajax({
        url: "/games/" + gameId
    }).done(function (game) {
        console.log("Loaded Game: " + JSON.stringify(game));
    })
};

function updateOtherPlayer() {
    $.ajax({
        url: "/games/" + idPartida
    }).done(function (game) {
    	if (game.user2 != null) {
    		idOtroJugador = game.user2.id;
    		nombreOtroJugador = game.user2.name;
    	};
    })
};

function putGame(idPart, usuario) {
    $.ajax({
        method: "PUT",
        url: "/games/" + idPart,
        data: JSON.stringify(usuario),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (game) {
        console.log("Updated Game: " + JSON.stringify(game));
        idPartida = game.id;
    	idJugadorPartida = game.user2.idPlayer;
    	idOtroJugador = game.user1.id;
    	nombreOtroJuegador = game.user1.name;
        var user = {
        		id: idJugador,
        		name: nombreJugador,
        		connected: true,
        		idGame: idPartida,
        		idPlayer: idJugadorPartida
	    };
        putUser(user);
    })
};

function deleteGame(gameId) {
    $.ajax({
        method: "DELETE",
        url: "/games/" + gameId
    }).done(function (game) {
        console.log("Deleted Game: " + JSON.stringify(game))
    })
};
