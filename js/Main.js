var objectsToUpdate = [];
var mapSection = new MapSection();
var testObject = new GameObject(400, 240, 0, shipExterior, 0, 1, 0);
var inventory = new Inventory();
var player = new Player();
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

    pollGamepad();
    
    objectsToUpdate.forEach(object => object.update());

    if (showDebugText) {
        const debugParagraph = document.getElementById('debug-text')
        debugParagraph.innerText = levelEditorEnabled ? `Press 'L' to exit Editor Mode` : `Press 'L' to enter Editor Mode`
    }
    if(levelEditorEnabled){
        updateLevelEditor();
    }

    objectsToUpdate.sort((a, b) => (a.distanceToPlayer < b.distanceToPlayer) ? 1 : -1);
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
        mapSection.drawCeilingAndFloor();

        mapSection.draw3DProjectedWalls();
        mapSection.draw2DMinimap();

        player.draw();

        testObject.draw2D();

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

