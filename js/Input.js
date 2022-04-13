function initInput() {
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
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
}