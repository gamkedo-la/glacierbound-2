//#region Graphics Functions
function clearScreen(color = 'white'){
    colorRect(0, 0, canvas.width, canvas.height, color);
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor, scale = 1) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX * scale, topLeftY * scale, boxWidth * scale, boxHeight * scale);
}

function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, strokeColor){
    canvasContext.beginPath();
    canvasContext.strokeStyle = strokeColor;
    canvasContext.rect(topLeftX, topLeftY, boxWidth, boxHeight);
    canvasContext.stroke();
}

function colorCircle(centerX, centerY, radius, fillColor, scale) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX * scale, centerY * scale, radius * scale, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function colorLine(x1, y1, x2, y2, color) {
    canvasContext.beginPath();
    canvasContext.strokeStyle = color;
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.stroke();
}

function colorLineAtAngle(x, y, angle, length, color, scale = 1){
    canvasContext.beginPath();
    canvasContext.strokeStyle = color;
    canvasContext.moveTo(x * scale, y * scale);
    canvasContext.lineTo(x * scale + Math.cos(angle) * length * scale, y * scale + Math.sin(angle) * length * scale);
    canvasContext.stroke();
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function isCoordWithinCanvas(xPixel, yPixel){
    return xPixel >= 0 && xPixel < canvasContext.canvas.width && yPixel >= 0 && yPixel < canvasContext.canvas.height;
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