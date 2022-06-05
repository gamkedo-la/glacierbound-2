var mapSection = new MapSection();
var inventory = new Inventory();
var player = new Player();
var shipExit = new MapSectionExit(100, 240, arcticExterior);
var debugModeEnabled = true;
var levelEditorEnabled = false;
var showDebugText = true;

window.onload = function () {
    loadImages();
    initInput();
    initCanvases();
    initLevelEditor();
}

function initRenderLoop() { //called from ImageLoading.js
    gameRunning = setInterval(function () {
        if (isPaused()) {
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
    bookItem.update();
    shipExit.update();
    if (showDebugText) {
        const debugParagraph = document.getElementById('debug-text')
        debugParagraph.innerText = levelEditorEnabled ? `Press 'L' to exit Editor Mode` : `Press 'L' to enter Editor Mode`
    }
    if(levelEditorEnabled){
        updateLevelEditor();
    }
}

function drawEverything(){

    if (isPaused()) {
        // show the pause menu, contained in its own function
        if (menuState === MENUSTATE_CONTROLS) {
            showControlsMenu();
        }
        if (menuState === MENUSTATE_PAUSED) {
            showPauseMenu();
        }
    } else {

        clearAllCanvases();

        if (mapSection.grid == shipInterior.grid) {
            mapSection.drawSky('sky_ship');
            mapSection.drawFloor('floor_ship');
            mapSection.draw3DProjectedWallReflections(); // work in progress...
        } else {
            mapSection.drawSky('sky_clouds');
            mapSection.drawFloor('floor_snow');
        }

        mapSection.draw3DProjectedWalls();
        mapSection.draw2DMinimap();
        shipExit.draw2D();

        player.draw();

        inventory.draw();

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

