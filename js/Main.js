var mapSection = new MapSection();
var player = new Player();
var debugModeEnabled = true;
var levelEditorEnabled = false;
var paused = false;
var selected = 0; // default pause menu option selected

window.onload = function () {
    loadImages();
    initInput();
    initCanvases();
    initLevelEditor();
}

function initRenderLoop() { //called from ImageLoading.js
    gameRunning = setInterval(function () {
        if (paused) {
            // if the game is paused, we only want to draw the game as it stands, we don't want it updated
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
        // show the pause menu, contained in its own function
        showPauseMenu();
    } else {

        clearAllCanvases();

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

function showPauseMenu() {
    // if the game is paused, display the pause menu
    // currently this only shows the text 'PAUSED', there is no menu
    var pauseWidth = bufferedHUDCanvas.width / 2; // width of pause menu, to center it

    // grey background
    colorRect((bufferedHUDCanvas.width - pauseWidth) / 2, (bufferedHUDCanvas.height - 250) / 2, pauseWidth, 250, "#d1d1d1", bufferedHUDCanvasContext);
    drawRect((bufferedHUDCanvas.width - pauseWidth) / 2, (bufferedHUDCanvas.height - 250) / 2, pauseWidth, 250, "#ff00ff", 5, bufferedHUDCanvasContext);
    
    // menu text
    colorText('PAUSED', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, 215, '50px Share Tech Mono', "center", "#00ff00", "black");
    if (selected == 0) {
        colorText('[OPTIONS]', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, 275, '40px Share Tech Mono', 'center', '#00ff00', 'black');
    } else {
        colorText(' OPTIONS ', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, 275, '40px Share Tech Mono', 'center', '#00ff00', 'black');
    }
    if (selected == 1) {
        colorText('[CONTROLS]', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, 325, '40px Share Tech Mono', 'center', '#00ff00', 'black');
    } else {
        colorText(' CONTROLS ', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, 325, '40px Share Tech Mono', 'center', '#00ff00', 'black');
    }
    if (selected == 2) {
        colorText('[QUIT]', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, 375, '40px Share Tech Mono', 'center', '#00ff00', 'black');
    } else {
        colorText(' QUIT ', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, 375, '40px Share Tech Mono', 'center', '#00ff00', 'black');
    }
    
    drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);
}