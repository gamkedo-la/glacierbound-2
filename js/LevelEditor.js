var wallTextures = [];
var selectedTile;

function initLevelEditor(){
    wallTextures.push(spriteList['ice_wall']);
    wallTextures.push(spriteList['rock_snowy_wall']);
    wallTextures.push(spriteList['snowy_wall']);
    wallTextures.push(spriteList['rock_wall']);

    selectedTile = spriteList['ice_wall'];
}

function drawLevelEditor(){
    colorText('Level Editor', bufferedLevelEditorCanvasContext, bufferedLevelEditorCanvas.width / 2, bufferedLevelEditorCanvas.height / 2, '50px sans-serif', "center", "yellow");

    for (var i = 0; i < wallTextures.length; i++){
        bufferedLevelEditorCanvasContext.drawImage(wallTextures[i],TEXTURE_SIZE * i, bufferedLevelEditorCanvas.height - TEXTURE_SIZE);
    }

    bufferedLevelEditorCanvasContext.drawImage(selectedTile, bufferedLevelEditorCanvas.width - TEXTURE_SIZE, bufferedLevelEditorCanvas.height - TEXTURE_SIZE);
}

function setSelectedTile() {
    for (var i = 0; i < wallTextures.length; i++) {
        if (mousePos.x > 0 &&
            mousePos.x < MAP_NUM_COLS * TILE_SIZE &&
            mousePos.y > bufferedLevelEditorCanvas.height - TEXTURE_SIZE &&
            mousePos.y < bufferedLevelEditorCanvas.height){
            selectedTile = wallTextures[Math.floor(mousePos.x / TILE_SIZE)];
            //selectedTileTexValue = (Math.floor(mousePos.y / TILE_SIZE) + 1) / 100;
        }
    }
}