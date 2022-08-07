// slowly scroll the sky
var sky_scroll_x = 0;
var WIND_SPEED = 0.00025;

class MapSection {
    constructor(startingGrid) {
        this.miniMapScaleFactor = (levelEditorEnabled) ? MINIMAP_SCALE_FACTOR * 2 : MINIMAP_SCALE_FACTOR;
        this.originalGrid = startingGrid;
        this.grid = JSON.parse(JSON.stringify(startingGrid));
        this.minimapIsDirty = true;
        this.minimapImage = document.createElement('img');
        this.minimapWidth = MAP_NUM_COLS * TILE_SIZE * this.miniMapScaleFactor;
        this.minimapHeight = MAP_NUM_ROWS * TILE_SIZE * this.miniMapScaleFactor;
        this.minimapX = 0;
        this.minimapY = bufferedHUDCanvas.height - this.minimapHeight;
    }

    // this is not perspective correct so it would not work for floors
    // but we can assume the sky is infinitely far away
    // for simple math and very fast performance
    drawSky(img){
        var tex = spriteList[img];
        var imgW = tex.width;
        var imgH = tex.height;
        var skyH = Math.round(bufferedGameCanvasContext.canvas.height/2);
        //adjust the width of the image for the available height
        var skyW = imgW * (skyH/imgH);
        //how far left to draw the image
        var skyX = -((((player.rotationAngle/2)+sky_scroll_x)*skyW)/(Math.PI*2))%skyW;
        //slowly scroll clouds in the sky
        sky_scroll_x += WIND_SPEED;
        //draw the image
        bufferedGameCanvasContext.drawImage(tex,skyX,0,skyW,skyH);
        //if the image ends before the end of the screen draw another starting where the last one stopped (left+width)
        if(skyX < skyW - bufferedGameCanvasContext.canvas.width){
            bufferedGameCanvasContext.drawImage(tex,skyX+skyW,0,skyW,skyH);
        }
    }

    // not perspective correct:
    // looks good with a flat gradient, not a texture
    drawFloor(img){
        var tex = spriteList[img];
        var imgW = tex.width;
        var imgH = tex.height;
        var floorH = Math.round(bufferedGameCanvasContext.canvas.height/2);
        var floorW = imgW * (floorH/imgH);
        var floorX = -((((player.rotationAngle/2))*floorW)/(Math.PI*2))%floorW;
        var floorY = floorH; // bottom half of screen
        bufferedGameCanvasContext.drawImage(tex,floorX,floorY,floorW,floorH);
        if(floorX < floorW - bufferedGameCanvasContext.canvas.width){
            bufferedGameCanvasContext.drawImage(tex,floorX+floorW,floorY,floorW,floorH);
        }
    }


    draw3DProjectedWalls(){
        for (var i = 0; i < NUM_OF_RAYS; i++){
            var ray = player.rayCaster.rays[i];
            if (ray.drawnThisFrame) break;

            for (var o = 0; o < allObjects.length; o++) {
                if (allObjects[o].distanceToPlayer > ray.distance && allObjects[o].drawnThisFrame == false){
                    allObjects[o].draw();
                }
            }
            
            var rayDistance = ray.distance * Math.cos(ray.rayAngle - player.rotationAngle);
            var wallStripHeight = (TILE_SIZE / rayDistance) * PROJECTION_PLAIN_DISTANCE;

            var wallTopPixel = (bufferedGameCanvasContext.canvas.height/2) - (wallStripHeight/2);
            var wallBottomPixel = (bufferedGameCanvasContext.canvas.height/2) + (wallStripHeight/2);
            wallBottomPixel = wallBottomPixel > bufferedGameCanvasContext.canvas.height ? bufferedGameCanvasContext.canvas.height : wallBottomPixel;

            if (ray.closestWallHitCoord.x % TILE_SIZE === 0){ // if Vertical Hit
                var textureOffSetX = ray.closestWallHitCoord.y % TILE_SIZE;
            } else { //else if Horizonal Hit
                var textureOffSetX = ray.closestWallHitCoord.x % TILE_SIZE;
            }

            textureOffSetX *= (TEXTURE_SIZE / TILE_SIZE);
            textureOffSetX = Math.floor(textureOffSetX);

            bufferedGameCanvasContext.drawImage(ray.wallStripTexture, textureOffSetX, 0, 1, TEXTURE_SIZE, ray.id * RAY_INCREMENT_WIDTH, wallTopPixel, RAY_INCREMENT_WIDTH, wallStripHeight);
            
            ray.drawnThisFrame = true;
        }
    }

