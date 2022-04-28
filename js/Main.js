var mapSection = new MapSection();
var player = new Player();
var debugModeEnabled = true;
var levelEditorEnabled = false;
var paused = false;
// practice commit - will remove
window.onload = function () {
    loadImages();
    initInput();
    initCanvases();
    initLevelEditor();
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
        colorText('PAUSED', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, bufferedHUDCanvas.height / 2, '50px sans-serif', "center", "yellow", "black");
        drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);
    } else {
        clearAllCanvases();
        colorRect(0, 0, bufferedGameCanvas.width, bufferedGameCanvas.height, 'grey', bufferedGameCanvasContext, 1);

        mapSection.drawSkyPanorama();
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

        if (levelEditorEnabled) {
            drawLevelEditor();
            drawBufferedCanvasToScreenCanvas(bufferedLevelEditorCanvas);
        }
    }
}