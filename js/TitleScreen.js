var showingCredits = false;
var wasMouseDown = false;

function drawTitleScreen(){
    if(showingCredits) {
        colorRect(0,0, titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
        colorText("Credits TBD", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.1, '12px sans-serif', "center", "white");

        //Draw Credits Button
        colorRect((titleScreenCanvas.width / 2) - 20 , (titleScreenCanvas.height * 0.9) - 15, 40 , 18, "blue", titleScreenCanvasContext, 1);
        colorText("Back", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.9, '12px sans-serif', "center", "white");
        if (didMouseJustGoDown && 
            mousePos.x / CANVAS_SCALE_FACTOR  > (titleScreenCanvas.width / 2) - 20 &&
            mousePos.y / CANVAS_SCALE_FACTOR > (titleScreenCanvas.height * 0.9) - 15 &&
            mousePos.x / CANVAS_SCALE_FACTOR < (titleScreenCanvas.width / 2) + 20 &&
            mousePos.y / CANVAS_SCALE_FACTOR < (titleScreenCanvas.height * 0.9) + 3) {
            showingCredits = false;
        }
        return;
    }

    // Draw Background
    colorRect(0,0,titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);

    // Draw Title
    colorText("GLACIERBOUND 2", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.25, '18px sans-serif', "center", "white");

    // Draw Start Button
    colorRect((titleScreenCanvas.width / 2) - 20 , (titleScreenCanvas.height * 0.75) - 15, 40 , 18, "blue", titleScreenCanvasContext, 1);
    colorText("Start", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.75, '15px sans-serif', "center", "white");
    if (didMouseJustGoDown && 
        mousePos.x / CANVAS_SCALE_FACTOR  > (titleScreenCanvas.width / 2) - 20 &&
        mousePos.y / CANVAS_SCALE_FACTOR > (titleScreenCanvas.height * 0.75) - 15 &&
        mousePos.x / CANVAS_SCALE_FACTOR < (titleScreenCanvas.width / 2) + 20 &&
        mousePos.y / CANVAS_SCALE_FACTOR < (titleScreenCanvas.height * 0.75) + 3) {
            gameStarted = true;
    }

    //Draw Credits Button
    colorRect((titleScreenCanvas.width / 2) - 20 , (titleScreenCanvas.height * 0.9) - 15, 40 , 18, "blue", titleScreenCanvasContext, 1);
    colorText("Credits", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.9, '12px sans-serif', "center", "white");
    if (didMouseJustGoDown && 
        mousePos.x / CANVAS_SCALE_FACTOR  > (titleScreenCanvas.width / 2) - 20 &&
        mousePos.y / CANVAS_SCALE_FACTOR > (titleScreenCanvas.height * 0.9) - 15 &&
        mousePos.x / CANVAS_SCALE_FACTOR < (titleScreenCanvas.width / 2) + 20 &&
        mousePos.y / CANVAS_SCALE_FACTOR < (titleScreenCanvas.height * 0.9) + 3) {
        showingCredits = true;
    }
}