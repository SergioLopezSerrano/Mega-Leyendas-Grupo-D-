/* global Phaser, MenuInicio, MenuPrincipal, MenuControles, MenuCreditos, Servidores, EsperandoJugador, UnirsePartida, EstablecerWebsocket, MenuSeleccionPersonajes1, MenuSeleccionPersonajes2, MenuSeleccionEscenarios, SalaEspera, Juego1, Juego2, Pausa, Final */

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
            debug: false
        }  
    },

    scene: [MenuInicio, MenuPrincipal, MenuControles, MenuCreditos, Servidores, EsperandoJugador, UnirsePartida, EstablecerWebsocket, MenuSeleccionPersonajes1, MenuSeleccionPersonajes2, MenuSeleccionEscenarios, SalaEspera, Juego1, Juego2, Pausa, Final]
};
////VARIABLES GLOBALES////
var that = null;
var right = [false, false];
var left = [false, false];
var up = [false, false];
var down = [false, false];
var tiempo = 30;
var personajeJugador = [1, 1];
var escenario = 0;
var resultado = [0, 0];
var musicaIntro;
var musicaMenu;
var musicaJuego;

//Variable websocket
var connection = null;

//VARIABLE JUEGO
var game;

//VARIABLES USUARIO
var idJugador = null;
var nombreJugador = null;
var idPartida = null;
var idJugadorPartida = null;
var idOtroJugador = null;
var nombreOtroJugador = null;

var otroJugadorPreparado = false;

var usuariosVisibles = false;


