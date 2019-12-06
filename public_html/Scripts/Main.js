/* global Phaser, MenuInicio, MenuPrincipal, MenuControles, MenuCreditos, MenuSeleccionPersonajes, MenuSeleccionEscenarios, Juego, Pausa, Final*/

var config = {
    type: Phaser.AUTO,

    scale: {
        mode: Phaser.Scale.FIT,
        parent: "phaser-example",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },

    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }  
    },

    scene: [MenuInicio, MenuPrincipal, MenuControles, MenuCreditos, MenuSeleccionPersonajes, MenuSeleccionEscenarios, Juego, Pausa, Final]
};

////VARIABLES GLOBALES////
var that;
var right = [false, false];
var left = [false, false];
var up = [false, false];
var down = [false, false];
var tiempo = 0;
var personajeJugador = [0, 0];
var escenario = 0;
var resultado = [0, 0];
var musicaIntro;
var musicaMenu;
var musicaJuego;

//VARIABLE JUEGO
var game = new Phaser.Game(config);  


