var mousePos = null;

function initInput() {
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);

  document.addEventListener("mousemove", moveMouse);
  document.addEventListener("mousedown", mouseDown);
  //document.addEventListener("mouseup", mouseUp);
}

function pollInput() {
  pollMouseButtons();
}

function keyPressed(evt) {
  if (evt.keyCode === KEY_LETTER_W || evt.keyCode === KEY_UP_ARROW) { 
    player.walkDirection = FORWARD;
  }
  if (evt.keyCode === KEY_LETTER_S || evt.keyCode === KEY_DOWN_ARROW) {
    player.walkDirection = BACKWARD;
  }
  if (evt.keyCode === KEY_LETTER_A || evt.keyCode === KEY_LEFT_ARROW) {
    player.turnDirection = LEFT;
  }
  if (evt.keyCode === KEY_LETTER_D || evt.keyCode === KEY_RIGHT_ARROW) {
    player.turnDirection = RIGHT;
  }
  evt.preventDefault(); // without this, arrow keys scroll the browser!
}

function keyReleased(evt) {
  if (evt.keyCode === KEY_LETTER_W || evt.keyCode === KEY_UP_ARROW) {
    player.walkDirection = NEUTRAL;
  }
  if (evt.keyCode === KEY_LETTER_S || evt.keyCode === KEY_DOWN_ARROW) {
    player.walkDirection = NEUTRAL;
  }
  if (evt.keyCode === KEY_LETTER_A || evt.keyCode === KEY_LEFT_ARROW) {
    player.turnDirection = NEUTRAL;
  }
  if (evt.keyCode === KEY_LETTER_D || evt.keyCode === KEY_RIGHT_ARROW) {
    player.turnDirection = NEUTRAL;
  }
  if (evt.keyCode === KEY_LETTER_P) {
    // toggle pause menu
    paused = !paused;
    bufferedHUDCanvasContext.clearRect(0, 0, bufferedHUDCanvas.width, bufferedHUDCanvas.height);
  }
  if (evt.keyCode === KEY_LETTER_L) {
    levelEditorEnabled = !levelEditorEnabled;
  }
}

function moveMouse(evt){
  mousePos = calculateMousePos(evt);
  //console.log(mousePos);
}

function mouseDown(evt){
  if (levelEditorEnabled) {
    mapSection.setTileTypeAtPixelCoord(mousePos.x, mousePos.y);
    setSelectedTile();
  }
}

function calculateMousePos(evt) {
  var rect = screenCanvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;

  return {
      x: mouseX,
      y: mouseY
  };
}