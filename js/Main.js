var canvas;
var canvasContext;

var mapSection = new MapSection();
var player = new Player();

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.canvas.width = PROJECTION_PLANE_WIDTH * CANVAS_SCALE_FACTOR;
    canvasContext.canvas.height = PROJECTION_PLANE_HEIGHT * CANVAS_SCALE_FACTOR;

    canvasBuffer = document.createElement("canvas");
    canvasBufferContext = canvasBuffer.getContext('2d');
    canvasBufferContext.canvas.width = PROJECTION_PLANE_WIDTH;
    canvasBufferContext.canvas.height = PROJECTION_PLANE_HEIGHT;
    var debugID = document.getElementById("EditorExport");
    //debugID.appendChild(canvasBuffer); 

    canvasContext.mozImageSmoothingEnabled = false;
    canvasContext.imageSmoothingEnabled = false;
    canvasContext.msImageSmoothingEnabled = false;
    canvasBufferContext.mozImageSmoothingEnabled = false;
    canvasBufferContext.imageSmoothingEnabled = false;
    canvasBufferContext.msImageSmoothingEnabled = false;

    loadImages();
    initInput();
    //initRenderLoop();
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
    clearScreen('grey');
    mapSection.draw3DProjectedWalls();
    canvasContext.drawImage(canvasBuffer, 0, 0, canvasBuffer.width, canvasBuffer.height, 0, 0, canvas.width, canvas.height);
    mapSection.draw2DMinimap();
    player.draw();

    //canvasContext.drawImage(spriteList['wall'], 0, 0);
}