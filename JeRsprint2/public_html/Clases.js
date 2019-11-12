//CLASE JUGADOR
function jugador(x, y) {
    var posX = x;
    var posY = y;
    var velX = 0;
    var velY = 0;
    var right = false;
    var left = false;
    var up = false;
    var down = false;
    var selected = false;
    var sizeX;
    var sizeY;
    //var character;

    this.getPosX = function () {
        return posX;
    };
    this.setPosX = function (x) {
        posX = x;
    };
    this.getPosY = function () {
        return posY;
    };
    this.setPosY = function (y) {
        posY = y;
    };
    this.getVelX = function () {
        return velX;
    };
    this.setVelX = function (vx) {
        velX = vx;
    };
    this.getVelY = function () {
        return velY;
    };
    this.setVelY = function (vy) {
        velY = vy;
    };
    this.getRight = function () {
        return right;
    };
    this.setRight = function (r) {
        right = r;
    };
    this.getLeft = function () {
        return left;
    };
    this.setLeft = function (l) {
        left = l;
    };
    this.getUp = function () {
        return up;
    };
    this.setUp = function (u) {
        up = u;
    };
    this.getDown = function () {
        return down;
    };
    this.setDown = function (d) {
        down = d;
    };
    this.setSelectedT = function () {
        selected = true;
    };
    this.setSelectedF = function () {
        selected = false;
    };
    this.getSelected = function () {
        return selected;
    };
    this.setSizeX = function (sx) {
        sizeX = sx;
    };
    this.setSizeY = function (sy) {
        sizeY = sy;
    };
    this.getSizeX = function () {
        return sizeX;
    };
    this.getSizeY = function () {
        return sizeY;
    };
}
;

//CLASE BARRERA
function barrera(x, y, tx, ty) {
    var posX = x;
    var posY = y;
    var tamañoX = tx;
    var tamañoY = ty;

    this.getPosX = function () {
        return posX;
    };
    this.setPosX = function (x) {
        posX = x;
    };
    this.getPosY = function () {
        return posY;
    };
    this.setPosY = function (y) {
        posY = y;
    };
    this.getTamañoX = function () {
        return tamañoX;
    };
    this.getTamañoY = function () {
        return tamañoY;
    };
}
;

//CLASE BOLA
function bola(x, y) {
    var posX = x;
    var posY = y;
    var velX = 0;
    var velY = 0;

    this.getPosX = function () {
        return posX;
    };
    this.setPosX = function (x) {
        posX = x;
    };
    this.getPosY = function () {
        return posY;
    };
    this.setPosY = function (y) {
        posY = y;
    };
    this.getVelX = function () {
        return velX;
    };
    this.setVelX = function (vx) {
        velX = vx;
    };
    this.getVelY = function () {
        return velY;
    };
    this.setVelY = function (vy) {
        velY = vy;
    };
}
;
//CLASE HEXAGONO
function hexagon(x, y) {
    var posX = x;
    var posY = y;
    var sizeX;
    var sizeY;
    var canSelectP1 = false; //ha sido seleccionado por P1
    var canSelectP2 = false; //ha sido seleccionado por P2

    this.setPosX = function (x) {
        posX = x;
    };
    this.setPosY = function (y) {
        posY = y;
    };
    this.getPosX = function () {
        return posX;
    };
    this.getPosY = function () {
        return posY;
    };
    this.setSizeX = function (sx) {
        sizeX = sx;
    };
    this.setSizeY = function (sy) {
        sizeY = sy;
    };
    this.getSizeX = function () {
        return sizeX;
    };
    this.getSizeY = function () {
        return sizeY;
    };
    this.canSelect1True = function () {
        canSelectP1 = true;
    };
    this.canSelect1False = function () {
        canSelectP1 = false;
    };
    this.getCanSelect1 = function () {
        return canSelectP1;
    };
    this.canSelect2True = function () {
        canSelectP2 = true;
    };
    this.canSelect2False = function () {
        canSelectP2 = false;
    };
    this.getCanSelect2 = function () {
        return canSelectP2;
    };
}
;



