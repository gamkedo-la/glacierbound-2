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
        bufferedHUDCanvasContext.font = '50px sans-serif';
        bufferedHUDCanvasContext.textAlign = "center";
        bufferedHUDCanvasContext.fillStyle = "yellow";
        bufferedHUDCanvasContext.fillText('PAUSED', bufferedHUDCanvas.width / 2, bufferedHUDCanvas.height / 2);
        bufferedHUDCanvasContext.fillStyle = "black";
        bufferedHUDCanvasContext.strokeText('PAUSED', bufferedHUDCanvas.width / 2, bufferedHUDCanvas.height / 2);
        drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);
    } else {
        clearScreen('grey');
        mapSection.draw3DProjectedWalls();
        mapSection.draw2DMinimap();
        player.draw();

        drawBufferedCanvasToScreenCanvas(bufferedGameCanvas);
        drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);

        if (debugModeEnabled){
            screenCanvas.style.cursor = "auto";
            drawBufferedCanvasToScreenCanvas(bufferedDebugCanvas);
        } else {
            screenCanvas.style.cursor = "none";
        }
    }
}