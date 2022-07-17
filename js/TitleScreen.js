var showingCredits = false;
var wasMouseDown = false;

function drawAndCheckButtonClick(label, color, centerX, centerY, buttonWidth, fontSize, doIfClicked) {
    colorRect(centerX - (buttonWidth/2) , centerY - 15, buttonWidth , 18, color, titleScreenCanvasContext, 1);
    colorText(label, titleScreenCanvasContext, centerX, centerY, fontSize+'px sans-serif', "center", "white");
    if (didMouseJustGoDown && 
        mousePos.x / CANVAS_SCALE_FACTOR > centerX - (buttonWidth/2) &&
        mousePos.y / CANVAS_SCALE_FACTOR > centerY - 15 &&
        mousePos.x / CANVAS_SCALE_FACTOR < centerX + (buttonWidth/2) &&
        mousePos.y / CANVAS_SCALE_FACTOR < centerY + 3) {
        doIfClicked();
    }
}

function drawTitleScreen(){
    if(showingCredits) {
        colorRect(0,0, titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
        colorText("Credits TBD", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.1, '12px sans-serif', "center", "white");

        //Draw Credits Button
        drawAndCheckButtonClick("Back", "green", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.9), 40, 12, function() {showingCredits = false;} );
        return;
    }

    // Draw Background
    colorRect(0,0,titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);

    // Draw Title
    colorText("GLACIERBOUND 2", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.25, '18px Roboto Mono', "center", "white");

    // Draw Buttons
    drawAndCheckButtonClick("Start", "green", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.75), 40, 15, function() {gameStarted = true;} );
    drawAndCheckButtonClick("Credits", "blue", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.9), 40, 12, function() {showingCredits = true;} );
}