var allObjects = [];
var mapSection = new MapSection();
var testObject;
var inventory = new Inventory();
var player = new Player();
var debugModeEnabled = true;
var levelEditorEnabled = false;
var showDebugText = true;
var gameStarted = false;

//Practice Commit - will remove

window.onload = function () {
    loadImages();
    initInput();
    initCanvases();
    initLevelEditor();
    initMapGameObjects();
}

function initRenderLoop() { //called from ImageLoading.js
    gameRunning = setInterval(function () {
        pollMouseButtons(); // used to detect click, so may need to get out of pause menu, too

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
    
    allObjects.forEach(object => object.update());

    if (showDebugText) {
        const debugParagraph = document.getElementById('debug-text')
        debugParagraph.innerText = levelEditorEnabled ? `Press 'L' to exit Editor Mode` : `Press 'L' to enter Editor Mode`
    }
    if(levelEditorEnabled){
        updateLevelEditor();
    }

    allObjects.sort((a, b) => (a.distanceToPlayer < b.distanceToPlayer) ? 1 : -1);
}

function drawEverything(){

    if (!gameStarted){
        clearAllCanvases();
        drawTitleScreen();
        drawBufferedCanvasToScreenCanvas(titleScreenCanvas);
    } else {

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

            mapSection.draw2DMinimap();
            player.draw();
            allObjects.forEach(object => object.draw2D());
    
            mapSection.drawCeilingAndFloor();
            mapSection.draw3DProjectedWalls();
            allObjects.forEach(object => object.draw());
            
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
}