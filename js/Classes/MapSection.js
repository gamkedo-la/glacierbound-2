// slowly scroll the sky
var sky_scroll_x = 0;
var WIND_SPEED = 0.00025;

class MapSection {
    constructor() {
        this.grid = [
            [4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2],
            [4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [4, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 2],
            [4, 0, 0, 6, 6, 7, 7, 7, 7, 6, 0, 2, 0, 3, 2],
            [4, 4, 0, 0, 0, 0, 0, 0, 6, 6, 0, 2, 0, 0, 2],
            [4, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 2],
            [4, 4, 0, 6, 8, 0, 0, 0, 8, 6, 0, 2, 0, 0, 2],
            [4, 0, 0, 6, 8, 9, 8, 9, 8, 6, 0, 2, 0, 0, 2],
            [4, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 5, 5, 0, 5],
            [2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 5, 5, 0, 5],
            [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5]
            ]
    }

    // this is not perspective correct so it would not work for floors
    // but we can assume the sky is infinitely far away
    // for simple math and very fast performance
    drawSkyPanorama(){
        var imgW = spriteList['sky_clouds'].width;
        var imgH = spriteList['sky_clouds'].height;
        var skyH = Math.round(bufferedGameCanvasContext.canvas.height/2);
        //adjust the width of the image for the available height
        var width = imgW * (skyH/imgH);
        //how far left to draw the image
        var skyX = -(((player.rotationAngle+sky_scroll_x)*width)/(Math.PI*2))%width;
        sky_scroll_x += WIND_SPEED;
        //draw the image
        bufferedGameCanvasContext.drawImage(spriteList['sky_clouds'],skyX,0,width,skyH);
        //if the image ends before the end of the screen draw another starting where the last one stopped (left+width)
        if(skyX < width - bufferedGameCanvasContext.canvas.width){
            bufferedGameCanvasContext.drawImage(spriteList['sky_clouds'],skyX+width,0,width,skyH);
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
        for (var row = 0; row < MAP_NUM_ROWS; row++) {
            for ( var col = 0; col < MAP_NUM_COLS; col++) {
                var tileX = col * TILE_SIZE;
                var tileY = row * TILE_SIZE;
                var tileType = this.getTileTypeAtGridCoord(col, row);

                if (tileType != TILE_TYPE_FLOOR) bufferedDebugCanvasContext.drawImage(wallTextures[tileType - 1], tileX * MINIMAP_SCALE_FACTOR, tileY * MINIMAP_SCALE_FACTOR, TEXTURE_SIZE * MINIMAP_SCALE_FACTOR, TEXTURE_SIZE * MINIMAP_SCALE_FACTOR);
            }
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

        if (this.getTileTypeAtPixelCoord(scaledPixelX, scaledPixelY) != TILE_TYPE_FLOOR) {
            this.grid[tileRow][tileCol] = TILE_TYPE_FLOOR;
        } else {
            this.grid[tileRow][tileCol] = selectedTileTextureIndex + 1;
        }
    }

}