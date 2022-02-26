var canvas;
var canvasContext;

var mapSection = new MapSection();

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.canvas.width = PROJECTION_PLANE_WIDTH;
    canvasContext.canvas.height = PROJECTION_PLANE_HEIGHT;

    initRenderLoop();
}

function initRenderLoop() {
    var framesPerSecond = 60;
    gameRunning = setInterval(function () {
        update();
    }, 1000 / framesPerSecond);
}

function update(){
    moveEverything();
    drawEverything();
}

function moveEverything(){

}

function drawEverything(){
    mapSection.draw();
}