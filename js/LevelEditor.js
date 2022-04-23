var wallTextures = [];

function initLevelEditor(){
    wallTextures.push(spriteList['ice_wall']);
    wallTextures.push(spriteList['rock_snowy_wall']);
    wallTextures.push(spriteList['snowy_wall']);
    wallTextures.push(spriteList['rock_wall']);
}

function drawLevelEditor(){
    colorText('Level Editor', bufferedLevelEditorCanvasContext, bufferedLevelEditorCanvas.width / 2, bufferedLevelEditorCanvas.height / 2, '50px sans-serif', "center", "yellow");

    for (i = 0; i < wallTextures.length; i++){
        bufferedLevelEditorCanvasContext.drawImage(wallTextures[i],TEXTURE_SIZE * i, bufferedLevelEditorCanvas.height - TEXTURE_SIZE);
    }
}