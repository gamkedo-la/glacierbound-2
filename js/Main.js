var canvas;
var canvasContext;

var mapSection = new MapSection();
var player = new Player();

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.canvas.width = PROJECTION_PLANE_WIDTH;
    canvasContext.canvas.height = PROJECTION_PLANE_HEIGHT;

    initInput();
    initRenderLoop();
}

function initRenderLoop() {
    var framesPerSecond = 60;
    gameRunning = setInterval(function () {
        update();
    }, 1000 / framesPerSecond);
}

function update(){
    updateEverything();
    drawEverything();
}

function updateEverything(){
    player.update();
}

function drawEverything(){
    mapSection.draw();
    player.draw();
}