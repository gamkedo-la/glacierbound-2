var mapSection = new MapSection();
var player = new Player();
var debugModeEnabled = true;

window.onload = function () {
    loadImages();
    initInput();
    initCanvases();
}

function initRenderLoop() { //called from ImageLoading.js
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
    mapSection.draw2DMinimap();
    player.draw();

    drawBufferedCanvasToScreenCanvas(bufferedGameCanvas);
    drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);
    if (debugModeEnabled) drawBufferedCanvasToScreenCanvas(bufferedDebugCanvas);
}