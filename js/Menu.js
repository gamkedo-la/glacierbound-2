const MENUSTATE_NONE = 0;
const MENUSTATE_PAUSED = 1;
const MENUSTATE_OPTIONS = 2;
const MENUSTATE_CONTROLS = 3;
var menuState = MENUSTATE_NONE;

function isPaused() {
    return (menuState != MENUSTATE_NONE);
}

const MENU_RESUME = 0;
const MENU_OPTIONS = 1;
const MENU_CONTROLS = 2;
const MENU_QUIT = 3;
const MENU_LAST_ITEM = MENU_QUIT;
var selected = MENU_RESUME; // default pause menu option selected

var optionsList = ['RESUME', 'OPTIONS', 'CONTROLS', 'QUIT'];
function showPauseMenu() {
    // if the game is paused, display the pause menu
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

controlsList = ['FORWARD', 'BACKWARD', 'TURN LEFT', 'TURN RIGHT', 'STRAFE LEFT', 'STRAFE RIGHT', 'SPRINT', 'INVENTORY'];
function showControlsMenu() {
    // Display the CONTROLS menu where the player can modify the keyboard inputs
    var windowWidth = bufferedHUDCanvas.width / 2; // width of pause menu, to center it
    var headingHeight = 60;
    var optionHeight = 30;
    var extraBottom = 80;
    var menuShiftY = 40;
    var boxHeight = headingHeight + optionHeight * controlsList.length + extraBottom;

    // black background
    colorRect((bufferedHUDCanvas.width - windowWidth) / 2, (bufferedHUDCanvas.height - boxHeight) / 2 + menuShiftY, windowWidth, boxHeight, "#000000", bufferedHUDCanvasContext);
    // pink border
    drawRect((bufferedHUDCanvas.width - windowWidth) / 2, (bufferedHUDCanvas.height - boxHeight) / 2 + menuShiftY, windowWidth, boxHeight, "#ffffff", 5, bufferedHUDCanvasContext);
    
    // menu text
    var textY = 215;

    colorText('CONTROLS', bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, textY, '50px Share Tech Mono', "center", "#ffffff");
    textY += 55;
    for (var i = 0; i < controlsList.length; i++) {
        colorText(controlsList[i] + ":", bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2 + 25, textY, '20px Share Tech Mono', 'right', '#00ff00');
        textY += optionHeight;
    }
    
    drawBufferedCanvasToScreenCanvas(bufferedHUDCanvas);
}

function pauseInputHandler(evt) {
    if (evt.keyCode === KEY_ENTER) {
        console.log(optionsList[selected]);
        switch (selected) {
            case MENU_RESUME:
                menuState = MENUSTATE_NONE;
                break;
            case MENU_OPTIONS:
                console.log('options menu not yet implemented');
                break;
            case MENU_CONTROLS:
                menuState = MENUSTATE_CONTROLS;
                showControlsMenu();
                break;
            case MENU_QUIT:
                console.log('quit not yet implemented');
                break;
        }
    }

    if (evt.keyCode === KEY_LETTER_W || evt.keyCode === KEY_UP_ARROW) {
        selected--;
        if (selected < 0) {
            selected = optionsList.length - 1;
        }
    }

    if (evt.keyCode === KEY_LETTER_S || evt.keyCode === KEY_DOWN_ARROW) {
        selected++;
        if (selected >= optionsList.length) {
            selected = 0;
        }
    }
}

