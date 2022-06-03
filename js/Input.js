var mousePos = null;
var isMouseDown = false;
var inputMapping = [KEY_LETTER_W, KEY_LETTER_S, KEY_LETTER_A, KEY_LETTER_D, KEY_LETTER_Q, KEY_LETTER_E];
var inputAction = ['FORWARD', 'BACKWARD', 'TURN LEFT', 'TURN RIGHT', 'STRAFE LEFT', 'STRAFE RIGHT'];
var inputLookup = [];

function initInput() {
  for (var i = 0; i < inputMapping.length; i++) {
    var action = inputAction[i];
    inputLookup[action] = inputMapping[i];
  }
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
  if (isPaused()) {
    // paused handled in keyReleased()
    return;
  }

  if (evt.keyCode === inputLookup['FORWARD'] || evt.keyCode === KEY_UP_ARROW) { 
    player.walkDirection = FORWARD;
  }
  if (evt.keyCode === inputLookup['BACKWARD'] || evt.keyCode === KEY_DOWN_ARROW) {
    player.walkDirection = BACKWARD;
  }
  if (evt.keyCode === inputLookup['STRAFE LEFT']) {
    player.strafeDirection = LEFT;
  }
  if (evt.keyCode === inputLookup['STRAFE RIGHT']) {
    player.strafeDirection = RIGHT;
  }
  if (evt.keyCode === inputLookup['TURN LEFT'] || evt.keyCode === KEY_LEFT_ARROW) {
    player.turnDirection = LEFT;
  }
  if (evt.keyCode === inputLookup['TURN RIGHT'] || evt.keyCode === KEY_RIGHT_ARROW) {
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
  if (evt.keyCode === KEY_LETTER_P) {
    // toggle pause menu
    if (isPaused()) {
      menuState = MENUSTATE_NONE;
    }
    else {
      menuState = MENUSTATE_PAUSED;
    }
  }
  if (isPaused())
  {
    // handle input during pause menu
    pauseInputHandler(evt);
    return;
  }
  if (evt.keyCode === inputLookup['FORWARD'] || evt.keyCode === KEY_UP_ARROW) {
    player.walkDirection = NEUTRAL;
  }

  if (evt.keyCode === inputLookup['BACKWARD'] || evt.keyCode === KEY_DOWN_ARROW) {
    player.walkDirection = NEUTRAL;
  }

  if (evt.keyCode === inputLookup['STRAFE LEFT']) {
    player.strafeDirection = NEUTRAL;
  }
  if (evt.keyCode === inputLookup['STRAFE RIGHT']) {
    player.strafeDirection = NEUTRAL;
  }
  if (evt.keyCode === inputLookup['TURN LEFT'] || evt.keyCode === KEY_LEFT_ARROW) {
    player.turnDirection = NEUTRAL;
  }
  if (evt.keyCode === inputLookup['TURN RIGHT'] || evt.keyCode === KEY_RIGHT_ARROW) {
    player.turnDirection = NEUTRAL;
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