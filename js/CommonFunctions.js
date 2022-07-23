//#region Graphics Functions
function clearAllCanvases(){
    //screenCanvasContext.clearRect(0, 0, screenCanvasContext.canvas.width, screenCanvasContext.canvas.height);
    //bufferedGameCanvasContext.clearRect(0, 0, bufferedGameCanvasContext.canvas.width, bufferedGameCanvasContext.canvas.height);
    colorRect(0,0,screenCanvasContext.width, screenCanvasContext.height, BACKGROUND_FILL_COLOR, screenCanvasContext, 1);
    colorRect(0,0,bufferedGameCanvas.width, bufferedGameCanvas.height, GROUND_FILL_COLOR, bufferedGameCanvasContext, 1);
    bufferedDebugCanvasContext.clearRect(0, 0, bufferedDebugCanvasContext.canvas.width, bufferedDebugCanvasContext.canvas.height);
    bufferedHUDCanvasContext.clearRect(0, 0, bufferedHUDCanvasContext.canvas.width, bufferedHUDCanvasContext.canvas.height);
    bufferedLevelEditorCanvasContext.clearRect(0, 0, bufferedLevelEditorCanvasContext.canvas.width, bufferedLevelEditorCanvasContext.canvas.height);
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor, targetCanvas = bufferedGameCanvasContext, scale = 1) {
    targetCanvas.fillStyle = fillColor;
    targetCanvas.fillRect(topLeftX * scale, topLeftY * scale, boxWidth * scale, boxHeight * scale);
}

function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, strokeColor, width = 1, targetCanvas = bufferedGameCanvasContext){
    targetCanvas.beginPath();
    targetCanvas.strokeStyle = strokeColor;
    targetCanvas.lineWidth = width;
    targetCanvas.rect(topLeftX, topLeftY, boxWidth, boxHeight);
    targetCanvas.stroke();
    targetCanvas.lineWidth = 1; // reset lineWidth to default value - keeps other stroke calls after this from getting same stroke width applied
}

function colorCircle(centerX, centerY, radius, fillColor, targetCanvas = bufferedGameCanvasContext, scale = 1) {
    targetCanvas.fillStyle = fillColor;
    targetCanvas.beginPath();
    targetCanvas.arc(centerX * scale, centerY * scale, radius * scale, 0, Math.PI * 2, true);
    targetCanvas.fill();
}

function colorLine(x1, y1, x2, y2, color, targetCanvas = bufferedGameCanvasContext, scale = 1) {
    targetCanvas.beginPath();
    targetCanvas.strokeStyle = color;
    targetCanvas.moveTo(x1 * scale, y1 * scale);
    targetCanvas.lineTo(x2 * scale, y2 * scale);
    targetCanvas.stroke();
}

function colorLineAtAngle(x, y, angle, length, color, targetCanvas = bufferedGameCanvasContext, scale = 1){
    targetCanvas.beginPath();
    targetCanvas.strokeStyle = color;
    targetCanvas.moveTo(x * scale, y * scale);
    targetCanvas.lineTo(x * scale + Math.cos(angle) * length * scale, y * scale + Math.sin(angle) * length * scale);
    targetCanvas.stroke();
}

function colorText(text, canvasContext, x, y, font, textAlign, fillColor, strokeColor = fillColor){
    canvasContext.font = font;
    canvasContext.textAlign = textAlign;
    canvasContext.fillStyle = fillColor;
    canvasContext.strokeStyle = strokeColor;
    
    canvasContext.fillText(text, x, y);
    if (fillColor != strokeColor) canvasContext.strokeText(text, x, y);
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function isCoordWithinCanvas(xPixel, yPixel){
    return xPixel >= 0 && xPixel < screenCanvasContext.canvas.width && yPixel >= 0 && yPixel < screenCanvasContext.canvas.height;
}

function isCoordWithinRect(coordX, coordY, rectTopLeftX, rectTopLeftY, rectWidth, rectHeight){
    return (coordX > rectTopLeftX &&
            coordX < rectTopLeftX + rectWidth &&
            coordY > rectTopLeftY &&
            coordY < rectTopLeftY + rectHeight)
}

function isPixelCoordWithinMapGrid(xPixel, yPixel){
    return xPixel >= 0 && xPixel < MAP_NUM_COLS * TILE_SIZE && yPixel >= 0 && yPixel < MAP_NUM_ROWS * TILE_SIZE;
}

function isGridCoordWithinMapGrid(col, row){
    return col >= 0 && col < MAP_NUM_COLS && row >= 0 && row < MAP_NUM_ROWS;
}
//#endregion Graphics Functions

//#region Math Functions
function radiansToDegrees(radians){
    return radians * (180 / Math.PI)
}

function degreesToRadians(degrees){
    return degrees * (Math.PI / 180)
}

function normalizeAngle(angle){
    angle = angle % (2 * Math.PI);
    if (angle < 0){
        angle += (2 * Math.PI);
    }
    return angle;
}

function distanceBetweenPoints(x1, y1, x2, y2){
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function getVectorFromAngleAndMagnitude(startingX, startingY, angle, speed) {
    var newX = startingX + Math.cos(angle) * speed;
    var newY = startingY + Math.sin(angle) * speed;
    return [newX, newY];
}
//#endregion Math Functions