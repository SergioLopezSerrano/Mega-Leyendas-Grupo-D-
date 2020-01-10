# LEGENDS REALM
## Game Design Document
--------------------------------------------------------
##### 10 de Enero de 2020
###### Fase 4
--------------------------------------------------------
#### Somos el equipo D, Mega Leyendas:  
##### David González Bella (d.gonzalezb.2017@alumnos.urjc.es ; DavidGonzalezBella)
##### Alexandra Izquierdo Esteban (a.izquierdoe.2017@alumnos.urjc.es ; Sainnyk)
##### Sergio López Serrano (s.lopezs.2017@alumnos.urjc.es ; SergioLopezSerrano)
##### David Martínez Costana (d.martinezco.2017@alumnos.urjc.es ; deividmcmj)
##### Marcos Montero Domínguez (m.monterod.2017@alumnos.urjc.es ; MarcosMD15)
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
6. Actualizaciones y novedades de la fase 2
7. Actualizaciones y novedades de la fase 3
8. Actualizaciones y novedades de la fase 4
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

![Bocetos de personajes](https://i.imgur.com/txfmf2R.jpg)

![Inspiración de personajes](https://i.imgur.com/Ra56mO6.jpg)

--------------------------------------------------------------------------------------------------

### 4. Funcionalidades principales
Usaremos WASD para mover a nuestro personaje y el puntero del ratón para girarlo. El número de habilidades por personaje puede variar, pero las teclas principales para usarlos serán Q, E, Mayús. Izq. y, dado el caso, Alt.  
Para coger el balón, se mantiene pulsado ESPACIO y al soltarlo, soltaremos el balón en la dirección del movimiento.  
![Teclas](https://i.imgur.com/H1RIQX8.png)

--------------------------------------------------------------------------------------------------

### 5. Organización
Para organizar al equipo, disponemos de [este tablero de Trello](https://trello.com/b/3iwQia61)

---------------------------------------------------------------------------------------------------

### 6. Actualizaciones y novedades de la fase 2
#### Controles para dos jugadores
En esta fase hemos desarrollado el juego en local para dos jugadores. Para esto, hemos tenido que hacer algunas modificaciones a los controles:

![Controles multijugador local](https://i.imgur.com/1h8hKbv.png)

En esta foto vemos como el jugador 1 (rojo) usa los botones WASD para moverse y el espacio como botón de acción, para seleccionar personaje en la pantalla de personaje y para coger la pelota cuando se está jugando.  
Por otro lado, el jugador 2 (azul) usa las flechas para moverse y el 0 como botón de acción, para seleccionar personaje en la pantalla de personaje y para coger la pelota cuando se está jugando.

#### ¡Estas son las Mega Leyendas!
###### (Diseños originales hechos por nuestra artista principal, Álex)
![Fikhu](https://i.imgur.com/iTVhAZ5.png)
![Ko'rim](https://i.imgur.com/aa3cAkd.png)
![Mizumi](https://i.imgur.com/KPzbAmH.png)
![Niva](https://i.imgur.com/358Dwch.png)

#### ¡Diseño original!
###### (Diseños originales hechos por nuestra artista principal, Álex)
###### (Excepto los mapas y la pelota)
**Pantalla de inicio**
![PantalladeInicio](https://i.imgur.com/iynKIEM.png)

**Menú de selección**
![MenuSeleccion](https://i.imgur.com/u771q79.png)

**Menú de selección de personajes**
![SeleccionPersonajes](https://i.imgur.com/W9t9Gwi.png)

**Menú de selección de mapa**
![Mapas](https://i.imgur.com/2KkN1My.jpg)

**Juego en vivo**
![Juego](https://i.imgur.com/T2gdKgi.png)

**Menú de pausa**
![Pausa](https://i.imgur.com/X6FuM24.png)

**Final del juego y resultados**
![FinJuego](https://i.imgur.com/XwatKjc.png)

#### Conclusiones y futuras mejoras
Para las siguientes fases (e idealmente para antes de la entrega de esta misma) trataremos de terminar de mover el código a Phaser. Tenemos varios archivos funcionando ya en Phaser, pero no todos.  
En la próxima fase modificaremos los controles para que se juegue con teclado y ratón, ya que implementaremos vida de los jugadores y disparos. Se usará el ratón para apuntar y los controles actuales para movernos y coger la pelota.  
¡Esperamos que os gusten las futuras mejoras!

-----------------------------------------------------------------------------------------------------------------------------------


### 7. Actualizaciones y novedades de la fase 3
#### Seguimos con el modo local
Controles y modo de juego indicados en la fase 2.

#### ¡Algunos rediseños teniendo en cuenta las indicaciones anteriores!
###### (Diseños originales hechos por nuestra artista principal, Álex)
###### (Excepto los mapas y la pelota, aunque esta última tiene un rediseño un poco más curioso)
Podemos observar en todo momento que está el apartado de ver u ocultar los jugadores que hay en línea.

**Pantalla de selección de nombre**
![PantalladeNombre](https://i.imgur.com/OHfeYc3.png)

**Pantalla de inicio**
![PantalladeInicio](https://i.imgur.com/Fl2FFPf.png)

**Menú de selección**
![MenuSeleccion](https://i.imgur.com/7IamQ3d.png)

**Menú de Controles**
![MenuControles](https://i.imgur.com/kuVl5vz.png)

**Menú de Créditos**
![MenuCreditos](https://i.imgur.com/RxidFUa.png)

**Menú de selección de personajes**
![SeleccionPersonajes](https://i.imgur.com/BHDTdHh.png)

**Menú de selección de mapa**
![Mapas](https://i.imgur.com/xtksOmm.png)

**Juego en vivo**
![Juego](https://i.imgur.com/U8GcAOO.png)

¡Mención especial a la sustitución de los placeholders por otras barreras y el diseño del marcador y el tiempo!

**Menú de pausa**
![Pausa](https://i.imgur.com/xlaGrx5.png)

**Final del juego y resultados**
![FinJuego](https://i.imgur.com/CLXmsJz.png)

#### Mejoras
**¡¡¡PHASER!!!** ¡Al fin hemos conseguido hacer el port completo a Phaser!  
Además de esa gran mejora a nivel funcional, cabe destacar las mejoras artísticas ya mencionadas en el apartado anterior.  
La otra gran mejora del juego, y la funcionalidad principal de esta fase, es la inclusión del back-end con API REST.  
Cuando un jugador se conecta al servidor, hace un GET para recibir el HTML y poder jugar al juego. El juego le pide al jugador un nombre de usuario. El jugador introduce su nombre por teclado y clica en un botón para enviar la información e iniciar el juego.  
El cliente hace un POST con los datos del jugador: la ID, asignada por el servidor, el nombre, elegido por el usuario y una variable "conectado" para saber si el usuario está o no online. También aumenta en uno el contador de usuarios conectados en el momento.  
Al desconectarse, el cliente hace un PUT, y modifica el estado de "conectado" a falso. El jugador mantiene reservada esa ID, pero el contador de jugadores conectados disminuirá, y aparecerá como desconectado. Si se vuelve a conectar, recuperará su ID y aumentará el número de jugadores conectados.   
Tenemos comentada una línea de código para, en vez de hacer un PUT, hacer directamente un DELETE del usuario, pero de momento preferimos la opción de diseño del PUT.  
Para visualizar los jugadores que hay conectados en el momento, podemos usar la tecla "U" que nos mostrará la ID, los nombres y el estado de todos los jugadores (con el nuestro algo más destacado). Si no pulsamos la "U" aparece simplemente un texto con la cantidad de usuarios conectados:

![Pulsar U](https://i.imgur.com/Hj6Hu6P.png)

![JugadroesConectados](https://i.imgur.com/Zn7dCZY.png)

#### Diagrama de clases

![DiagramaDeClases](https://i.imgur.com/uebhrrY.png)

#### Conclusiones y futuras mejoras
Estamos muy contentos con el resultado de esta fase ya que hemos avanzado muchísimo y hemos podido tener todo bien y a tiempo.
Para futuras versiones se implementarán los WebSockets y trataremos de incluir funcionalidades que hagan el juego más entretenido.
¡Esperamos que os gusten las futuras mejoras!

#### Referencias para los backgrounds
Agua -- Water Background by FireKnight90 on DeviantArt -- (https://www.deviantart.com/fireknight90/art/Water-Background-464156203)

Fuego -- Background firewall 03 by AStoKo on DeviantArt -- (https://www.deviantart.com/astoko/art/Background-firewall-03-709613940)

Bosque -- Cartoon Forest Scene 02 3D model -- (https://www.cgtrader.com/3d-models/exterior/landscape/cartoon-forest-scene-02)

Chuche -- Dulces fondo de pantalla - dulces fondo de pantalla (40197064) - fanpop (http://es.fanpop.com/clubs/candy/images/40197064/title/candy-wallpapers-wallpaper)

#### Referencias para la música
música de fuego -- (https://www.youtube.com/watch?v=DvOmz2jvyGI)

música de bosque -- (https://www.youtube.com/watch?v=wNMfmoNfJb8)

música de los menús -- (https://www.youtube.com/watch?v=_WnXWy5rfSU)

música de agua -- (https://www.youtube.com/watch?v=IR243woyHmU)

música de chuche -- (https://www.youtube.com/watch?v=cli97CymUmQ)

música de inicio -- (https://www.youtube.com/watch?v=5ov6lzqWjmk)

-----------------------------------------------------------------------------------------------------------------------------------


### 8. Actualizaciones y novedades de la fase 4
#### ¡Modo online!
Esto significa que sólo hay un jugador en cada máquina, por lo tanto, se usan los controles del jugador 1: WASD para moverse y la Barra Espaciadora para coger la bola.

#### ¡Algunas cosas nuevas!
###### (Diseños originales hechos por nuestra artista principal, Álex)
###### (Excepto los mapas y la pelota, aunque esta última tiene un rediseño un poco más curioso)

Por desgracia, por falta de timepo se me hace imposible actualizar las capturas d epantalla de esta fase.
¡Jugad y vedlo por vosotros mismos!

#### Mejoras
¡API REST y WebSockets!
Hemos mantenido las funcionalidades de API REST de la anterior fase y hemos añadido unas cuantas más para la gestión de las partidas. El juego puede mantener 20 partidas a la vez, con 2 jugadores activos en cada partida y más jugadores en la aplicación (aunque, alcanzado el límite de 20 partidas creadas, no podrían crear ninguna más). 
Al crear una partida, se usa la API REST que controla el juego para hacer un POST de una nueva partida con el usuario que la crea asociado a ella. El jugador 2 busca una partida y se une a la que quiera, haciendo un PUT de ese usuario 2 en la partida correspondiente. Una vez los dos jugadores están en la partida, pasan al menú de selección de personajes, en el que cada uno elige al que quiera. Después de esto, el jugador 2 va a una sala de espera mientras el jugador 1 escoge el mapa y el tiempo de juego. Tras elegir eso, el jugador uno va a esa sala de espera también para sincronizarse y ambos inician la comunicación por WebSocket.
La comunicación WebSocket consiste en lo siguiente: el jugador 1 se encarga de las varibales globales (funciona como un host para los elementos comunes a los dos jugadores: la bola (con su velocidad y aceleración), el tiempo, el mapa, el marcador y comprobar si el juego ha terminado o no) y a su vez envía su posición (también velocidad y aceleración) y si está cogiendo o no la bola. El jugador 2, por su parte, sólo envía su posición y si está cogiendo o no la bola. De esta forma, el jugador 1 se encarga de la logística y el funcionamiento general del juego (ya que si se encargaran los dos habría conflictos).
En otros aspectos generales del juego, si por ejemplo uno de los dos jugadores se va, cierra la conexión y destruye la partida. Dado este caso, el otro jugador volverá al menú de inicio directamnete.

#### Conclusiones
Ha sido una fase muy complicada en la que hemos tenido muchos problemas, pero ha sido satisfactorio ver el resultado final.

#### Referencias para los backgrounds
Agua -- Water Background by FireKnight90 on DeviantArt -- (https://www.deviantart.com/fireknight90/art/Water-Background-464156203)

Fuego -- Background firewall 03 by AStoKo on DeviantArt -- (https://www.deviantart.com/astoko/art/Background-firewall-03-709613940)

Bosque -- Cartoon Forest Scene 02 3D model -- (https://www.cgtrader.com/3d-models/exterior/landscape/cartoon-forest-scene-02)

Chuche -- Dulces fondo de pantalla - dulces fondo de pantalla (40197064) - fanpop (http://es.fanpop.com/clubs/candy/images/40197064/title/candy-wallpapers-wallpaper)

#### Referencias para la música
música de fuego -- (https://www.youtube.com/watch?v=DvOmz2jvyGI)

música de bosque -- (https://www.youtube.com/watch?v=wNMfmoNfJb8)

música de los menús -- (https://www.youtube.com/watch?v=_WnXWy5rfSU)

música de agua -- (https://www.youtube.com/watch?v=IR243woyHmU)

música de chuche -- (https://www.youtube.com/watch?v=cli97CymUmQ)

música de inicio -- (https://www.youtube.com/watch?v=5ov6lzqWjmk)
