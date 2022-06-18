var mousePos = null;
var isMouseDown = false;
var inputMapping = [KEY_LETTER_W, KEY_LETTER_S, KEY_LETTER_A, KEY_LETTER_D, KEY_LETTER_Q, KEY_LETTER_E, KEY_LEFT_SHIFT, KEY_LETTER_I];
var inputAction = ['FORWARD', 'BACKWARD', 'TURN LEFT', 'TURN RIGHT', 'STRAFE LEFT', 'STRAFE RIGHT', 'SPRINT', 'INVENTORY'];
var inputLookup = [];

// homemade ascii to character map
// this will make it possible to display accurate info on the controls menu
var inputMap = {
  65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E', 70: 'F', 71: 'G', 72: 'H', 73: 'I', 74: 'J', 75: 'K', 76: 'L', 77: 'M',
  78: 'N', 79: 'O', 80: 'P', 81: 'Q', 82: 'R', 83: 'S', 84: 'T', 85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y', 90: 'Z',
  13: 'ENTER', 16: 'SHIFT', 18: 'ALT', 32: 'SPACE'
};

// if there are custom controls set, use those
for (var i = 0; i < inputAction.length; i++) {
  if (localStorage.getItem(inputAction[i]) != null) {
    inputMapping[i] = parseInt(localStorage.getItem(inputAction[i]));
    console.log(inputAction[i] + ": " + String.fromCharCode(inputMapping[i]));
  } else {
    console.log('No custom input mapping found for ' + inputAction[i]);
  }
}

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
  document.addEventListener("wheel", mousewheel);
}

function pollInput() {
  pollMouseButtons();
}

function pollGamepad() {

    // FIXME: currently just binary on/off gamepad input not 0..1 smooth movement
    // I added gamepad.prev$ here to debounce consecutive frames with same input
    // and prevent an unused gamepad from interfering with WASD states

    if (gamepad.right()) { player.strafeDirection = RIGHT; gamepad.prevR=true; } 
    else if (gamepad.prevR) { player.strafeDirection = NEUTRAL; gamepad.prevR=false; }
    
    if (gamepad.left()) { player.strafeDirection = LEFT; gamepad.prevL=true; } 
    else if (gamepad.prevL) { player.strafeDirection = NEUTRAL; gamepad.prevL=false; }

    if (gamepad.up()) { player.walkDirection = FORWARD; gamepad.prevU=true; } 
    else if (gamepad.prevU) { player.walkDirection = NEUTRAL; gamepad.prevU=false; }
    
    if (gamepad.down()) { player.walkDirection = BACKWARD; gamepad.prevD=true; } 
    else if (gamepad.prevD) { player.walkDirection = NEUTRAL; gamepad.prevD=false; }

    if (gamepad.lookleft()) { player.turnDirection = LEFT; gamepad.prevLL=true; } 
    else if (gamepad.prevLL) { player.turnDirection = NEUTRAL; gamepad.prevLL=false; }

    if (gamepad.lookright()) { player.turnDirection = RIGHT; gamepad.prevLR=true; } 
    else if (gamepad.prevLR) { player.turnDirection = NEUTRAL; gamepad.prevLR=false; }

    if (gamepad.buttonX()) { if (!gamepad.prevX) inventory.toggleShowInventory(); gamepad.prevX=true; } 
    else { gamepad.prevX=false; }

    if (gamepad.buttonA()) { player.isSprinting = true; gamepad.prevA=true; } 
    else if (gamepad.prevA) { player.isSprinting = false; gamepad.prevA=false; }
   
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
    mapSection.changeMap(0);
  }
  if (evt.keyCode === KEY_NUMBER_2) {
    mapSection.changeMap(1);
  }
  if (evt.keyCode === KEY_NUMBER_3) {
    mapSection.changeMap(2);
  }
  if (evt.keyCode === KEY_NUMBER_4) {
    mapSection.changeMap(3);
  }

  if(evt.keyCode === inputLookup['SPRINT']){
    player.isSprinting = true;
  }
  if(evt.keyCode === inputLookup['INVENTORY']){
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
  if (evt.keyCode === KEY_LETTER_P || evt.keyCode === KEY_ESCAPE) {
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
    // handle input during pause menu (in PauseMenu.js)
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
function mousewheel(evt){
  if(evt.deltaY > 0){
    inventory.incrementSelectedItemIndex();
  }else if (evt.deltaY < 0){
    inventory.decrementSelectedItemIndex();
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