    draw3DProjectedWallReflections(){ // work in progress - it should flip them upside down!
        //bufferedGameCanvasContext.save(); // hmm I can't get this to work right
        bufferedGameCanvasContext.globalAlpha = 0.05; // see-thru
        //bufferedGameCanvasContext.rotate(180 * Math.PI / 180);
        //bufferedGameCanvasContext.scale(1,-1); // upside down?
        //bufferedGameCanvasContext.setTransform(1, 0, 0, -1, 0, 0); // flipped?
        for (var i = 0; i < NUM_OF_RAYS; i++){
            var ray = player.rayCaster.rays[i];
            var rayDistance = ray.distance * Math.cos(ray.rayAngle - player.rotationAngle);
            var wallStripHeight = (TILE_SIZE / rayDistance) * PROJECTION_PLAIN_DISTANCE;
            var wallTopPixel = (bufferedGameCanvasContext.canvas.height/2) - (wallStripHeight/2);
            var wallBottomPixel = (bufferedGameCanvasContext.canvas.height/2) + (wallStripHeight/2);
            wallBottomPixel = wallBottomPixel > bufferedGameCanvasContext.canvas.height ? bufferedGameCanvasContext.canvas.height : wallBottomPixel;
            if (ray.closestWallHitCoord.x % TILE_SIZE === 0){ // if Vertical Hit
                var textureOffSetX = ray.closestWallHitCoord.y % TILE_SIZE;
            } else { //else if Horizonal Hit
                var textureOffSetX = ray.closestWallHitCoord.x % TILE_SIZE;
            }
            textureOffSetX *= (TEXTURE_SIZE / TILE_SIZE);
            textureOffSetX = Math.floor(textureOffSetX);

            // floors start at BOTTOM pixels of a hit wall and extend to the bottom of the screen
            // FIXME change to floorStripTexture and do once for each horizontal line
            // with perspective correction via matrix skew transform??? HMMMM TODO FIXME
            bufferedGameCanvasContext.drawImage(ray.wallStripTexture, textureOffSetX, 0, 1, TEXTURE_SIZE, ray.id * RAY_INCREMENT_WIDTH, wallBottomPixel, RAY_INCREMENT_WIDTH, wallStripHeight);
        }
        bufferedGameCanvasContext.globalAlpha = 1; // reset
        //bufferedGameCanvasContext.scale(1,-1); // reset
        //a Horizontal scaling	
        //b	Horizontal skewing	
        //c	Vertical skewing	
        //d	Vertical scaling	
        //e	Horizontal moving	
        //f	Vertical moving
        //bufferedGameCanvasContext.setTransform(1, 0, 0, 1, 0, 0); // reset
        //bufferedGameCanvasContext.restore();
    }

    draw2DMinimap() {
        if (!inventory.containsItem('Map') && !DEBUG_MODE_ENBALED) return;

        this.miniMapScaleFactor = (levelEditorEnabled) ? MINIMAP_SCALE_FACTOR * 2 : MINIMAP_SCALE_FACTOR;
        this.minimapWidth = MAP_NUM_COLS * TILE_SIZE * this.miniMapScaleFactor;
        this.minimapHeight = MAP_NUM_ROWS * TILE_SIZE * this.miniMapScaleFactor;
        this.minimapY = (levelEditorEnabled) ? 0 : bufferedHUDCanvas.height - this.minimapHeight;
        

        //if (this.minimapIsDirty) {  //Causing minimap drawing bug
            
            bufferedHUDCanvasContext.clearRect(0,0,this.minimapWidth, this.minimapHeight);

            //draw minimap backgroud
            colorRect(0, this.minimapY, this.minimapWidth, this.minimapHeight, 'black', bufferedHUDCanvasContext);
    
            for (var row = 0; row < MAP_NUM_ROWS; row++) {
                for ( var col = 0; col < MAP_NUM_COLS; col++) {

                    if (levelList[currentRoom].seenGrid[row][col] == 1) {
                        var tileX = col * TILE_SIZE;
                        var tileY = row * TILE_SIZE;
                        var tileType = this.getTileTypeAtGridCoord(col, row);

                        //draw revealed floor tiles
                        colorRect(tileX * this.miniMapScaleFactor, (tileY * this.miniMapScaleFactor) + this.minimapY, TEXTURE_SIZE * this.miniMapScaleFactor, TEXTURE_SIZE * this.miniMapScaleFactor, 'lightgrey', bufferedHUDCanvasContext);

                        if (tileType != TILE_TYPE_FLOOR && tileType < 79) {
                            bufferedHUDCanvasContext.drawImage(wallTexturesFlat[tileType - 1], tileX * this.miniMapScaleFactor, (tileY * this.miniMapScaleFactor) + (this.minimapY), TEXTURE_SIZE * this.miniMapScaleFactor, TEXTURE_SIZE * this.miniMapScaleFactor);
                        }

                        if (tileType >= 80 && DEBUG_MODE_ENBALED) {
                            colorCircle((tileX + TILE_SIZE/2) * this.miniMapScaleFactor, (tileY + TILE_SIZE/2) * this.miniMapScaleFactor, 5, "blue", bufferedHUDCanvasContext);
                        }
                    } 
                }
            }

            this.minimapIsDirty = false;
            this.minimapImage.width = this.minimapWidth;
            this.minimapImage.height = this.minimapHeight;
            this.minimapImage.src = bufferedHUDCanvas.toDataURL();
        //} else {

            //if (MINIMAP_ENABLED) {
            //    // regular, larger, opaque "debug version" of the minimap
            //    bufferedHUDCanvasContext.drawImage(this.minimapImage, 0, this.minimapY);
            //}

            //if (RADAR_ENABLED) {
             //   // small radar version
            //    if (RADAR_BG_ENABLED) colorRect(RADAR_X, RADAR_Y, RADAR_W, RADAR_H, RADAR_BG_FILL, bufferedHUDCanvasContext);
            //    bufferedHUDCanvasContext.globalAlpha = RADAR_ALPHA;
            //    bufferedHUDCanvasContext.drawImage(this.minimapImage, RADAR_X, RADAR_Y, RADAR_W, RADAR_H);
            //    bufferedHUDCanvasContext.globalAlpha = 1;
            //}
            
        //}
    }

