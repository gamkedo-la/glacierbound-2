var mapSection = new MapSection();
var inventory = new Inventory();
var player = new Player();
var debugModeEnabled = true;
var levelEditorEnabled = false;
var showDebugText = true;
var paused = false;
const MENU_RESUME = 0;
const MENU_OPTIONS = 1;
const MENU_CONTROLS = 2;
const MENU_QUIT = 3;
const MENU_LAST_ITEM = MENU_QUIT;
var selected = MENU_RESUME; // default pause menu option selected

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
    bookItem.update();
    if (showDebugText) {
        const debugParagraph = document.getElementById('debug-text')
        debugParagraph.innerText = levelEditorEnabled ? `Press 'L' to exit Editor Mode` : `Press 'L' to enter Editor Mode`
    }
    if(levelEditorEnabled){
        updateLevelEditor();
    }
}

function drawEverything(){

    if (paused) {
        // show the pause menu, contained in its own function
        showPauseMenu();
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

var optionsList = ['RESUME', 'OPTIONS', 'CONTROLS', 'QUIT'];
function showPauseMenu() {
    // if the game is paused, display the pause menu
    // currently this only shows the text 'PAUSED', there is no menu
    var pauseWidth = bufferedHUDCanvas.width / 2; // width of pause menu, to center it
    var headingHeight = 60;
    var optionHeight = 50;
    var extraBottom = 50;
    var menuShiftY = 10;
    var boxHeight = headingHeight + optionHeight * optionsList.length + extraBottom;

    // black background
    colorRect((bufferedHUDCanvas.width - pauseWidth) / 2, (bufferedHUDCanvas.height - boxHeight) / 2 + menuShiftY, pauseWidth, boxHeight, "#000000", bufferedHUDCanvasContext);
    // pink border
    drawRect((bufferedHUDCanvas.width - pauseWidth) / 2, (bufferedHUDCanvas.height - boxHeight) / 2 + menuShiftY, pauseWidth, boxHeight, "#ff00ff", 5, bufferedHUDCanvasContext);
    
    // menu text
    var textY = 215;

    colorText('PAUSED', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, textY, '50px Share Tech Mono', "center", "#ffffff");
    textY += headingHeight;
    for (var i = 0; i < optionsList.length; i++) {
        var showIfSelected = optionsList[i];
        if (i == selected) {
            showIfSelected = '[' + showIfSelected + ']';
        }
        colorText(showIfSelected, bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, textY, '40px Share Tech Mono', 'center', '#00ff00');
        textY += optionHeight;
    }
    
    drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);
}
