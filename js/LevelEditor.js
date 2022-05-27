var wallTextures = [];
var selectedTile;
var selectedTileTextureIndex;

function initLevelEditor(){
    wallTextures.push(spriteList['ice_wall']);
    wallTextures.push(spriteList['rock_snowy_wall']);
    wallTextures.push(spriteList['snowy_wall']);
    wallTextures.push(spriteList['rock_wall']);
    wallTextures.push(spriteList['ice_spikes']);
    wallTextures.push(spriteList['cliff_ice']);
    wallTextures.push(spriteList['cliff_rock']);
    wallTextures.push(spriteList['ship_window']);
    wallTextures.push(spriteList['ship_shelves']);

    selectedTileTextureIndex = 0;
    selectedTile = wallTextures[selectedTileTextureIndex];
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

            selectedTileTextureIndex = Math.floor(mousePos.x / TILE_SIZE);
            selectedTile = wallTextures[selectedTileTextureIndex];
            
        }
    }
    mapSection.minimapIsDirty = true;
    displayLevelData();
}

function displayLevelData() {
    var levelData = document.getElementById('EditorExport');
    var outPutString = "";
    
    for (var eachRow = 0; eachRow < MAP_NUM_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < MAP_NUM_COLS; eachCol++) {

            if (eachCol == 0) outPutString += "[";
            outPutString += mapSection.grid[eachRow][eachCol];
            outPutString += (eachCol == MAP_NUM_COLS - 1) ? "]" : ", ";

        }

        outPutString += (eachRow == MAP_NUM_ROWS - 1) ? "<br>" : ",<br>";
    }

    levelData.innerHTML = outPutString;
}