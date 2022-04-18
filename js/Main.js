var mapSection = new MapSection();
var player = new Player();
var debugModeEnabled = true;
var paused = false;

window.onload = function () {
    loadImages();
    initInput();
    initCanvases();
}

function initRenderLoop() { //called from ImageLoading.js
    gameRunning = setInterval(function () {
        if (paused) {
            drawEverything();
        } else {
            updateEverything();
            drawEverything();
        }
    }, 1000 / FRAMES_PER_SECOND);
}

function updateEverything(){
    player.update();
}

function drawEverything(){
    if (paused) {
        // if the game is paused, display the pause menu
        // currently this only shows the text 'PAUSED', there is no menu
        screenCanvasContext.font = '50px sans-serif';
        screenCanvasContext.textAlign = "center";
        screenCanvasContext.fillStyle = "yellow";
        screenCanvasContext.fillText('PAUSED', screenCanvas.width / 2, screenCanvas.height / 2);
        screenCanvasContext.fillStyle = "black";
        screenCanvasContext.strokeText('PAUSED', screenCanvas.width / 2, screenCanvas.height / 2);
    } else {
        clearScreen('grey');
        mapSection.draw3DProjectedWalls();
        mapSection.draw2DMinimap();
        player.draw();

        drawBufferedCanvasToScreenCanvas(bufferedGameCanvas);
        drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);
        if (debugModeEnabled) drawBufferedCanvasToScreenCanvas(bufferedDebugCanvas);
    }
}