function drawLevelEditor(){
    bufferedLevelEditorCanvasContext.font = '50px sans-serif';
    bufferedLevelEditorCanvasContext.textAlign = "center";
    bufferedLevelEditorCanvasContext.fillStyle = "yellow";
    bufferedLevelEditorCanvasContext.fillText('Level Editor', bufferedLevelEditorCanvas.width / 2, bufferedLevelEditorCanvas.height / 2);
    bufferedLevelEditorCanvasContext.fillStyle = "black";
    bufferedLevelEditorCanvasContext.strokeText('Level Editor', bufferedLevelEditorCanvas.width / 2, bufferedLevelEditorCanvas.height / 2);
}