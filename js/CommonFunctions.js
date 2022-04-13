//#region Graphics Functions
function clearScreen(color = 'white'){
    colorRect(0, 0, bufferedGameCanvas.width, bufferedGameCanvas.height, color);
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor, targetCanvas = bufferedGameCanvasContext, scale = 1) {
    targetCanvas.fillStyle = fillColor;
    targetCanvas.fillRect(topLeftX * scale, topLeftY * scale, boxWidth * scale, boxHeight * scale);
}

function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, strokeColor, targetCanvas = bufferedGameCanvasContext){
    targetCanvas.beginPath();
    targetCanvas.strokeStyle = strokeColor;
    targetCanvas.rect(topLeftX, topLeftY, boxWidth, boxHeight);
    targetCanvas.stroke();
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

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function isCoordWithinCanvas(xPixel, yPixel){
    return xPixel >= 0 && xPixel < screenCanvasContext.canvas.width && yPixel >= 0 && yPixel < screenCanvasContext.canvas.height;
}

function isCoordWithinMapGrid(xPixel, yPixel){
    return xPixel >= 0 && xPixel < MAP_NUM_COLS * TILE_SIZE && yPixel >= 0 && yPixel < MAP_NUM_ROWS * TILE_SIZE;
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
//#endregion Math Functions