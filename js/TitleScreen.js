var showingCredits = false;
var showingIntroText = false;
var wasMouseDown = false;

function drawAndCheckButtonClick(label, color, centerX, centerY, buttonWidth, fontSize, scaleFactor, doIfClicked, canvasContext = titleScreenCanvasContext) {
    colorRect(centerX - (buttonWidth/2) , centerY - 15, buttonWidth , 18, color, canvasContext, 1);
    colorText(label, canvasContext, centerX, centerY, fontSize+'px sans-serif', "center", "white");
    if (didMouseJustGoDown && 
        mousePos.x / scaleFactor > centerX - (buttonWidth/2) &&
        mousePos.y / scaleFactor > centerY - 15 &&
        mousePos.x / scaleFactor < centerX + (buttonWidth/2) &&
        mousePos.y / scaleFactor < centerY + 3) {
        doIfClicked();
    }
}

function drawSnow(){
    let num = 16;
    let speed = 0.0002;
    let size = 150;
    let maxalpha = 1;
    let now = performance.now();
    for (let x,y,a,i=0; i<num; i++) {
        x = Math.sin(now*speed+i*1234)*size;
        y = Math.sin(now*speed+i*7654)*size;
        //a = Math.sin(now*0.0001+i*2468)*maxalpha; // hmm seems choppy
        a=maxalpha;
        titleScreenCanvasContext.globalAlpha = a;
        //if (i==0) console.log('fog:'+x.toFixed(1)+','+y.toFixed(1)+','+a.toFixed(2));
        //titleScreenCanvasContext.drawImage(spriteList['snow'],x,y);
        titleScreenCanvasContext.drawImage(spriteList['fog'],x,y);
    }
    titleScreenCanvasContext.globalAlpha = 1;
}

function drawTitleScreen(){
    if(showingCredits) {
        colorRect(0,0, titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
        colorText("Credits TBD", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.1, '12px sans-serif', "center", "white");

        //Draw Credits Button
        drawAndCheckButtonClick("Back", "green", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.9), 40, 12, CANVAS_SCALE_FACTOR, function() {showingCredits = false;} );
        return;
    }

    if(showingIntroText) {
        colorRect(0,0, titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
        bufferedHUDCanvasContext.drawImage(spriteList['intro_text'], 0, 0, bufferedHUDCanvas.width, bufferedHUDCanvas.height);
        
        //Draw Continue Button
        drawAndCheckButtonClick("Continue", "green", (bufferedHUDCanvas.width / 2), (bufferedHUDCanvas.height * 0.9), 60, 12, 1, function() {gameStarted = true;showingIntroText = false;}, bufferedHUDCanvasContext );
        return;
    }

    // Draw Background
    colorRect(0,0,titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
    titleScreenCanvasContext.drawImage(spriteList['titlescreenBG'],-2,-2); // the -2's make no sense but eliminate blocky edges due to filtering of some sort
    drawSnow();

    // Draw Title
    colorText("GLACIERBOUND 2", titleScreenCanvasContext, titleScreenCanvas.width / 2 + 1, titleScreenCanvas.height * 0.25 + 1, '18px Roboto Mono', "center", "black");
    colorText("GLACIERBOUND 2", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.25, '18px Roboto Mono', "center", "white");

    // Draw Buttons
    drawAndCheckButtonClick("Start", "green", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.75), 40, 15, CANVAS_SCALE_FACTOR, function() {showingIntroText = true;} );
    drawAndCheckButtonClick("Credits", "blue", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.9), 40, 12, CANVAS_SCALE_FACTOR, function() {showingCredits = true;} );
}