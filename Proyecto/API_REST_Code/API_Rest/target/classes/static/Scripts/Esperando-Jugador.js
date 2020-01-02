/* global config, right, left, up, down, musicaJuego */

class EsperandoJugador extends Phaser.Scene {
    
    constructor() {
        super("Esperando-Jugador");
    };
    
    postPartida() {
    	
    	var game = {
    			user1: {id: idJugador,
    	               name: nombreJugador,
    	               connected: true}, 
    	        user2: {id: 999,
    	               name: "Auxiliar",
    	               connected: false},
    			id: 0
	        };
    	
        $.ajax({
        	
        	method: "POST",
            url: "/games",
            data: JSON.stringify(game),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (game) {
            //this.jugador2 = game.user2;
            //idPartida = game.id;
            //this.texto5.text = "Servidor" + idPartida;
            console.log("Created Game: " + JSON.stringify(game));
            
        })
    }
    
    getPartidas(){
    	 $.ajax({
    	     url: "/games"
    	 }).done(function (games) {
    		 console.log("Loaded Users: " + JSON.stringify(games));
    	 })
    }
    
    create(){
    	
    	//FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuSeleccionEscenarios-Fondo");
        this.fondo.setDepth(0);
        
       //TEXTO
        
        this.jugador2 = "Esperando Jugador 2";
        
        this.texto1 = this.add.text(config.scale.width / 2 - 500, config.scale.height / 2 - 100, "Jugador 1");
        this.texto1.setOrigin(0.5, 0.5);
        this.texto1.setFont("Arial Black");
        this.texto1.setFontSize("70px");
        this.texto1.setFill("White");
        this.texto1.setStroke("Purple", 5);
                       
        this.texto2 = this.add.text(config.scale.width / 2 + 500, config.scale.height / 2 - 100, "Jugador 2");
        this.texto2.setOrigin(0.5, 0.5);
        this.texto2.setFont("Arial Black");
        this.texto2.setFontSize("70px");
        this.texto2.setFill("White");
        this.texto2.setStroke("Purple", 5);
        
        this.texto3 = this.add.text(config.scale.width / 2 - 500, config.scale.height / 2, nombreJugador);
        this.texto3.setOrigin(0.5, 0.5);
        this.texto3.setFont("Arial Black");
        this.texto3.setFontSize("40px");
        this.texto3.setFill("White");
        this.texto3.setStroke("Purple", 5);
        
        this.texto4 = this.add.text(config.scale.width / 2 + 500, config.scale.height / 2, this.jugador2);
        this.texto4.setOrigin(0.5, 0.5);
        this.texto4.setFont("Arial Black");
        this.texto4.setFontSize("40px");
        this.texto4.setFill("White");
        this.texto4.setStroke("Purple", 5);
        
        this.texto5 = this.add.text(config.scale.width / 2, config.scale.height / 2 - 400, "Servidor 0");
        this.texto5.setOrigin(0.5, 0.5);
        this.texto5.setFont("Arial Black");
        this.texto5.setFontSize("80px");
        this.texto5.setFill("White");
        this.texto5.setStroke("Purple", 5); 
        
        this.postPartida();
    }
}