    drawCeilingAndFloor(){
        this.drawSky(levelList[currentRoom].skyMapName);
        this.drawFloor(levelList[currentRoom].floorMapName);
        if (levelList[currentRoom].floorReflection) {
            this.draw3DProjectedWallReflections(); // work in progress...
        }
    }

    getTileTypeAtPixelCoord(pixelX, pixelY) {
        if (!isPixelCoordWithinMapGrid(pixelX, pixelY)) return TILE_TYPE_WALL;

        var tileCol = Math.floor(pixelX / TILE_SIZE);
        var tileRow = Math.floor(pixelY / TILE_SIZE);
        return this.grid[tileRow][tileCol];
    }

    getTileTypeAtGridCoord(col, row) {
        if (!isGridCoordWithinMapGrid(col, row)) return TILE_TYPE_WALL;

        return this.grid[row][col];
    }

    setTileTypeAtPixelCoord(pixelX, pixelY, tileType) {
        var scaledPixelX = pixelX / this.miniMapScaleFactor;
        var scaledPixelY = pixelY / this.miniMapScaleFactor;

        if (!isPixelCoordWithinMapGrid(scaledPixelX, scaledPixelY)) return;

        var tileCol = Math.floor((scaledPixelX) / (TILE_SIZE));
        var tileRow = Math.floor((scaledPixelY) / (TILE_SIZE));

        this.grid[tileRow][tileCol] = tileType;
        mapSection.minimapIsDirty = true;
    }

    setTileTypeAtGridCoord(col, row, tileType){
        this.grid[row][col] = tileType;
        this.originalGrid[row][col] = tileType;
    }

    getGridCoordFromPixelCoord(pixelX, pixelY){
        if (!isPixelCoordWithinMapGrid(pixelX, pixelY)) return;

        var gridCoord = {
            col: Math.floor((pixelX) / (TILE_SIZE)),
            row: Math.floor((pixelY) / (TILE_SIZE))
        }

        return gridCoord;
    }

    getTileCenterPixelCoordFromGridCoord(col, row) {
        if (!isGridCoordWithinMapGrid(col, row)) return;

        var pixelCoord = {
            x: (col * TILE_SIZE) + (TILE_SIZE / 2),
            y: (row * TILE_SIZE) + (TILE_SIZE / 2),
        }

        return pixelCoord;
    }

    changeMap(newMapIndex){
        if (!player.canExitMapSection && !wasLevelSelectPressed) return;
        if (levelEditorEnabled) return;

        var previousMapID = levelList[currentRoom].mapID;
        player.previousMapSection = currentRoom;
        currentRoom = newMapIndex;
        var newMap = levelList[newMapIndex];
        this.originalGrid = newMap.grid;
        this.grid = JSON.parse(JSON.stringify(newMap.grid));
        playMusic(audioSourceList[newMap.mapMusicTrack]);

        var startingPosition = this.findPlayerStartPosition(previousMapID);
        player.x = (startingPosition.col * TILE_SIZE) + player.posInTile.x;
        player.y = (startingPosition.row * TILE_SIZE) + player.posInTile.y;
        player.startingCol = startingPosition.col
        player.startingRow = startingPosition.row
        player.canExitMapSection = false;

        this.minimapIsDirty = true;
        wasLevelSelectPressed = false;
    }

    findPlayerStartPosition(previousMapID) {
        var defaultStartPos = 0;
        for (var row = 0; row < MAP_NUM_ROWS; row++) {
            for ( var col = 0; col < MAP_NUM_COLS; col++) {

                if (levelList[currentRoom].grid[row][col] >= 80  && defaultStartPos === 0){
                    defaultStartPos = {row: row,col: col};
                } 

                if (levelList[currentRoom].grid[row][col] == previousMapID) {
                    var startPosition = {
                        row: row,
                        col: col
                    }
                    console.log(startPosition);
                    return startPosition;
                }
            }
        }

        return defaultStartPos;
    }
}