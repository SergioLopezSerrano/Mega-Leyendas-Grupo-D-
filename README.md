# Legends Realm
## Game Design Document
--------------------------------------------------------
##### 9 de Octubre de 2019
###### Fase 1
--------------------------------------------------------
#### Mega-Leyendas-Grupo-D
##### David González Bella
##### Alexandra Izquierdo Esteban
##### Sergio López Serrano
##### David Martínez Costana
##### Marcos Montero Domínguez
--------------------------------------------------------

## Índice
1. Introducción  
  1.1 Concepto del juego  
  1.2 Características principales
2. Mecánicas del juego  
  2.1 Objetivo  
  2.2 Jugabilidad
3. Personajes
4. Funcionalidades principales
5. Organización
-------------------------------------------------------

### 1. Introducción
Este es el Documento de Diseño de Juego de *Legends Realm*, un videojuego multijugador con funcionalidades online para PC de dos jugadores, uno contra uno. Desarrollado en Java/JavaScript y optimizado para conseguir la máxima fluidez posible.  
Este documento servirá de guía para plasmar todos los elementos de los que dispone *Legends Realm* y servir como carta de presentación del mismo.

#### 1.1 Concepto del juego
*Legends Realm* es un juego de deportes 2D en vista cenital en el que controlaremos a una *Mega-Leyenda* y nos enfrentaremos a otra en un terreno de juego con obstáculos, dos porterías y un balón. Deberemos conseguir el balón y llevarlo hasta la portería contraria para ganar.

![Mapa](https://i.imgur.com/2R93BbN.jpg)

#### 1.2 Características principales
  - **Táctica**: si bien el objetivo es sencillo, *Legends Realm* depende mucho de tener una buena estrategia para intentar engañar al oponente, sortear los obstáculos y marcar.
  - **Dinamismo**: a pesar de tener que pensar una buena estrategia, debes hacerlo rápido, ya que el contrincante intentará robarte el balón y marcar.
  - **Ampliación**: *Legends Realm* tiene una característica ampliable clara: escenarios y personajes. El juego debe estar abierto a la posibilidad de introducir nuevos personajes con habilidades únicas y nuevos mapas con diferentes obstáculos y temáticas.
--------------------------------------------------------------------------------

### 2. Mecánicas del juego
En este apartado presentaremos la forma de jugar y el objetivo para ganar la partida.

#### 2.1 Objetivo
El objetivo del juego es **conseguir más puntos que el contrario**. La partida dispondrá de un límite de tiempo de **3 minutos** en los cuales tendremos que hacernos con el control del balón y sortear tanto al enemigo como a los obstáculos para llegar a **marcar en la portería enemiga**. Cada gol es un punto y **gana el jugador con más puntos cuando se acabe el tiempo**.

#### 2.2 Jugabilidad
Para conseguir el objetivo del juego disponemos de las siguientes herramientas:
  - **Movilidad**: los personajes disponen de mucha fluidez de movimiento, punto clave para conseguir ejecutar tácticas rápidas.
  - **Obstáculos**: el mapa presenta una serie de obstáculos que dificultarán la tarea del jugador para marcar gol, por tanto, serán parte fundamental a tener en cuenta a la hora de pensar la estrategia.
  - **Ataques básicos**: todos los personajes disponen de ataques básicos para atacar al enemigo.
  - **Habilidades especiales**: los personajes son únicos y poseen diferentes habilidades que hace de la experiencia de juego diferente entre cada uno de ellos.
  - **Mejoras y desventajas**: aparecerán de forma aleatoria por el mapa ciertos "objetos" que el jugador podrá coger. Éstos pueden ser mejoras (por ejemplo, más velocidad) o desventajas (por ejemplo, menos velocidad).
---------------------------------------------------------------------------------------------

### 3. Personajes
Para que sea más entretenido, *Legends Realm* cuenta con varios personajes únicos, llamados *Mega-Leyendas*. Estos personajes poseen estética y habilidades diferentes entre sí. De este modo, puedes escoger el que más te guste o el que mejor se amolde a tu estilo de juego

![Bocetos de personajes](https://i.imgur.com/Ra56mO6.jpg)

![Inspiración de personajes](https://i.imgur.com/txfmf2R.jpg)

--------------------------------------------------------------------------------------------------

### 4. Funcionalidades principales
Usaremos WASD para mover a nuestro personaje y el puntero del ratón para girarlo. El número de habilidades por personaje puede variar, pero las teclas principales para usarlos serán Q, E, Mayús. Izq. y, dado el caso, Alt.  
Para coger el balón, se matiene pulsado ESPACIO y al soltarlo, soltaremos el balón en la dirección del movimiento.
![Teclas]

--------------------------------------------------------------------------------------------------

### 5. Organización
Para organizar al equipo, disponemos de [este tablero de Trello](https://trello.com/b/3iwQia61)
