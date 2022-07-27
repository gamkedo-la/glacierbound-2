var wallTextures = [];
var wallTexturesFlat = [];
var shipWallTextures = [];
var arcticWallTextures = [];
var caveWallTextures = [];
var labWallTextures = [];
var selectedTileTextureIndex = [];
var tileTextureFlatIndex = 0;

function initLevelEditor(){

    shipWallTextures.push(spriteList['ship_interior_wall_simple']);
    shipWallTextures.push(spriteList['ship_interior_wall_no_pipes']);
    shipWallTextures.push(spriteList['ship_interior_wall_simple_panels']);
    shipWallTextures.push(spriteList['ship_interior_wall_panels']);
    shipWallTextures.push(spriteList['ship_interior_wall']);
    shipWallTextures.push(spriteList['ship_interior_plain_wall']);
    shipWallTextures.push(spriteList['ship_shelves']);
    shipWallTextures.push(spriteList['ship_window']);
    wallTextures.push(shipWallTextures);

    arcticWallTextures.push(spriteList['rock_snowy_wall']);
    arcticWallTextures.push(spriteList['snowy_wall']);
    arcticWallTextures.push(spriteList['rock_wall']);
    arcticWallTextures.push(spriteList['ice_spikes']);
    arcticWallTextures.push(spriteList['cliff_ice']);
    arcticWallTextures.push(spriteList['cliff_rock']);
    wallTextures.push(arcticWallTextures);

    caveWallTextures.push(spriteList['cave_wall']);
    caveWallTextures.push(spriteList['cave_wall_icy']);
    wallTextures.push(caveWallTextures);

    wallTexturesFlat = wallTextures.flat();

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
        mapSection.setTileTypeAtPixelCoord(mousePos.x, mousePos.y, tileTextureFlatIndex);
    }
}
function drawLevelEditor(){

    colorText('Level Editor', bufferedLevelEditorCanvasContext, bufferedLevelEditorCanvas.width / 2, bufferedLevelEditorCanvas.height / 2, '50px sans-serif', "center", "yellow");
    colorRect(0, bufferedLevelEditorCanvas.height - (wallTextures.length * TILE_SIZE), bufferedLevelEditorCanvas.width, wallTextures.length * TILE_SIZE, 'black', targetCanvas = bufferedLevelEditorCanvasContext)

    //draw delete image
    bufferedLevelEditorCanvasContext.fillStyle = "white";
    bufferedLevelEditorCanvasContext.fillRect(0,bufferedLevelEditorCanvas.height - (TEXTURE_SIZE * (wallTextures.length + 1)),TEXTURE_SIZE,TEXTURE_SIZE)

    //draw textures
    for (let i = 0; i < wallTextures.length; i++){
        for(let j = 0; j < wallTextures[i].length; j++){
            bufferedLevelEditorCanvasContext.drawImage(wallTextures[i][j],TEXTURE_SIZE * j, bufferedLevelEditorCanvas.height - ((i + 1) * TEXTURE_SIZE));
        }
    }

    //draw highlight around selected
    drawRect(selectedTileTextureIndex[0] * TILE_SIZE,
            bufferedLevelEditorCanvas.height - ((selectedTileTextureIndex[1] * TILE_SIZE) + TILE_SIZE),
            TILE_SIZE,
            TILE_SIZE,
            'red',
            3,
            bufferedLevelEditorCanvasContext);
}

function setSelectedTile() {
    var counter = 0;

    for (let i = 0; i < wallTextures.length; i++){
        for(let j = 0; j < wallTextures[i].length; j++){

            counter++;

            if (isCoordWithinRect(mousePos.x, mousePos.y, j * TEXTURE_SIZE, bufferedLevelEditorCanvas.height - ((i + 1) * TEXTURE_SIZE), TEXTURE_SIZE, TEXTURE_SIZE)){
                selectedTileTextureIndex = [j, i];
                tileTextureFlatIndex = counter;
            }

            if (isCoordWithinRect(mousePos.x, mousePos.y, 0, bufferedLevelEditorCanvas.height - ((wallTextures.length + 1) * TEXTURE_SIZE), TEXTURE_SIZE, TEXTURE_SIZE)){
                selectedTileTextureIndex = [0, wallTextures[i].length + 1];
                tileTextureFlatIndex = 0;
            }
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