var wallTextures = [];
var wallTexturesFlat = [];
var levelEditorTexturesRow1 = [];
var levelEditorTexturesRow2 = [];
var levelEditorTexturesRow3 = [];
var labWallTextures = [];
var selectedTileTextureIndex = [];
var tileTextureFlatIndex = 0;

function initLevelEditor(){

    levelEditorTexturesRow1.push(spriteList['ship_interior_wall_simple']);
    levelEditorTexturesRow1.push(spriteList['ship_interior_wall_no_pipes']);
    levelEditorTexturesRow1.push(spriteList['ship_interior_wall_simple_panels']);
    levelEditorTexturesRow1.push(spriteList['ship_interior_wall_panels']);
    levelEditorTexturesRow1.push(spriteList['ship_interior_wall']);
    levelEditorTexturesRow1.push(spriteList['ship_interior_plain_wall']);
    levelEditorTexturesRow1.push(spriteList['ship_shelves']);
    levelEditorTexturesRow1.push(spriteList['ship_window']);
    wallTextures.push(levelEditorTexturesRow1);

    levelEditorTexturesRow2.push(spriteList['rock_snowy_wall']);
    levelEditorTexturesRow2.push(spriteList['snowy_wall']);
    levelEditorTexturesRow2.push(spriteList['rock_wall']);
    levelEditorTexturesRow2.push(spriteList['ice_spikes']);
    levelEditorTexturesRow2.push(spriteList['cliff_ice']);
    levelEditorTexturesRow2.push(spriteList['cliff_rock']);
    wallTextures.push(levelEditorTexturesRow2);

    levelEditorTexturesRow3.push(spriteList['cave_wall']);
    levelEditorTexturesRow3.push(spriteList['cave_wall_icy']);
    levelEditorTexturesRow3.push(spriteList['ship_door']);
    levelEditorTexturesRow3.push(spriteList['ship_interior_valves']);
    levelEditorTexturesRow3.push(spriteList['ship_interior_valves_striped']);
    wallTextures.push(levelEditorTexturesRow3);

    wallTexturesFlat = wallTextures.flat();

    selectedTileTextureIndex = 0;
}
function updateLevelEditor(){

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