var canvas;
var canvasContext;

var mapSection = new MapSection();
var player = new Player();

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.canvas.width = PROJECTION_PLANE_WIDTH * CANVAS_SCALE_FACTOR;
    canvasContext.canvas.height = PROJECTION_PLANE_HEIGHT * CANVAS_SCALE_FACTOR;

    initInput();
    initRenderLoop();
}

function initRenderLoop() {
    gameRunning = setInterval(function () {
        updateEverything();
        drawEverything();
    }, 1000 / FRAMES_PER_SECOND);
}

function updateEverything(){
    player.update();
}

function drawEverything(){
    clearScreen();
    mapSection.draw();
    player.draw();
}