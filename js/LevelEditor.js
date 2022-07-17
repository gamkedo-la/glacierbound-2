var wallTextures = [];
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

    wallTextures.push(spriteList['ship_interior_wall_simple_panels']);
    wallTextures.push(spriteList['ship_interior_wall_panels']);
    wallTextures.push(spriteList['ship_interior_wall']);
    wallTextures.push(spriteList['ship_interior_plain_wall']);
    wallTextures.push(spriteList['ship_interior_wall_simple']);
    wallTextures.push(spriteList['ship_interior_wall_no_pipes']);

    wallTextures.push(spriteList['cave_wall']);

    selectedTileTextureIndex = 0;

    seenGrid = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
}
function updateLevelEditor(){

    //if the mouse is down
    if (isMouseDown) {
        //set a selected tile if one was clicked
        setSelectedTile();
        //set the tile at the coord
        mapSection.setTileTypeAtPixelCoord(mousePos.x, mousePos.y);
    }
}
function drawLevelEditor(){

    colorText('Level Editor', bufferedLevelEditorCanvasContext, bufferedLevelEditorCanvas.width / 2, bufferedLevelEditorCanvas.height / 2, '50px sans-serif', "center", "yellow");

    //draw delete image
    bufferedLevelEditorCanvasContext.fillStyle = "white";
    bufferedLevelEditorCanvasContext.fillRect(0,bufferedLevelEditorCanvas.height - TEXTURE_SIZE,TEXTURE_SIZE,TEXTURE_SIZE)

    //draw textures
    for (var i = 0; i < wallTextures.length; i++){
        bufferedLevelEditorCanvasContext.drawImage(wallTextures[i],TEXTURE_SIZE+TEXTURE_SIZE * i, bufferedLevelEditorCanvas.height - TEXTURE_SIZE);
    }

    //draw highlight around selected
    bufferedLevelEditorCanvasContext.strokeStyle = "red";
    bufferedLevelEditorCanvasContext.lineWidth = 3;
    bufferedLevelEditorCanvasContext.beginPath();
    bufferedLevelEditorCanvasContext.moveTo(TEXTURE_SIZE+TEXTURE_SIZE * selectedTileTextureIndex,bufferedLevelEditorCanvas.height - TEXTURE_SIZE);
    bufferedLevelEditorCanvasContext.lineTo(TEXTURE_SIZE*2+TEXTURE_SIZE * selectedTileTextureIndex,bufferedLevelEditorCanvas.height - TEXTURE_SIZE);
    bufferedLevelEditorCanvasContext.lineTo(TEXTURE_SIZE*2+TEXTURE_SIZE * selectedTileTextureIndex,bufferedLevelEditorCanvas.height);
    bufferedLevelEditorCanvasContext.lineTo(TEXTURE_SIZE+TEXTURE_SIZE * selectedTileTextureIndex,bufferedLevelEditorCanvas.height);
    bufferedLevelEditorCanvasContext.lineTo(TEXTURE_SIZE+TEXTURE_SIZE * selectedTileTextureIndex,bufferedLevelEditorCanvas.height - TEXTURE_SIZE);
    bufferedLevelEditorCanvasContext.stroke();
}

function setSelectedTile() {
    for (var i = 0; i < wallTextures.length; i++) {
        if (mousePos.x > 0 &&
        mousePos.x < (wallTextures.length+1) * TILE_SIZE &&
        mousePos.y > bufferedLevelEditorCanvas.height - TEXTURE_SIZE &&
        mousePos.y < bufferedLevelEditorCanvas.height){
            //set selectedTileTexture where -1 = delete, and 0+ is a texture
            selectedTileTextureIndex = Math.floor(mousePos.x / TILE_SIZE)-1;

        }
    }
    displayLevelData();
}

function displayLevelData() {
    var levelData = document.getElementById('EditorExport');
    var outPutString = "";
    
    for (var eachRow = 0; eachRow < MAP_NUM_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < MAP_NUM_COLS; eachCol++) {

            if (eachCol == 0) outPutString += "[";
            if (mapSection.grid[eachRow][eachCol] < 10) outPutString += " ";
            outPutString += mapSection.grid[eachRow][eachCol];
            outPutString += (eachCol == MAP_NUM_COLS - 1) ? "]" : ",";
        }

        outPutString += (eachRow == MAP_NUM_ROWS - 1) ? "<br>" : ",<br>";
    }

    levelData.innerHTML = outPutString;
}