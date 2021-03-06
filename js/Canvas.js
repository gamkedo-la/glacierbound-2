function initCanvases(){
    screenCanvas = document.getElementById('screenCanvas');
    //screenCanvas.style.cursor = "none";
    screenCanvasContext = screenCanvas.getContext('2d');
    setCanvasContextSizeAndSmoothing(screenCanvasContext, CANVAS_SCALE_FACTOR);

    bufferedGameCanvas = document.createElement("canvas");
    bufferedGameCanvasContext = bufferedGameCanvas.getContext('2d');
    setCanvasContextSizeAndSmoothing(bufferedGameCanvasContext);

    bufferedHUDCanvas = document.createElement("canvas");
    bufferedHUDCanvasContext = bufferedHUDCanvas.getContext('2d');
    setCanvasContextSizeAndSmoothing(bufferedHUDCanvasContext, CANVAS_SCALE_FACTOR);

    bufferedDebugCanvas = document.createElement("canvas");
    bufferedDebugCanvasContext = bufferedDebugCanvas.getContext('2d');
    setCanvasContextSizeAndSmoothing(bufferedDebugCanvasContext, CANVAS_SCALE_FACTOR);

    bufferedLevelEditorCanvas = document.createElement("canvas");
    bufferedLevelEditorCanvasContext = bufferedLevelEditorCanvas.getContext('2d');
    setCanvasContextSizeAndSmoothing(bufferedLevelEditorCanvasContext, CANVAS_SCALE_FACTOR);

    titleScreenCanvas = document.createElement("canvas");
    titleScreenCanvasContext = titleScreenCanvas.getContext('2d');
    setCanvasContextSizeAndSmoothing(titleScreenCanvasContext);
}

function setCanvasContextSizeAndSmoothing(thisCanvasContext, scale = 1){
    thisCanvasContext.canvas.width = PROJECTION_PLANE_WIDTH * scale;
    thisCanvasContext.canvas.height = PROJECTION_PLANE_HEIGHT * scale;
    thisCanvasContext.mozImageSmoothingEnabled = false;
    thisCanvasContext.imageSmoothingEnabled = false;
    thisCanvasContext.msImageSmoothingEnabled = false;
}

function drawBufferedCanvasToScreenCanvas(bufferedCanvas){
    screenCanvasContext.drawImage(bufferedCanvas, 0, 0, bufferedCanvas.width, bufferedCanvas.height, 0, 0, screenCanvas.width, screenCanvas.height);
}