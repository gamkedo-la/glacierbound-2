var mousePos = null;
var isMouseDown = false;

function initInput() {
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);

  document.addEventListener("mousemove", moveMouse);
  document.addEventListener("mousedown", mouseDown);
  document.addEventListener("mouseup", mouseUp);
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
  if (evt.keyCode === KEY_LETTER_Q) {
    player.strafeDirection = LEFT;
  }
  if (evt.keyCode === KEY_LETTER_E) {
    player.strafeDirection = RIGHT;
  }
  if (evt.keyCode === KEY_LETTER_A || evt.keyCode === KEY_LEFT_ARROW) {
    player.turnDirection = LEFT;
  }
  if (evt.keyCode === KEY_LETTER_D || evt.keyCode === KEY_RIGHT_ARROW) {
    player.turnDirection = RIGHT;
  }
  
  if (evt.keyCode === KEY_NUMBER_1) {
    mapSection.changeMap(shipInterior);
  }
  if (evt.keyCode === KEY_NUMBER_2) {
    mapSection.changeMap(arcticExterior);
  }
  if(evt.keyCode === KEY_LEFT_SHIFT){
    player.isSprinting = true;
  }
  if(evt.keyCode === KEY_LETTER_I){
    inventory.toggleShowInventory();
  }

  //TODO: Remove this. Inventory Testing Commands
  if(evt.keyCode === KEY_LETTER_T){
    inventory.addItem(new Item(0,'ship_shelves'));
  }
  if(evt.keyCode === KEY_LETTER_R){
    console.log(inventory.removeItem(0));
  }
  evt.preventDefault(); // without this, arrow keys scroll the browser!
}

function keyReleased(evt) {
  if (evt.keyCode === KEY_LETTER_W || evt.keyCode === KEY_UP_ARROW) {
    player.walkDirection = NEUTRAL;
    // the following allows the player to choose menu items on the pause menu
    if (paused) {
      if (selected == 0) { 
        selected = 2;
      } else if (selected == 1) {
        selected = 0;
      } else if (selected == 2) {
        selected = 1;
      }
    }
  }
  if (evt.keyCode === KEY_LETTER_S || evt.keyCode === KEY_DOWN_ARROW) {
    player.walkDirection = NEUTRAL;
    // the following allows the player to choose menu items on the pause menu
    if (paused) {
      if (selected == 0) { 
        selected = 1;
      } else if (selected == 1) {
        selected = 2;
      } else if (selected == 2) {
        selected = 0;
      }
    }
  }
  if (evt.keyCode === KEY_LETTER_Q) {
    player.strafeDirection = NEUTRAL;
  }
  if (evt.keyCode === KEY_LETTER_E) {
    player.strafeDirection = NEUTRAL;
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
  }
  if(evt.keyCode === KEY_LEFT_SHIFT){
    player.isSprinting = false;
  }
  if (evt.keyCode === KEY_LETTER_L) {
    levelEditorEnabled = !levelEditorEnabled;
    displayLevelData();
  }
}

function moveMouse(evt){
  mousePos = calculateMousePos(evt);
  //console.log(mousePos);
}

function mouseDown(evt){
  isMouseDown = true;
}
function mouseUp(evt){
  isMouseDown = false;
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