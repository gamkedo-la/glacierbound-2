var showingCreditsPage = -1;
var showingIntroText = false;
var showingEndingText = false;
var wasMouseDown = false;
var intro_BG_Opacity = 1;
var intro_BG_Opacity_fade_speed = 0.005;

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

function drawClickButton(label, x, y, width, height, scaleFactor, doIfClicked, canvasContext = titleScreenCanvasContext) {
  canvasContext.drawImage(spriteList['menu_button'], x, y, width, height);
  colorText(label, canvasContext, x + (width/2), y + (height*.7), '15px sans-serif', "center", "white");
  if (
      didMouseJustGoDown && 
      mousePos.x > x * scaleFactor &&
      mousePos.x < (x + width) * scaleFactor &&
      mousePos.y > y * scaleFactor &&
      mousePos.y < (y + width) * scaleFactor
      ) {
      // console.log("Mouse", mousePos.x, mousePos.y);
      // console.log("Button", x, y);
      // console.log("Scale", scaleFactor);
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
    clearAllCanvases();
    screenCanvas.style.cursor = "auto";

    if(showingCreditsPage != -1) {
        colorRect(0,0, titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
        // colorText("Credits TBD", titleScreenCanvasContext, titleScreenCanvas.width / 2, titleScreenCanvas.height * 0.1, '12px sans-serif', "center", "white");

        drawCredits();
        return;
    }

    if(showingIntroText) {
        
        colorRect(0,0, titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
        
        // fade the blue sky to black
        intro_BG_Opacity -= intro_BG_Opacity_fade_speed;
        titleScreenCanvasContext.globalAlpha = Math.max(0,intro_BG_Opacity);
        titleScreenCanvasContext.drawImage(spriteList['titlescreenBG'],-2,-2); // the -2's make no sense but eliminate blocky edges due to filtering of some sort
        titleScreenCanvasContext.globalAlpha = 1;
        drawSnow();


        bufferedHUDCanvasContext.drawImage(spriteList['intro_text'], 0, 0, bufferedHUDCanvas.width, bufferedHUDCanvas.height);
        
        //Draw Continue Button
        drawAndCheckButtonClick(
            "Continue", "green", (bufferedHUDCanvas.width / 2), (bufferedHUDCanvas.height * 0.9), 60, 12, 1, 
            function()
            { 
                gameStarted = true;
                showingIntroText = false;
                playSFXAudio(audioSourceList['click']);
                playMusic(audioSourceList['InteriorAmbient']);
            },
            bufferedHUDCanvasContext );
        return;
    }

    if(showingEndingText) {
        colorRect(0,0, titleScreenCanvas.width, titleScreenCanvas.height, "black", titleScreenCanvasContext, 1);
        bufferedHUDCanvasContext.drawImage(spriteList['ending_text'], 0, 0, bufferedHUDCanvas.width, bufferedHUDCanvas.height);
        
        //Draw Continue Button
        drawAndCheckButtonClick("Return to Menu", "green", (bufferedHUDCanvas.width / 2), (bufferedHUDCanvas.height * 0.9), 100, 12, 1, function() {document.location.reload(true);}, bufferedHUDCanvasContext );
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
    /*
    drawAndCheckButtonClick("Start", "green", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.75), 40, 15, CANVAS_SCALE_FACTOR, function() {showingIntroText = true; playSFXAudio(audioSourceList['click']);} );
    drawAndCheckButtonClick("Credits", "blue", (titleScreenCanvas.width / 2), (titleScreenCanvas.height * 0.9), 40, 12, CANVAS_SCALE_FACTOR, function() {showingCreditsPage = 0; playSFXAudio(audioSourceList['click']);} );
    */

    drawClickButton("Start", 40, 75, 80, 25, CANVAS_SCALE_FACTOR,  function() {showingIntroText = true; playSFXAudio(audioSourceList['click']);});

    drawClickButton("Credits", 40, 105, 80, 25, CANVAS_SCALE_FACTOR,  function() {showingCreditsPage = 0; playSFXAudio(audioSourceList['click']);});
}

var creditsList = [
"Brian J. Boucher: Project lead, core gameplay, ray casting engine, custom level editor, level design layouts, majority of wall textures, spinning sprite support, collectable pickups, item models (including flashlight, map, table, fire extinguisher, key, TNT, artifact), mouse control, locked doors, spawn position, map names, title font selection, computer texture and objective display, assorted bug fixes, ending story",
"Patrick Moffett: Texture seam fix, skybox loop, wind fix, strafing speed normalized, inventory UI and related interactions, sprint input, minimap fix, additional editor input, audio manager, music integration",
"Christer \"McFunkypants\" Kaitila: Scrolling skybox and cloud support, 16 wall designs, variable sky/floor, floor reflection effect, gamepad movement, radar, title background, keyboard tooltip, background fade transition, sounds (click, lock, unlock, open, activate, pickup)",
"Drew Beardall: Input key remapping system, controls screen, pause screen, custom font",
"Ashleigh M.: Menu music, cave music",
"Cooper Willis: Models (lamp model, blue chair), cave wall texture, wrench render sheet",
"Jared Rigby: Synthesized snow walk sound, footstep improvements, debug panel",
"Rodrigo Bonzerr Lopez: Wrench art, exterior ambient sound, interior lab sound",
"Cody Crawford: Icy cave wall texture ",
"H Trayford: Minimap optimization",
"Bastiaan \"borsjt\" Schaar: Ambient wind",
"Nick O'Connell: Practice commit",
"Chris DeLeon: Credits panel hookup, menu click refactor",
"Playtesting: Cassidy Noble, Rodrigo Bonzerr Lopez, Klaim (A. Joël Lamotte), Michael Monty Tanner"];

function drawCredits() {
  var lineX = 1;
  var lineY = 1;
  var creditsSize = 26;
  var lineSkip = creditsSize-1;
  // colorRect(0, 0, titleScreenCanvasContext.titleScreenCanvasContext, titleScreenCanvasContext.height, "#504324");
  var linesPerPage=17;
  var startLine = showingCreditsPage*linesPerPage;
  var endLine = startLine + linesPerPage;
  var pageCount = Math.floor(creditsList.length/linesPerPage)+1;
  if(endLine > creditsList.length) {
    endLine = creditsList.length;
  }
  for(var i=startLine;i<endLine;i++) {
    colorText(creditsList[i], bufferedHUDCanvasContext, lineX, lineY+=lineSkip, creditsSize+'px sans-serif', "left", "#d0bc92");
  }
  colorText("Page "+(showingCreditsPage+1) + " of " + pageCount, bufferedHUDCanvasContext, lineX+10, bufferedHUDCanvas.height-10, creditsSize+'px sans-serif', "left", "#d0bc92");
  //Draw back Button
  var cornerMargin = 3;
  drawAndCheckButtonClick("Next", "green", (titleScreenCanvas.width-20)-cornerMargin, -cornerMargin+(titleScreenCanvas.height * 0.98), 40, 12, CANVAS_SCALE_FACTOR, function() {showingCreditsPage++; if(showingCreditsPage>=3){showingCreditsPage=-1}} );
  
}

function lineWrapCredits() { // note: gets calling immediately after definition!
  const newCut = [];
  var maxLineChar = 44;
  var findEnd;

  for(let i = 0; i < creditsList.length; i++) {
    const currentLine = creditsList[i];
    for(let j = 0; j < currentLine.length; j++) {
      /*const aChar = currentLine[j];
      if(aChar === ":") {
        if(i !== 0) {
          newCut.push("\n");
        }

        newCut.push(currentLine.substring(0, j + 1));
        newCut.push(currentLine.substring(j + 2, currentLine.length));
        break;
      } else*/ if(j === currentLine.length - 1) {
        if((i === 0) || (i >= creditsList.length - 2)) {
          newCut.push(currentLine);
        } else {
          newCut.push(currentLine.substring(0, currentLine.length));
        }
      }
    }
  }

  const newerCut = [];
  for(var i=0;i<newCut.length;i++) {
    while(newCut[i].length > 0) {
      findEnd = maxLineChar;
      if(newCut[i].length > maxLineChar) {
        for(var ii=findEnd;ii>0;ii--) {
          if(newCut[i].charAt(ii) == " ") {
            findEnd=ii;
            break;
          }
        }
      }
      newerCut.push(newCut[i].substring(0, findEnd));
      newCut[i] = newCut[i].substring(findEnd, newCut[i].length);
    }
  }

  creditsList = newerCut;
}
lineWrapCredits(); // note: calling immediately as part of init, outside the function