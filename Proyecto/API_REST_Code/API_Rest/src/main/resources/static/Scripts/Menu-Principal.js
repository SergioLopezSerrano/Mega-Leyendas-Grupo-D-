/* global config, musicaIntro, musicaJuego, musicaMenu */

class MenuPrincipal extends Phaser.Scene {
    
    constructor() {
        super("Menu-Principal");
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
            this.scale.startFullscreen();
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
                    this.scene.start("Servidores"); 
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
                    this.scale.stopFullscreen();
                    //deleteUser(idJugador);
                    var user = {
	            		id: idJugador,
	    	            name: nombreJugador,
	    	            connected: false
            	    };
                    putUser(user);
                    game.destroy(true);
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


