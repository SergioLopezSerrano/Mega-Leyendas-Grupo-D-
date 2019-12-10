/* global config */

class MenuInicio extends Phaser.Scene {
    
    constructor() {
        super("Menu-Inicio");
    };  
    
    preload() {	
        ////MENU INICIO////
        this.load.image("MenuInicio-Fondo", "Sources/Menu-Inicio/Fondo.png"); //FONDO
        
        ////MENU PRINCIPAL////
        this.load.image("MenuPrincipal-Jugar", "Sources/Menu-Principal/Jugar.png"); 
        this.load.image("MenuPrincipal-Controles", "Sources/Menu-Principal/Controles.png"); 
        this.load.image("MenuPrincipal-Creditos", "Sources/Menu-Principal/Creditos.png"); 
        this.load.image("MenuPrincipal-Salir", "Sources/Menu-Principal/Salir.png"); 
        
        ////MENU CONTROLES////
        this.load.image("MenuControles-Fondo", "Sources/Menu-Controles/Fondo.png"); 
        
        ////MENU CREDITOS////
        this.load.image("MenuCreditos-Fondo", "Sources/Menu-Creditos/Fondo.png");
        
        ////MENU SELECCION PERSONAJES////
        this.load.image("MenuSeleccionPersonajes-Fondo", "Sources/Menu-Seleccion-Personajes/Fondo.png");                                     //FONDO
        this.load.image("MenuSeleccionPersonajes-Personaje-1-Simbolo", "Sources/Menu-Seleccion-Personajes/Personaje-1-Simbolo.png");         //SELECTOR PERSONAJE 1
        this.load.image("MenuSeleccionPersonajes-Personaje-2-Simbolo", "Sources/Menu-Seleccion-Personajes/Personaje-2-Simbolo.png");         //SELECTOR PERSONAJE 2    
        this.load.image("MenuSeleccionPersonajes-Personaje-3-Simbolo", "Sources/Menu-Seleccion-Personajes/Personaje-3-Simbolo.png");         //SELECTOR PERSONAJE 3
        this.load.image("MenuSeleccionPersonajes-Personaje-4-Simbolo", "Sources/Menu-Seleccion-Personajes/Personaje-4-Simbolo.png");         //SELECTOR PERSONAJE 4
        this.load.image("MenuSeleccionPersonajes-Personaje-1-Desactivado", "Sources/Menu-Seleccion-Personajes/Personaje-1-Desactivado.png"); //PERSONAJE 1 DESACTIVADO
        this.load.image("MenuSeleccionPersonajes-Personaje-2-Desactivado", "Sources/Menu-Seleccion-Personajes/Personaje-2-Desactivado.png"); //PERSONAJE 2 DESACTIVADO
        this.load.image("MenuSeleccionPersonajes-Personaje-3-Desactivado", "Sources/Menu-Seleccion-Personajes/Personaje-3-Desactivado.png"); //PERSONAJE 3 DESACTIVADO
        this.load.image("MenuSeleccionPersonajes-Personaje-4-Desactivado", "Sources/Menu-Seleccion-Personajes/Personaje-4-Desactivado.png"); //PERSONAJE 4 DESACTIVADO
        this.load.image("MenuSeleccionPersonajes-Personaje-1-Activado", "Sources/Menu-Seleccion-Personajes/Personaje-1-Activado.png");       //PERSONAJE 1 ACTIVADO
        this.load.image("MenuSeleccionPersonajes-Personaje-2-Activado", "Sources/Menu-Seleccion-Personajes/Personaje-2-Activado.png");       //PERSONAJE 2 ACTIVADO
        this.load.image("MenuSeleccionPersonajes-Personaje-3-Activado", "Sources/Menu-Seleccion-Personajes/Personaje-3-Activado.png");       //PERSONAJE 3 ACTIVADO
        this.load.image("MenuSeleccionPersonajes-Personaje-4-Activado", "Sources/Menu-Seleccion-Personajes/Personaje-4-Activado.png");       //PERSONAJE 4 ACTIVADO
        this.load.image("MenuSeleccionPersonajes-Puntero-Jugador-1", "Sources/Menu-Seleccion-Personajes/Puntero-Jugador-1.png");             //PUNTERO JUGADOR 1
        this.load.image("MenuSeleccionPersonajes-Puntero-Jugador-2", "Sources/Menu-Seleccion-Personajes/Puntero-Jugador-2.png");             //PUNTERO JUGADOR 2
        this.load.image("MenuSeleccionPersonajes-Marco-Jugador-1", "Sources/Menu-Seleccion-Personajes/Marco-Jugador-1.png");                 //MARCO JUGADOR 1
        this.load.image("MenuSeleccionPersonajes-Marco-Jugador-2", "Sources/Menu-Seleccion-Personajes/Marco-Jugador-2.png");                 //MARCO JUGADOR 2
        
        ////MENU SELECCION ESCENARIOS////
        this.load.image("MenuSeleccionEscenarios-Puntero-Jugador", "Sources/Menu-Seleccion-Escenarios/Puntero-Jugador.png");   //PUNTERO JUGADOR 
        this.load.image("MenuSeleccionEscenarios-Fondo", "Sources/Menu-Seleccion-Escenarios/Fondo.png");                       //FONDO
        this.load.image("MenuSeleccionEscenarios-Mapa-Miniatura", "Sources/Menu-Seleccion-Escenarios/Mapa-Miniatura.png");     //MAPA MINIATURA
        this.load.image("MenuSeleccionEscenarios-Mapa-1", "Sources/Menu-Seleccion-Escenarios/Mapa-1.png");                     //MAPA 1
        this.load.image("MenuSeleccionEscenarios-Mapa-2", "Sources/Menu-Seleccion-Escenarios/Mapa-2.png");                     //MAPA 2
        this.load.image("MenuSeleccionEscenarios-Mapa-3", "Sources/Menu-Seleccion-Escenarios/Mapa-3.png");                     //MAPA 3
        this.load.image("MenuSeleccionEscenarios-Mapa-4", "Sources/Menu-Seleccion-Escenarios/Mapa-4.png");                     //MAPA 4
        this.load.image("MenuSeleccionEscenarios-Mapa-Random", "Sources/Menu-Seleccion-Escenarios/Mapa-Random.png");           //MAPA RANDOM
        this.load.image("MenuSeleccionEscenarios-Mapa-1-Miniatura", "Sources/Menu-Seleccion-Escenarios/Mapa-1-Miniatura.png"); //MAPA 1 MINIATURA
        this.load.image("MenuSeleccionEscenarios-Mapa-2-Miniatura", "Sources/Menu-Seleccion-Escenarios/Mapa-2-Miniatura.png"); //MAPA 2 MINIATURA
        this.load.image("MenuSeleccionEscenarios-Mapa-3-Miniatura", "Sources/Menu-Seleccion-Escenarios/Mapa-3-Miniatura.png"); //MAPA 3 MINIATURA
        this.load.image("MenuSeleccionEscenarios-Mapa-4-Miniatura", "Sources/Menu-Seleccion-Escenarios/Mapa-4-Miniatura.png"); //MAPA 4 MINIATURA
        this.load.image("MenuSeleccionEscenarios-Mapa-Random-Miniatura", "Sources/Menu-Seleccion-Escenarios/Mapa-Random-Miniatura.png"); //MAPA RANDOM MINIATURA
        this.load.image("MenuSeleccionEscenarios-Cambiar-Tiempo", "Sources/Menu-Seleccion-Escenarios/Cambiar-Tiempo.png");       //CAMBIAR TIEMPO
        
        ////JUEGO////
        this.load.image("Juego-Mapa-1", "Sources/Juego/Mapa-1.png");
        this.load.image("Juego-Mapa-2", "Sources/Juego/Mapa-2.png");
        this.load.image("Juego-Mapa-3", "Sources/Juego/Mapa-3.png");
        this.load.image("Juego-Mapa-4", "Sources/Juego/Mapa-4.png");
        this.load.image("Juego-Personaje-1-Jugador-1", "Sources/Juego/Personaje-1-Jugador-1.png");
        this.load.image("Juego-Personaje-1-Jugador-2", "Sources/Juego/Personaje-1-Jugador-2.png");
        this.load.image("Juego-Personaje-2-Jugador-1", "Sources/Juego/Personaje-2-Jugador-1.png");
        this.load.image("Juego-Personaje-2-Jugador-2", "Sources/Juego/Personaje-2-Jugador-2.png");
        this.load.image("Juego-Personaje-3-Jugador-1", "Sources/Juego/Personaje-3-Jugador-1.png");
        this.load.image("Juego-Personaje-3-Jugador-2", "Sources/Juego/Personaje-3-Jugador-2.png");
        this.load.image("Juego-Personaje-4-Jugador-1", "Sources/Juego/Personaje-4-Jugador-1.png");
        this.load.image("Juego-Personaje-4-Jugador-2", "Sources/Juego/Personaje-4-Jugador-2.png");
        this.load.image("Juego-Porteria-1", "Sources/Juego/Porteria-1.png");
        this.load.image("Juego-Porteria-2", "Sources/Juego/Porteria-2.png");
        this.load.image("Juego-Bola", "Sources/Juego/Bola.png");
        this.load.image("Juego-Barrera", "Sources/Juego/Barrera.png");
        this.load.image("Juego-Reloj", "Sources/Juego/Reloj.png");
        this.load.image("Juego-Marcador", "Sources/Juego/Marcador.png");
        
        ////PAUSA////
        this.load.image("Pausa-Reanudar", "Sources/Pausa/Reanudar.png");
        this.load.image("Pausa-Menu", "Sources/Pausa/Menu.png");
        
        ////FINAL////
        this.load.image("Final-Volver-A-Jugar", "Sources/Final/Volver-A-Jugar.png");
        this.load.image("Final-Menu", "Sources/Final/Menu.png");
        
        ////MUSICA////
        this.load.audio("Intro", "Sources/Musica/Intro.mp3");
        this.load.audio("Menu", "Sources/Musica/Menu.mp3");
        this.load.audio("Juego-Mapa-1", "Sources/Musica/Mapa-1.mp3");
        this.load.audio("Juego-Mapa-2", "Sources/Musica/Mapa-2.mp3");
        this.load.audio("Juego-Mapa-3", "Sources/Musica/Mapa-3.mp3");
        this.load.audio("Juego-Mapa-4", "Sources/Musica/Mapa-4.mp3");
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
        musicaIntro = this.sound.add("Intro");
        musicaMenu = this.sound.add("Menu");
        musicaJuego = this.sound.add("Juego-Mapa-1");
        musicaIntro.play();

        ////VARIABLES OBJETOS/IMAGENES////

        //FONDO
        this.fondo = this.add.image(config.scale.width / 2, config.scale.height / 2, "MenuInicio-Fondo");
        this.fondo.setDepth(0);
        
        //TEXTO
        this.texto = this.add.text(config.scale.width / 2, config.scale.height - 175, "Pulsa espacio para empezar");
        this.texto.setOrigin(0.5, 0.5);
        this.texto.setFont("Arial Black");
        this.texto.setFontSize("60px");
        this.texto.setFill("White");
        this.texto.setStroke("Purple", 5);
        
        //ACTIVAR DETECTOR DE EVENTOS DE TECLADO
        this.input.keyboard.on("keydown-" + "SPACE", function(event){
            this.scale.startFullscreen();
            this.scene.start("Menu-Principal"); 
        },this);
        
        //ACTIVAR PARPADEO
        this.time.addEvent({
            delay: 500,
            callback: this.parpadeoOf
        }); 
    };
    
    parpadeoOn() {
        that.texto.setVisible(true);
        that.time.addEvent({
            delay: 500,
            callback: that.parpadeoOf
        }); 
    };
    
    parpadeoOf() {
        that.texto.setVisible(false);
        that.time.addEvent({
            delay: 500,
            callback: that.parpadeoOn
        }); 
    };
};

