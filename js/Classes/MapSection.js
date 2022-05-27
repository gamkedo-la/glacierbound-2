// slowly scroll the sky
var sky_scroll_x = 0;
var WIND_SPEED = 0.00025;

class MapSection {
    constructor() {
        this.grid = shipInterior.grid;
        this.minimapIsDirty = true;
        this.minimapImage = document.createElement('img')
        this.minimapWidth = MAP_NUM_COLS * TILE_SIZE * MINIMAP_SCALE_FACTOR;
        this.minimapHeight = MAP_NUM_ROWS * TILE_SIZE * MINIMAP_SCALE_FACTOR;
    }

    // this is not perspective correct so it would not work for floors
    // but we can assume the sky is infinitely far away
    // for simple math and very fast performance
    drawSky(img='sky_clouds'){
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
    drawFloor(img='floor_snow'){
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

            bufferedGameCanvasContext.drawImage(ray.wallStripTexture, textureOffSetX, 0, 1, TEXTURE_SIZE, i * RAY_INCREMENT_WIDTH, wallTopPixel, RAY_INCREMENT_WIDTH, wallStripHeight);
    
        }
    }

    draw2DMinimap() {

        if (this.minimapIsDirty) {
            colorRect(0, 0, this.minimapWidth, this.minimapHeight, 'lightgrey', bufferedDebugCanvasContext);
    
            for (var row = 0; row < MAP_NUM_ROWS; row++) {
                for ( var col = 0; col < MAP_NUM_COLS; col++) {
                    var tileX = col * TILE_SIZE;
                    var tileY = row * TILE_SIZE;
                    var tileType = this.getTileTypeAtGridCoord(col, row);
    
                    if (tileType != TILE_TYPE_FLOOR) bufferedDebugCanvasContext.drawImage(wallTextures[tileType - 1], tileX * MINIMAP_SCALE_FACTOR, tileY * MINIMAP_SCALE_FACTOR, TEXTURE_SIZE * MINIMAP_SCALE_FACTOR, TEXTURE_SIZE * MINIMAP_SCALE_FACTOR);
                }
            }

            this.minimapIsDirty = false;
            this.minimapImage.width = this.minimapWidth
            this.minimapImage.height = this.minimapHeight
            this.minimapImage.src = bufferedDebugCanvas.toDataURL()
        } else {
            bufferedDebugCanvasContext.drawImage(this.minimapImage, 0, 0);
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

    setTileTypeAtPixelCoord(pixelX, pixelY) {
        var scaledPixelX = pixelX / MINIMAP_SCALE_FACTOR;
        var scaledPixelY = pixelY / MINIMAP_SCALE_FACTOR;

        if (!isPixelCoordWithinMapGrid(scaledPixelX, scaledPixelY)) return;

        var tileCol = Math.floor((scaledPixelX) / (TILE_SIZE));
        var tileRow = Math.floor((scaledPixelY) / (TILE_SIZE));

        if(this.grid[tileRow][tileCol] != selectedTileTextureIndex+1){
            this.grid[tileRow][tileCol] = selectedTileTextureIndex + 1;
            mapSection.minimapIsDirty = true;
        }


    }

    changeMap(newMap){
        this.grid = newMap.grid;
    }

}